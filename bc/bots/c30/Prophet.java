package bc19;

import java.util.ArrayList;

public class Prophet extends Util {
	public static Point savePo;
	public static int lastTry = -5;
	private static Point runAway = null;
	public static int mode = 0;
	public static ArrayList<Point> lastmyp = new ArrayList<Point>();
	public static boolean madeByCastle = true;
	public static boolean slowRush = false;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		lastmyp.add(myp);
		if (me.turn == 1) {
			madeByCastle = false;
			for (Robot r : mr.getVisibleRobots())
				if (mr.isVisible(r) && r.team == teami.number()
						&& (r.unit == UnitType.Castle.number() || r.unit == UnitType.Church.number())) {
					if (myp.dist2(p[r.x][r.y]) <= 2) {
						myCC = p[r.x][r.y];
						if (r.unit == UnitType.Castle.number())
							madeByCastle = true;
						else
							madeByCastle = false;
					}
				}
		}
		checkFight();

		Communication.turn();
		Communication.signalInProphet();
		// mr.log("KK1");
		Communication.castleOut();

		// mr.log("idiot1");
		if (dangerEnemy == null && attackTarget != null) {
			// mr.log("idiot2");
			mr.log("attack by a prophet. x: " + attackTarget.x + " y: " + attackTarget.y);
			return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
		} else if (dangerEnemy == null && attackTarget == null) {
			if (!mr.lastActionDone) {
				mainPath.push(savePo);
				// mr.log("ASTAR VALUE: " + Nav.ins);
			}

			// mr.log("idiot3");
			if (dest == myp) {
				if (mode == 0) {
					if (madeByCastle) {
						// mode = 5;
						// dest = null;
					}
					mr.log("stoping here");
					return null;
				}
				dest.ocastle = false;
				dest.ocastleNotDes = false;
				dest = null;
			}
			// mr.log("idiot4");
			// stop over calculate 20*5 = 100
			if ((dest == null && lastTry + 5 <= me.turn) || (me.turn > 6 && lastmyp.get(me.turn - 5).x == myp.x
					&& lastmyp.get(me.turn - 5).y == myp.y && lastTry + 5 <= me.turn)) {
				// Nav.setTargetEnemyCastle();
				// mr.log("idiots");
				if (mode == 0) {
					if (madeByCastle) {
						mainPath = Nav.defWithProphet2back();
						if (mainPath == null || mainPath.size() == 0 || mainPath.peek() == null)
							mainPath = Nav.defWithProphet2();
					} else {
						mainPath = Nav.defWithProphet2();
					}
				}
				if (mode != 0) {
					mainPath = Nav.slowAttEnemeyCastle();
				}
				lastTry = me.turn;
			}
			// mr.log("idiot5");
//			if (dest == null && lastTry + 5 <= me.turn) {
//				// Nav.setTargetEnemyCastle();
//				mainPath = Nav.attEnemeyCastle();
//				lastTry = me.turn;
//			}
			if (dest != null && dest != myp) {
				mr.log("idiot6");
				Point po = mainPath.peek();
				if ((mode == 5 || slowRush) && myp.dist2(po) == 4) {// || mode == 1
					mr.log("ss3");
					int xx = myp.x + myp.dxTo(po) / 2;
					int yy = myp.y + myp.dyTo(po) / 2;
					if (canReach(p[xx][yy])) {
						// recalc = 0;
						mr.log("move slowRush a preacher. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
						return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
					}
				}
				if (canReach(po)) {
					mainPath.pop();
					savePo = po;
					// recalc = 0;
					mr.log("move(1) a prophet. x: " + po.x + " y: " + po.y);
					return mr.move(myp.dxTo(po), myp.dyTo(po));
				} else {
					// mr.log("HERE0");
//					if (subPath == null) {
//						if (mainPath.size() == 1)
//							subPath = Nav.AStar4(po);
//						else {
//							mainPath.pop();
//							savePo = po;
//							Point poo = mainPath.peek();
//							subPath = Nav.AStar4(poo);
//						}
//					} else {
//						Point px = subPath.peek();
//						if(canReach(px))
//					}
					if (mainPath.size() == 1) {
						// mr.log("HERE1");
						int xx = myp.x + myp.dxTo(po) / 2;
						int yy = myp.y + myp.dyTo(po) / 2;
						if (canReach(p[xx][yy])) {
							// recalc = 0;
							mr.log("move(2) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
							return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
						}
					} else {
						// mr.log("HERE2");
						mainPath.pop();
						Point poo = mainPath.peek();
						int xx = myp.x + po.dxTo(poo);
						int yy = myp.y + po.dyTo(poo);
						if (canReach(p[xx][yy])) {
							// recalc = 0;
							mr.log("move(3) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
							return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
						} else {
							// mr.log("HERE4");
							mainPath.push(po);
							xx = myp.x + myp.dxTo(po) / 2;
							yy = myp.y + myp.dyTo(po) / 2;
							if (canReach(p[xx][yy])) {
								// recalc = 0;
								mr.log("move(4) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
								return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
							}
							// mr.log("HERE5");
						}
					}

				}
			}
		} else // dangerEnemy != null
		{
			if (!isItSafe(myp)) {
				tryToGoToSafe();
				if (runAway != null) {
					mr.log("move(runaway2) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
				} else if (attackTarget != null) {
					mr.log("stand and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
				}
			}
			justRunAway();
			if (runAway != null) {
				mr.log("move(5) a prophet. x: " + runAway.x + " y: " + runAway.y);
				return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
			} else if (attackTarget != null) {
				mr.log("attack and die by a prophet. x: " + attackTarget.x + " y: " + attackTarget.y);
				return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
			}
			// else ???
		}

		return null;
	}

	private static void tryToGoToSafe() {
		runAway = null;
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (po != null && canReach(po)) {// vision cru+ 27pre
				runAway = po;
				break;
			}
		}
		if (runAway == null)
			for (Direction4 dir : Direction4.values()) {
				Point po = myp.dir4To(dir);
				if (po != null && canHalfReach(po)) {// attack cru+ 27pre
					runAway = po;
					break;
				}
			}
	}

	private static boolean canReachN(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Prophet.number()].FUEL_PER_MOVE * myp.dist2(po))
			return true;
		return false;
	}

	private static boolean canReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Prophet.number()].FUEL_PER_MOVE * myp.dist2(po) && isItSafe(po))
			return true;
		return false;
	}

	private static boolean canHalfReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Prophet.number()].FUEL_PER_MOVE * myp.dist2(po)
				&& isItHalfSafe(po))
			return true;
		return false;
	}

	public static boolean isItSafe(Point po) {
		for (Point ppo : seenO) {
			if (ppo.unit == UnitType.Church.number() || ppo.unit == UnitType.Pilgrim.number())
				continue;
			if (ppo.unit == UnitType.Preacher.number() && po.dist2(ppo) <= 26)// can change this
				return false;
			if (ppo.unit == UnitType.Castle.number() && po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].ATTACK_RADIUS[1])
				return false;
			if (po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].VISION_RADIUS) // pro and cru (can change for cru)
				return false;
		}
		return true;
	}

	public static boolean isItSafeX(Point po) {
		for (Point ppo : seenO) {
			if (ppo.unit == UnitType.Church.number() || ppo.unit == UnitType.Pilgrim.number())
				continue;
			if (ppo.unit == UnitType.Preacher.number() && po.dist2(ppo) <= 26)// can change this
				return false;
			if (ppo.unit == UnitType.Castle.number() && po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].ATTACK_RADIUS[1])
				return false;
//			if (po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].VISION_RADIUS) // pro and cru (can change for cru)
//				return false;
		}
		return true;
	}

	private static boolean isItHalfSafe(Point po) {
		for (Point ppo : seenO) {
			if (ppo.unit == UnitType.Church.number() || ppo.unit == UnitType.Pilgrim.number())
				continue;
			if (ppo.unit == UnitType.Preacher.number() && po.dist2(ppo) <= 16)// can change this
				return false;
			if (ppo.unit == UnitType.Castle.number() && po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].ATTACK_RADIUS[1])
				return false;
			if (po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].ATTACK_RADIUS[1]) // pro and cru (can change for cru)
				return false;
		}
		return true;
	}

	private static void justRunAway() {
		runAway = null;
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (po != null && po.passable && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.dist2(dangerEnemy) > 16) {
				runAway = po;
				break;
			}
		}

	}

	private static void checkFight() {
		// what about radio enemy?!!?
		int value = 0, mx = 0, mn = 10000;
		Point po = null, poo = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 64 && myp.dist2(p[r.x][r.y]) >= 16) {
				if (r.unit == UnitType.Castle.number())
					value = 1;
				if (r.unit == UnitType.Church.number())
					value = 2;
				if (r.unit == UnitType.Pilgrim.number())
					value = 3;
				if (r.unit == UnitType.Crusader.number())
					value = 3;
				if (r.unit == UnitType.Prophet.number())
					value = 4;
				if (r.unit == UnitType.Preacher.number())
					value = 5;
				// add value of neighbor health and ...
				if (value > mx) {
					po = p[r.x][r.y];
					mx = value;
				}
			}

			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
				if (mn > myp.dist2(p[r.x][r.y])) {
					poo = p[r.x][r.y];
					mn = myp.dist2(p[r.x][r.y]);
				}
			}
			// what about others?
		}
		attackTarget = po;
		dangerEnemy = poo;
	}

}
