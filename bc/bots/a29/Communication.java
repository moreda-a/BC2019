package bc19;

public class Communication extends Util {
	public static int cmessage = 0;
	public static int smessage = 0;
	public static int maxSignalRange = 0;
	public static int maxSignalRangeM = 0;
	public static int maxSignalRangeExpand = 0;

	public static void turn() {
		cmessage = 0;
		smessage = 0;
		maxSignalRange = 0;
		maxSignalRangeM = 0;
		maxSignalRangeExpand = 0;
	}

	public static void castleInCastle() {
		Castle.unitNum = 0;
		for (Robot r : mr.getVisibleRobots()) {
			if (r.team == teami.number()) {
				// mr.log("ez :" + r.id + " - " + r.castle_talk);
				// mr.log("ASSDFSF : " + r.x);//undefined :D
				if (!mr.isVisible(r) || r.x != myp.x || r.y != myp.y) {

					Castle.unitNum++;
					handleCastleIn(r);
				}
				lastKnownR[r.id] = me.turn;
			}
		}

		if (me.turn == 1) {
			cmessage = myp.x * 4 + 1;// [XXXXXX01]
		} else if (me.turn == 2) {
			cmessage = myp.y * 4 + 1;// [XXXXXX01]
		}
	}

	private static void handleCastleIn(Robot r) {
		int opcode = decode(r.castle_talk, 0, 2);
		int oopcode = decode(r.castle_talk, 0, 4);
		if (opcode == 0) {// [XXXXXX00]
//			mr.log("hh-1 " + decode(r.castle_talk, 0, 4));
			if (decode(r.castle_talk, 0, 4) == 4 * 1) {// [XXXX0100]
//				mr.log("hh0");
				if (me.turn >= 3) {
//					mr.log("hh1 " + xid.size());
					if (xid.size() + 1 != decode(r.castle_talk, 4, 6)) {// [--XX0100]
//						mr.log("hh2");
//						if (mr.isVisible(r))
//							mr.log("hh2.5 " + p[r.x][r.y].dist2(myp));
						if (mr.isVisible(r) && p[r.x][r.y].dist2(myp) <= 100
								&& p[r.x][r.y].dist2(myp) > maxSignalRange) {
							// mr.log("hh3");
							maxSignalRange = p[r.x][r.y].dist2(myp);
						}
					} else {
						if (mr.isVisible(r) && p[r.x][r.y].dist2(myp) <= 100
								&& p[r.x][r.y].dist2(myp) > maxSignalRangeM) {
							maxSignalRangeM = p[r.x][r.y].dist2(myp);
						}
					}
				}
			} else if (decode(r.castle_talk, 0, 4) == 4 * 2) {// [XXXX1000] pil want to expand
				if (mr.isVisible(r) && p[r.x][r.y].dist2(myp) <= 100 && p[r.x][r.y].dist2(myp) > maxSignalRangeExpand) {
					// mr.log("hh3");
					maxSignalRangeExpand = p[r.x][r.y].dist2(myp);
				}
			} else if (decode(r.castle_talk, 0, 4) == 4 * 3) {// [XXXX1100] pil want to expand
				// if (mr.isVisible(r) && p[r.x][r.y].dist2(myp) <= 100 &&
				// p[r.x][r.y].dist2(myp) > maxSignalRangeExpand)
				{
					// mr.log("hh3");
					Castle.stopUsingRes = true;
				}
			}
		} else if (opcode == 1) {
			if (!allKnownR[r.id]) { // just happens for castles for fastest access
				allKnownR[r.id] = true;
				typeKnownR[r.id] = UnitType.Castle.number();
				knownRList.add(r.id);
			}
			if (allKnownR[r.id])
				if (typeKnownR[r.id] == UnitType.Castle.number()) {
					if (!xid.containsKey(r.id)) {
						xr[r.id] = decode(r.castle_talk, 2, 8);
						xid.put(r.id, decode(r.castle_talk, 2, 8));
					} else {
						yr[r.id] = decode(r.castle_talk, 2, 8);
						yid.put(r.id, decode(r.castle_talk, 2, 8));
						Point pp = p[xid.get(r.id)][decode(r.castle_talk, 2, 8)];
						if (!pp.icastle && pp.icastleNotDes) {
							pp.icastle = true;
							castlei.add(pp);
						}
						Point pr = revPoint(pp);
						if (!pr.ocastle && pr.ocastleNotDes) {
							pr.ocastle = true;
							castleo.add(pr);
						}
					}
				} else {
					if (xr[r.id] == -1) {
						xr[r.id] = decode(r.castle_talk, 2, 8);
					} else {
						yr[r.id] = decode(r.castle_talk, 2, 8);
//					Point pp = p[xid.get(r.id)][decode(r.castle_talk, 2, 8)];
//					if (!pp.icastle && pp.icastleNotDes) {
//						pp.icastle = true;
//						castlei.add(pp);
//					}
//					Point pr = revPoint(pp);
//					if (!pr.ocastle && pr.ocastleNotDes) {
//						pr.ocastle = true;
//						castleo.add(pr);
//					}
					}
				}
		} else if (opcode == 2) {
			if (decode(r.castle_talk, 2, 4) == 0) {// [XXXX0010]
				allKnownR[r.id] = true;
				typeKnownR[r.id] = decode(r.castle_talk, 4, 7);
				knownRList.add(r.id);
				xr[r.id] = -1;
				yr[r.id] = -1;
				if (typeKnownR[r.id] == UnitType.Church.number())
					knownRListChu.add(r.id);

				if (decode(r.castle_talk, 7, 8) == 1)
					Castle.stopUsingRes = true;

			} else if (decode(r.castle_talk, 2, 4) == 1) {// [XXXX0110]
//				
			} else if (decode(r.castle_talk, 2, 4) == 2) {// [XXXX1010] pil want to expand

			} else if (decode(r.castle_talk, 2, 4) == 3) {// [XXXX1110] pil want to expand
				// if (mr.isVisible(r) && p[r.x][r.y].dist2(myp) <= 100 &&
				// p[r.x][r.y].dist2(myp) > maxSignalRangeExpand)
				{
					// mr.log("hh3");
					Castle.stopUsingRes = true;
					Castle.pullNow = true;
				}
			}
		} else if (opcode == 3) {

		}

	}

