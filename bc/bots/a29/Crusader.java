package bc19;

import java.util.ArrayList;

public class Crusader extends Util {

	public static Point savePo;
	public static int lastTry = -5;
	private static Point runAway = null;
	public static int mode = 0;
	public static Point followTarget = null;
	public static ArrayList<Point> lastmyp = new ArrayList<Point>();
	public static boolean madeByCastle;
	public static boolean firstIdiot = false;;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		lastmyp.add(myp);
		if (me.turn == 1) {
			for (Robot r : mr.getVisibleRobots())
				if (mr.isVisible(r) && r.team == teami.number()
						&& (r.unit == UnitType.Castle.number() || r.unit == UnitType.Church.number())) {
					if (myp.dist2(p[r.x][r.y]) <= 2) {
						myCC = p[r.x][r.y];
						if (r.unit == UnitType.Castle.number()) {
							madeByCastle = true;
						} else
							madeByCastle = false;
					}
					if (r.unit == UnitType.Castle.number()) {
						castlei.add(p[r.x][r.y]);
						p[r.x][r.y].icastle = true;
					}
				}
			if (mr.karbonite == 70 && mr.fuel == 450)
				firstIdiot = true;
		}
		checkFight();
		// mr.log("idiot1");
		if (dangerEnemy == null && attackTarget != null) {
			// mr.log("idiot2");
			mr.log("attack by a crusader. x: " + attackTarget.x + " y: " + attackTarget.y);
			return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
		} else if (attackTarget == null) {
			if (!mr.lastActionDone) {
				mainPath.push(savePo);
				// mr.log("ASTAR VALUE: " + Nav.ins);
			}
			if (followTarget != null) {
				Point fc = Nav.followCru(followTarget);
				if (fc != null && canReach(fc)) {
					mr.log("cru go to follow x: " + fc.x + " y: " + fc.y);
					return mr.move(myp.dxTo(fc), myp.dyTo(fc));
				}
			}
			// mr.log("idiot3");
			if (dest == myp) {
				if (mode == 0) {
					mr.log("stoping here");
					dest = null;
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
					// if (madeByCastle)
					if (firstIdiot)
						mainPath = Nav.harasCru();
					else
						mainPath = Nav.defWithCru();
//					else
//						mainPath = Nav.defWithProphet2();
				}
				if (mode != 0) {
					// mainPath = Nav.attEnemeyCastle();
				}
				lastTry = me.turn;
			}
			// mr.log("idiot5");
//		if (dest == null && lastTry + 5 <= me.turn) {
//			// Nav.setTargetEnemyCastle();
//			mainPath = Nav.attEnemeyCastle();
//			lastTry = me.turn;
//		}
			if (dest != null && dest != myp) {
				Point po = mainPath.peek();
				if (canReach(po)) {
					mainPath.pop();
					savePo = po;
					// recalc = 0;
					mr.log("move(1) a prophet. x: " + po.x + " y: " + po.y);
					return mr.move(myp.dxTo(po), myp.dyTo(po));
				} else {
					mr.log("HERE0");
//				if (subPath == null) {
//					if (mainPath.size() == 1)
//						subPath = Nav.AStar4(po);
//					else {
//						mainPath.pop();
//						savePo = po;
//						Point poo = mainPath.peek();
//						subPath = Nav.AStar4(poo);
//					}
//				} else {
//					Point px = subPath.peek();
//					if(canReach(px))
//				}
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
			mr.log("Hggg");
			if (!isItSafe(myp)) {
				tryToGoToSafe();
				if (runAway != null) {
					mr.log("move(runaway2) a cru. x: " + runAway.x + " y: " + runAway.y);
					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
				} else if (attackTarget != null) {
					mr.log("stand and die by a cru. x: " + attackTarget.x + " y: " + attackTarget.y);
					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
				}
			}
			// else ???
		} else {
			if (!isItSafe(myp)) {
				tryToGoToSafe();
				if (runAway != null) {
					mr.log("move(runaway2) a cru. x: " + runAway.x + " y: " + runAway.y);
					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
				} else if (attackTarget != null) {
					mr.log("stand and die by a cru. x: " + attackTarget.x + " y: " + attackTarget.y);
					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
				}
			}
		}

		return null;
	}

	private static Point canAttack() {
		// what about radio enemy?!!?
		int value = 0, mx = 0;
		Point po = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
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
		}
		return po;
	}

	private static void checkFight() {
		// what about radio enemy?!!?
		int value = 0, mx = 0, mn = 10000, mgx = 0;
		Point po = null, poo = null, pgo = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
				value = 0;
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
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) >= 16 && myp.dist2(p[r.x][r.y]) <= 49) {
				value = 0;
				if (r.unit == UnitType.Church.number())
					value = 2;
				if (r.unit == UnitType.Pilgrim.number())
					value = 3;
				if (r.unit == UnitType.Prophet.number())
					value = 4;
				// add value of neighbor health and ...
				if (value > mgx) {
					pgo = p[r.x][r.y];
					mgx = value;
				}
			}

			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
				if (mn > myp.dist2(p[r.x][r.y]) && r.unit == UnitType.Preacher.number()) {
					poo = p[r.x][r.y];
					mn = myp.dist2(p[r.x][r.y]);
				}
			}
			// what about others?
		}
		attackTarget = po;
		followTarget = pgo;
		dangerEnemy = poo;
	}

	private static void tryToGoToSafe() {
		runAway = null;
		for (Direction9 dir : Direction9.values()) {
			Point po = myp.dir9To(dir);
			if (po != null && canReach(po)) {// vision cru+ 27pre
				runAway = po;
				break;
			}
		}
		if (runAway == null)
			for (Direction9 dir : Direction9.values()) {
				Point po = myp.dir9To(dir);
				if (po != null && canHalfReach(po)) {// attack cru+ 27pre
					runAway = po;
					break;
				}
			}
	}

	private static boolean canReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 9 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Prophet.number()].FUEL_PER_MOVE * myp.dist2(po) && isItSafe(po))
			return true;
		return false;
	}

	private static boolean canHalfReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 9 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
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
//			if (po.dist2(ppo) <= mr.SPECS.UNITS[ppo.unit].ATTACK_RADIUS[1]) // pro and cru (can change for cru)
//				return false;
		}
		return true;
	}
}
