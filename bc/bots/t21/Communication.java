package bc19;

public class Communication extends Util {
	public static int cmessage = 0;
	public static int smessage = 0;
	public static int maxSignalRange = 0;
	public static int maxSignalRangeM = 0;

	public static void turn() {
		cmessage = 0;
		maxSignalRange = 0;
		maxSignalRangeM = 0;
	}

	public static void castleInCastle() {
		for (Robot r : mr.getVisibleRobots()) {
			if (r.team == teami.number()) {
				// mr.log("ez :" + r.id + " - " + r.castle_talk);
				if (!mr.isVisible(r) || r.x != myp.x || r.y != myp.y)
					handleCastleIn(r);
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
		if (opcode == 1) {
			if (me.turn == 1) {
				xid.put(r.id, decode(r.castle_talk, 2, 8));
			} else if (me.turn == 2) {
				if (xid.containsKey(r.id))
					yid.put(r.id, decode(r.castle_talk, 2, 8));
				else
					xid.put(r.id, decode(r.castle_talk, 2, 8));
			} else if (me.turn == 3) {
				yid.put(r.id, decode(r.castle_talk, 2, 8));
			}
		} else if (opcode == 0) {
//			mr.log("hh-1 " + decode(r.castle_talk, 0, 4));
			if (decode(r.castle_talk, 0, 4) == 4 * 1) {
//				mr.log("hh0");
				if (me.turn >= 3) {
//					mr.log("hh1 " + xid.size());
					if (xid.size() + 1 != decode(r.castle_talk, 4, 6)) {
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
			} else if (decode(r.castle_talk, 0, 4) == 4 * 2) {

			}
		}

	}

	private static int decode(int code, int start, int end) {
		return (code / (int) Math.pow(2, start)) % (int) Math.pow(2, end - start);
	}

	private static void encode(int code, int start, int end) {
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
		if (opcode == 5) {
			Preacher.stopCommand = true;
			// stop command
		} else if (opcode == 6) {
//			mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10) + " - "
//					+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			castlei.add(p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			p[r.x][r.y].icastle = true;
			if (Preacher.mode == 0)
				encode(castlei.size() * 16 + 1 * 4, 0, 6);
			else
				encode(castlei.size() * 16 + 2 * 4, 0, 6);

		} else if (opcode == 7) {
//			mr.log("hrll : " + decode(r.signal, 10, 16) + " - " + decode(r.signal, 4, 10) + " - "
//			+ (r.signal / (int) Math.pow(2, 4)) + " - " + p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			castlei.add(p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			p[r.x][r.y].icastle = true;
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
		} else if (opcode == 8) {
			encode(castlei.size() * 16 + 2 * 4, 0, 6);
			Preacher.mode = 1;
		}

	}

	public static void signalOutCastle() {
		if (maxSignalRangeM != 0 && Castle.wave != 0) {
			if (maxSignalRange == 0) {
				smessage = 8;
			} else {
				if (xid.size() == 2) {
					int t = me.turn % 2;
					for (Integer id : xid.keySet()) {
						if (t == 0) {
							smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 7;
							break;
						}
						t--;
					}
				} else if (xid.size() == 1) {
					for (Integer id : xid.keySet()) {
						smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 7;
					}
				}
			}
		} else {
			if (maxSignalRange == 0)
				return;
			if (xid.size() == 2) {
				int t = me.turn % 2;
				for (Integer id : xid.keySet()) {
					if (t == 0) {
						smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 6;
						break;
					}
					t--;
				}
			} else if (xid.size() == 1) {
				for (Integer id : xid.keySet()) {
					smessage = xid.get(id) * (int) Math.pow(2, 10) + yid.get(id) * (int) Math.pow(2, 4) + 6;
				}
			}
		}
	}

	public static void castleOut() {
		mr.castleTalk(cmessage);
	}

	public static void signalOut() {
		if (maxSignalRangeM != 0 && Castle.wave != 0) {
			mr.signal(smessage, Math.max(maxSignalRangeM, maxSignalRange));
			mr.log("signal : " + smessage + " - " + Math.max(maxSignalRangeM, maxSignalRange));
		} else if (maxSignalRange != 0) {
			mr.signal(smessage, maxSignalRange);
			mr.log("signal : " + smessage + " - " + maxSignalRange);
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
			castlei.add(p[decode(r.signal, 10, 16)][decode(r.signal, 4, 10)]);
			p[r.x][r.y].icastle = true;
			encode(castlei.size() * 16 + 1 * 4, 0, 6);
		}

	}
}