	public static int decode(int code, int start, int end) {
		return (code / (int) Math.pow(2, start)) % (int) Math.pow(2, end - start);
	}

	public static void encode(int code, int start, int end) {
		cmessage = cmessage + (code - decode(cmessage, start, end)) * (int) Math.pow(2, start);
	}

	public static void signalInPreacher() {
		encode(castlei.size() * 16 + 1 * 4, 0, 6);
		Preacher.stopCommand = false;
		// what about radio enemy?!!?
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isRadioing(r) || (mr.isVisible(r) && mr.getRobot(r.id).team != teami.number()))
				continue;
			handleSignalInPreacher(r);
			if (r.id != me.id)
				mr.log("sz :" + r.id + " - " + r.signal);

		}
	}

//lock  ?
	private static void handleSignalInPreacher(Robot r) {
		int opcode = decode(r.signal, 0, 4);
		if (opcode == 5) {// [DDDD,DDDD,DDDD,0101] -> scout tell me to stop
			Preacher.stopCommand = true;
			// stop command
		} else if (opcode == 6) {// [XXXX,XXYY,YYYY,0110]
//			mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10) + " - "
//					+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			Point pp = p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)];
			if (!pp.icastle && pp.icastleNotDes) {
				pp.icastle = true;
				castlei.add(pp);
			}
			Point pr = revPoint(pp);
			if (!pr.ocastle && pr.ocastleNotDes) {
				pr.ocastle = true;
				castleo.add(pr);
			}

			if (Preacher.mode == 0)
				encode(castlei.size() * 16 + 1 * 4, 0, 6);
			else
				encode(castlei.size() * 16 + 2 * 4, 0, 6);

		} else if (opcode == 7) {// [XXXX,XXYY,YYYY,0111]
//			mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10) + " - "
//			+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			Point pp = p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)];
			if (!pp.icastle && pp.icastleNotDes) {
				pp.icastle = true;
				castlei.add(pp);
			}
			Point pr = revPoint(pp);
			if (!pr.ocastle && pr.ocastleNotDes) {
				pr.ocastle = true;
				castleo.add(pr);
			}

			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
		} else if (opcode == 8) {// [DDDD,DDDD,DDDD,1000]
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
		} else if (opcode == 9) {// [DDDD,DDDD,DDDD,1001]
			Preacher.slowRush = true;
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
		} else if (opcode == 11) {// [XXXX,XXYY,YYYY,1011]
			// mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10)
			// + " - "
//			+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			Point pp = p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)];
			if (!pp.icastle && pp.icastleNotDes) {
				pp.icastle = true;
				castlei.add(pp);
			}
			Point pr = revPoint(pp);
			if (!pr.ocastle && pr.ocastleNotDes) {
				pr.ocastle = true;
				castleo.add(pr);
			}
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
			Preacher.slowRush = true;
		}

	}

	public static void signalOutCastle() {
		if (maxSignalRangeExpand != 0) {
			// mr.log("HH");
			Castle.expTarget = Nav.expandTargetXXX();
			if (Castle.expTarget != null) {
				smessage = Castle.expTarget.x * (int) Math.pow(2, 10) + Castle.expTarget.y * (int) Math.pow(2, 4) + 10;
				Castle.lookInProg.add(Castle.expTarget);
			}
			// [XXXX,XXYY,YYYY,1100]
		} else {
			// mr.log("HH1");
			if (maxSignalRangeM != 0 && Castle.wave != 0) {
				mr.log("HH2");
				if (me.turn >= 150) {
					if (maxSignalRange == 0) {
						smessage = 9;
						// [XXXX,XXYY,YYYY,1001]
					} else {
						mr.log("HH3");
						if (xid.size() == 2) {
							int t = me.turn % 2;
							for (Integer id : xid.keySet()) {
								if (t == 0) {
									smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4)
											+ 11;
									// [XXXX,XXYY,YYYY,1101]
									break;
								}
								t--;
							}
						} else if (xid.size() == 1) {
							// mr.log("HH4");
							for (Integer id : xid.keySet()) {
								smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4)
										+ 11;
								// [XXXX,XXYY,YYYY,1101]
							}
						}
					}
				} else {
					if (maxSignalRange == 0) {
						smessage = 2 * 4;
						// [XXXX,XXYY,YYYY,1000]
					} else {
						// mr.log("HH3");
						if (xid.size() == 2) {
							int t = me.turn % 2;
							for (Integer id : xid.keySet()) {
								if (t == 0) {
									smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4)
											+ 7;
									// [XXXX,XXYY,YYYY,0111]
									break;
								}
								t--;
							}
						} else if (xid.size() == 1) {
							// mr.log("HH4");
							for (Integer id : xid.keySet()) {
								smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 7;
								// [XXXX,XXYY,YYYY,0111]
							}
						}
					}
				}
			} else {
				// mr.log("HH5");
				if (maxSignalRange == 0)
					return;
				if (xid.size() == 2) {
					// mr.log("HH7");
					int t = me.turn % 2;
					for (Integer id : xid.keySet()) {
						if (t == 0) {
							smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 6;
							// [XXXX,XXYY,YYYY,0110]
							break;
						}
						t--;
					}
				} else if (xid.size() == 1) {
					// mr.log("HH8");
					for (Integer id : xid.keySet()) {
						smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 6;
						// [XXXX,XXYY,YYYY,0110]
					}
				}
			}
		}
	}

	public static void castleOut() {
		mr.castleTalk(cmessage);
	}

	public static void signalOut() {
		if (maxSignalRangeExpand != 0) {
			mr.signal(smessage, maxSignalRangeExpand);
			mr.log("signal : " + smessage + " - " + maxSignalRangeExpand);

		} else {
			if (maxSignalRangeM != 0 && Castle.wave != 0) {
				mr.signal(smessage, Math.max(maxSignalRangeM, maxSignalRange));
				mr.log("signal : " + smessage + " - " + Math.max(maxSignalRangeM, maxSignalRange));
			} else if (maxSignalRange != 0) {
				mr.signal(smessage, maxSignalRange);
				mr.log("signal : " + smessage + " - " + maxSignalRange);
			}
		}
	}

	public static void signalInPilgrim() {
		encode(castlei.size() * 16 + 1 * 4, 0, 6);
		Preacher.stopCommand = false;
		// what about radio enemy?!!?
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isRadioing(r) || (mr.isVisible(r) && mr.getRobot(r.id).team != teami.number()))
				continue;
			handleSignalInPilgrim(r);
			if (r.id != me.id)
				mr.log("sz :" + r.id + " - " + r.signal);

		}
	}

	private static void handleSignalInPilgrim(Robot r) {
		int opcode = decode(r.signal, 0, 4);
		if (opcode == 5) {
			// Preacher.stopCommand = true;
			// stop command
		} else if (opcode == 6) {
//			mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10) + " - "
//					+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			Point pp = p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)];
			if (!pp.icastle && pp.icastleNotDes) {
				pp.icastle = true;
				castlei.add(pp);
			}
			Point pr = revPoint(pp);
			if (!pr.ocastle && pr.ocastleNotDes) {
				pr.ocastle = true;
				castleo.add(pr);
			}
			encode(castlei.size() * 16 + 1 * 4, 0, 6);
		} else if (opcode == 10) {
			Pilgrim.expTarget = p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)];
			Pilgrim.wantExp = false;
			encode(castlei.size() * 16 + 1 * 4, 0, 6);
		}

		if (Pilgrim.wantExp && Pilgrim.expTarget == null) {
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
		}
	}
}
