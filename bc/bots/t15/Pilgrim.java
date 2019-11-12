package bc19;

import java.util.ArrayList;

public class Pilgrim extends Util {
	public static Point savePo;
	public static int recalc = 0;
	public static int lastTry = -5;
	public static int lastTryc = -5;
	public static boolean scouting = true;
	public static Point attackTarget = null;
	private static Point dangerEnemy = null;
	private static Point runAway = null;
	private static ArrayList<Point> seenFriend;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		checkFight();

		if (scouting) {
			if (dangerEnemy == null && attackTarget != null) {
				// simple just w8 to kill this shit?!
				// and say w8 and collapse to all units
				// what if prophet
				if (mr.getRobot(mr.getVisibleRobotMap()[attackTarget.y][attackTarget.x]).unit == UnitType.Preacher
						.number()) {
					int value, mx = 0;
					for (Point po : seenFriend) {
						if (mr.getRobot(
								mr.getVisibleRobotMap()[attackTarget.y][attackTarget.x]).unit == UnitType.Preacher
										.number()
								&& mx < myp.dist2(po) && po.dist2(attackTarget) <= 64) {
							mx = myp.dist2(po);
						}
					}
					// dx -10 to 10 -> 0 to 20; 0 to 20 * 21 =20*21 + 20 = 21*21
					// value = (myp.dxTo(attackTarget) + 10) + (myp.dyTo(attackTarget) + 10) * 21 +
					// 21 * 21 * (1);
					value = attackTarget.x + attackTarget.y * size + (5) * size * size;
					// Stop code
					mr.signal(value, mx);
				}
			} else if (dangerEnemy == null && attackTarget == null) {
				if (!mr.lastActionDone)
					mainPath.push(savePo);
				if (dest == myp) {
					// ez castle
					dest.ecastle = false;
					dest = null;
				}
				if (dest == null && lastTry + 5 <= me.turn) {
					// Nav.setTargetEnemyCastle();
					mainPath = Nav.AStar();
					lastTry = me.turn;
				}
				if (dest != null && dest != myp) {
					Point po = mainPath.peek();
					if (canReach(po)) {
						mainPath.pop();
						savePo = po;
						// recalc = 0;
						mr.log("move(1) a pilgrim. x: " + po.x + " y: " + po.y);
						return mr.move(myp.dxTo(po), myp.dyTo(po));
					} else {
						mr.log("HERE0");
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
							mr.log("HERE1");
							int xx = myp.x + myp.dxTo(po) / 2;
							int yy = myp.y + myp.dyTo(po) / 2;
							if (canReach(p[xx][yy])) {
								// recalc = 0;
								mr.log("move(2) a pilgrim. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
								return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
							}
						} else {
							mr.log("HERE2");
							mainPath.pop();
							Point poo = mainPath.peek();
							int xx = myp.x + po.dxTo(poo);
							int yy = myp.y + po.dyTo(poo);
							if (canReach(p[xx][yy])) {
								// recalc = 0;
								mr.log("move(3) a pilgrim. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
								return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
							} else {
								mr.log("HERE4");
								xx = myp.x + myp.dxTo(po) / 2;
								yy = myp.y + myp.dyTo(po) / 2;
								if (canReach(p[xx][yy])) {
									// recalc = 0;
									mr.log("move(4) a pilgrim. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
									mainPath.push(po);
									return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
								}
								mr.log("HERE5");
							}
						}

					}
				}
			} else // dangerEnemy != null
			{
				justRunAway();
				if (runAway != null) {
					mr.log("move(5) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
				} else if (attackTarget != null) {
					mr.log("attack and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
				}
				// else ???
			}
			return null;
		}

		if (!mr.lastActionDone)
			mainPath.push(savePo);

		if (me.turn < 1000) {
			if (dest == myp)
				dest = null;
			if (canMine()) {
				mr.log("mine " + (myp.karbonite ? " Karbonite" : " Feul"));
				return mr.mine();
			}

			Direction gdir = canGive();
			if (gdir != null)
				return mr.give(dx(gdir), dy(gdir), me.karbonite, me.fuel);

			// mr.log("Here");
			if (me.karbonite == 20 || me.fuel == 100) {
				if ((dest == null || recalc % 4 == 3) && lastTryc + 5 <= me.turn) {
					recalc = 0;
					mainPath = Nav.backResourceToCC();
					lastTryc = me.turn;
				}
				if (dest != null && dest != myp) {
					mr.log("Pere");
					Point po = mainPath.peek();
					if (mr.getVisibleRobotMap()[po.y][po.x] == 0) {
						mainPath.pop();
						savePo = po;
						recalc = 0;
						mr.log("move(r) a pilgram. x: " + po.x + " y: " + po.y);
						return mr.move(myp.dxTo(po), myp.dyTo(po));
					} else {
						++recalc;
					}
				}
			}
			// mr.log("Here");

			// set target
			if ((dest == null || recalc % 4 == 3) && lastTry + 5 <= me.turn) {
				recalc = 0;
				mainPath = Nav.destSetPilgrimToResource();
				lastTry = me.turn;
			}

			if (dest != null && dest != myp) {
				Point po = mainPath.peek();
				if (mr.getVisibleRobotMap()[po.y][po.x] == 0) {
					mainPath.pop();
					savePo = po;
					recalc = 0;
					mr.log("move(t) a pilgram. x: " + po.x + " y: " + po.y);
					return mr.move(myp.dxTo(po), myp.dyTo(po));
				} else {
					++recalc;
				}
			}
//			Direction dir = canMove();
//			if (dir != null) {
//				mr.log("move a pilgrim. dir : " + dir);
//				return mr.move(dx(dir), dy(dir));
//			}
		}
		return null;
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

	private static boolean canReach(Point po) {
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable)
			return true;
		return false;
	}

	private static void scout() {
		if (mainPath == null)
			mainPath = Nav.AStar();

	}

	private static void checkFight() {
		// what about radio enemy?!!?
		seenFriend = new ArrayList<Point>();
		int value = 0, mx = 0, mn = 10000;
		Point po = null, poo = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 100) {
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
			if (r.team == teami.number() && p[r.x][r.y] != myp) {
				seenFriend.add(p[r.x][r.y]);
			}
		}
		attackTarget = po;
		dangerEnemy = poo;
	}

	private static Direction canGive() {
		for (Direction dir : Direction.values()) {
			Point p2 = myp.dirTo(dir);
			if (p2 != null && p[p2.x][p2.y].passable && mr.getVisibleRobotMap()[p2.y][p2.x] > 0
					&& (mr.getRobot(mr.getVisibleRobotMap()[p2.y][p2.x]).unit == UnitType.Castle.number()
							|| mr.getRobot(mr.getVisibleRobotMap()[p2.y][p2.x]).unit == UnitType.Church.number())
					&& (me.karbonite == 20 || me.fuel == 100)) {
				// TODO WTF Const
				return dir;
			}
		}
		return null;
	}

	@SuppressWarnings("unused")
	private static Direction canMove() {
		int rnd = FastMath.rand256() % 7;
		// mr.log("zz: " + rnd);
		Direction ddir = null;
		for (Direction dir : Direction.values()) {
			Point p2 = myp.dirTo(dir);
			// mr.log("sad: " + (p2 != null) + p[p2.x][p2.y].passable +
			// mr.getVisibleRobotMap()[p2.y][p2.x]);
			if (p2 != null && p[p2.x][p2.y].passable && mr.getVisibleRobotMap()[p2.y][p2.x] == 0) {
				ddir = dir;
				if (rnd == 0)
					break;
				--rnd;
			}
		}
		// mr.log("ss: " + ddir);
		return ddir;
	}

	private static boolean canMine() {
		return (myp.karbonite && me.karbonite != 20) || (myp.fuel && me.fuel != 100);
		// TODO WTF Const
	}

}
