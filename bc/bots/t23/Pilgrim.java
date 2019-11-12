package bc19;

import java.util.ArrayList;

public class Pilgrim extends Util {
	public static Point savePo;
	public static int recalc = 0;
	public static int lastTry = -5;
	public static int lastTryc = -5;
	public static boolean scouting = false; // true
	private static Point runAway = null;
	private static Point buildChurchPoint;
	private static boolean mypSafe;
	public int state = 0;
	public static boolean gfe = false;
	public static Point expTarget = null;
	public static boolean wantExp = false;
	public static boolean miner = false;
	public static boolean ret = false;
	private static Point nearestDep;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (me.turn == 1) {
			for (Robot r : mr.getVisibleRobots())
				if (mr.isVisible(r) && r.team == teami.number() && r.unit == UnitType.Castle.number()) {
					if (myp.dist2(p[r.x][r.y]) <= 2) {
						myCastle = p[r.x][r.y];
					}
				}
			for (int i = 0; i < size; ++i)
				for (int j = 0; j < size; ++j) {
					if (myp.distxy(p[i][j]) <= 6 && (p[i][j].fuel || p[i][j].karbonite))
						resGoalP.add(p[i][j]);
				}
			if (resGoalP.size() > seenIPil) {
				miner = true;
			}
		}

		if (ret) {
			resGoalP = new ArrayList<Point>();
			for (int i = 0; i < size; ++i)
				for (int j = 0; j < size; ++j) {
					if (myp.distxy(p[i][j]) <= 6 && (p[i][j].fuel || p[i][j].karbonite))
						resGoalP.add(p[i][j]);
				}

			if (resGoalP.size() > seenIPil) {
				miner = true;
			}
			ret = false;
		}
		Communication.turn();
		Communication.signalInPilgrim();
		Communication.castleOut();
		checkFight();

		if (scouting) {
			if (dangerEnemy == null && attackTarget != null) {
				// simple just w8 to kill this shit?!
				// and say w8 and collapse to all units
				// what if prophet
				if (mr.getRobot(mr.getVisibleRobotMap()[attackTarget.y][attackTarget.x]).unit == UnitType.Preacher
						.number()) {
					int value, mx = 0;
					for (Point po : seenI) {
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
					dest.ocastle = false;
					dest = null;
				}
				if (dest == null && lastTry + 5 <= me.turn) {
					// Nav.setTargetEnemyCastle();
					mainPath = Nav.attEnemeyCastle();
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
		// not scouting
		// not miner
		// --------------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------------
		else if (!miner) {
//			if (dangerEnemy != null) {
//				justRunAway();
//				if (runAway != null) {
//					mr.log("move(5) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
//					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
//				} else if (attackTarget != null) {
//					mr.log("attack and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
//					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
//				}
//				// else ???
//			} else 
			{

				if (!mr.lastActionDone)
					mainPath.push(savePo);

				if (dest == myp) {
					mr.log("WWWWWWWWWWWW: " + gfe);
					if (nearestDep != null && myp.distxy(nearestDep) <= 6) {
						mainPath = null;
						dest = null;
						gfe = false;
						expTarget = null;
						ret = true;
						return null;
					}
					if (gfe) {
						rBuildChurch1();
						if (mr.karbonite < mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_KARBONITE
								|| mr.fuel < mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_FUEL) {
							Communication.encode(castlei.size() * 16 + 3 * 4, 0, 6);
							Communication.castleOut();
						}
						if (buildChurchPoint != null) {
							mainPath = null;
							dest = null;
							mr.log("build church by pilgrim. x,y: " + buildChurchPoint);
							gfe = false;
							expTarget = null;
							ret = true;
							return mr.buildUnit(UnitType.Church.number(), myp.dxTo(buildChurchPoint),
									myp.dyTo(buildChurchPoint));
						} else {

							rBuildChurch();
							if (buildChurchPoint != null) {
								mainPath = null;
								dest = null;
								mr.log("build church by pilgrim. x,y: " + buildChurchPoint);
								gfe = false;
								expTarget = null;
								ret = true;
								return mr.buildUnit(UnitType.Church.number(), myp.dxTo(buildChurchPoint),
										myp.dyTo(buildChurchPoint));
							}
						}
					}
				}
				mr.log("hpo1");
				mypSafe = isItSafe(myp);

				mr.log("hpo2");
				if (mr.fuel == 0 || mr.fuel < mr.SPECS.UNITS[UnitType.Pilgrim.number()].FUEL_PER_MOVE) {
					return null;
//					if (mypSafe) {
//
//						if (canMine()) {
//							mr.log("mine " + (myp.karbonite ? " Karbonite" : " Feul"));
//							return mr.mine();
//						}
//
//						Direction gdir = canGive();
//						if (gdir != null)
//							return mr.give(dx(gdir), dy(gdir), me.karbonite, me.fuel);
//					}
				}
				// mr.log("Here");

				mr.log("hpo3");
				if ((dest == null || recalc % 4 == 3) && lastTry + 5 <= me.turn) {
					recalc = 0;
					lastTryc = me.turn;
//					if (me.karbonite == 20 || me.fuel == 100) {
//						mainPath = Nav.backResourceToCC();
//						if (mainPath != null && mainPath.size() > 5 && myp.distxy(dest) > 10 && mr.karbonite >= 50
//								&& mr.fuel >= 200) {
//							rBuildChurch();
//							if (buildChurchPoint != null) {
//								mainPath = null;
//								dest = null;
//								mr.log("build church by pilgrim. x,y: " + buildChurchPoint);
//								gfe = false;
//								return mr.buildUnit(UnitType.Church.number(), myp.dxTo(buildChurchPoint),
//										myp.dyTo(buildChurchPoint));
//							}
//						}
//					} else 
					{
						if (expTarget != null) {
							mainPath = Nav.AStarIsBack4p(expTarget);
						} else {
							wantExp = true;
							Communication.encode(castlei.size() * 16 + 2 * 4, 0, 6);
							Communication.castleOut();
							// mainPath = Nav.goForExpand();
							gfe = true;
							return null;
						}
					}

				}

				mr.log("hpo4");
				if (dest != null && dest != myp) {
					Point po = mainPath.peek();
					if (canReach(po)) {
						mainPath.pop();
						savePo = po;
						recalc = 0;
						mr.log("move(t) a pilgram. x: " + po.x + " y: " + po.y);
						return mr.move(myp.dxTo(po), myp.dyTo(po));
					} else {
						++recalc;
					}
				}

				if (!mypSafe) {
					tryToGoToSafe();
					if (runAway != null) {
						mr.log("move(runaway) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
						return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
					} else if (attackTarget != null) {
						mr.log("stand and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
						// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
					}
				}
//			Direction dir = canMove();
//			if (dir != null) {
//				mr.log("move a pilgrim. dir : " + dir);
//				return mr.move(dx(dir), dy(dir));
//			}
			}
		}
		// not scouting
		// miner
		// --------------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------------
		else

		{
			if (!mr.lastActionDone)
				mainPath.push(savePo);

			if (dest == myp) {
				dest = null;
			}
			mypSafe = isItSafe(myp);
			if (mypSafe) {
				if (canMine()) {
					mr.log("mine " + (myp.karbonite ? " Karbonite" : " Feul"));
					return mr.mine();
				}
				Direction gdir = canGive();
				if (gdir != null)
					return mr.give(dx(gdir), dy(gdir), me.karbonite, me.fuel);
			} // not safe
			else {
				if (canMine()) {
					tryToGoToSafe();
					if (runAway != null) {
						mr.log("move(runaway) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
						return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
					} else if (attackTarget != null) {
						mr.log("stand and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
						// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
					}
				}
			}
			if (mr.fuel == 0 || mr.fuel < mr.SPECS.UNITS[UnitType.Pilgrim.number()].FUEL_PER_MOVE)
				return null;

			if ((dest == null || recalc % 4 == 3) && lastTry + 5 <= me.turn) {
				recalc = 0;
				lastTryc = me.turn;
				if (me.karbonite == 20 || me.fuel == 100) {
					mainPath = Nav.backResourceToCC(); // same deposit? //it has problem do to not moving to last dest
				} else {
					mainPath = Nav.destSetPilgrimToResource();// same resource?
				}
			}

			if (dest != null && dest != myp) {
				Point po = mainPath.peek();
				if (canReach(po)) {
					mainPath.pop();
					savePo = po;
					recalc = 0;
					mr.log("move(t) a pilgram. x: " + po.x + " y: " + po.y);
					return mr.move(myp.dxTo(po), myp.dyTo(po));
				} else {
					++recalc;
				}
			}

			if (!mypSafe) {
				tryToGoToSafe();
				if (runAway != null) {
					mr.log("move(runaway) a pilgrim. x: " + runAway.x + " y: " + runAway.y);
					return mr.move(myp.dxTo(runAway), myp.dyTo(runAway));
				} else if (attackTarget != null) {
					mr.log("stand and die by a pilgrim. x: " + attackTarget.x + " y: " + attackTarget.y);
					// return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
				}
			}
		}
		return null;
	}

	private static void rBuildChurch1() {
		buildChurchPoint = null;
		mr.log("build attempt");
		Point po = expTarget;
		if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_KARBONITE
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_FUEL)
			if (po != null && po.passable && !po.karbonite && !po.fuel && mr.getVisibleRobotMap()[po.y][po.x] == 0) {
				buildChurchPoint = po;
			}
	}

	private static void tryToGoToSafe() {
		runAway = null;
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (canReach(po)) {// vision cru+ 27pre
				runAway = po;
				break;
			}
		}
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (canHalfReach(po)) {// attack cru+ 27pre
				runAway = po;
				break;
			}
		}

	}

	private static void rBuildChurch() {
		buildChurchPoint = null;
		mr.log("build attempt");
		if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_KARBONITE
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Church.number()].CONSTRUCTION_FUEL)
			for (Direction dir : Direction.values()) {
				Point po = myp.dirTo(dir);
				if (po != null && po.passable && !po.karbonite && !po.fuel
						&& mr.getVisibleRobotMap()[po.y][po.x] == 0) {
					buildChurchPoint = po;
					break;
				}
			}
	}

	private static void justRunAway() {
		runAway = null;
		if (mr.getRobot(dangerEnemyId).unit == UnitType.Preacher.number()) {
			// aoe hit :(
			for (Direction4 dir : Direction4.values()) {
				Point po = myp.dir4To(dir);
				if (po != null && po.passable && mr.getVisibleRobotMap()[po.y][po.x] == 0
						&& po.dist2(dangerEnemy) > 26) {
					runAway = po;
					break;
				}
			}
		}
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (po != null && po.passable && mr.getVisibleRobotMap()[po.y][po.x] == 0
					&& po.dist2(dangerEnemy) > mr.SPECS.UNITS[mr.getRobot(dangerEnemyId).unit].VISION_RADIUS) {
				runAway = po;
				break;
			}
		}
		for (Direction4 dir : Direction4.values()) {
			Point po = myp.dir4To(dir);
			if (po != null && po.passable && mr.getVisibleRobotMap()[po.y][po.x] == 0
					&& po.dist2(dangerEnemy) > mr.SPECS.UNITS[mr.getRobot(dangerEnemyId).unit].ATTACK_RADIUS[1]) {
				runAway = po;
				break;
			}
		}
	}

	private static boolean canReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].FUEL_PER_MOVE * myp.dist2(po) && isItSafe(po))
			return true;
		return false;
	}

	private static boolean canHalfReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].FUEL_PER_MOVE * myp.dist2(po)
				&& isItHalfSafe(po))
			return true;
		return false;
	}

	private static boolean safeToGo(Point po) {
		if (attackTarget == null
				|| (po.dist2(attackTarget) > mr.SPECS.UNITS[attackTargetR.unit].VISION_RADIUS
						&& (attackTargetR.unit == UnitType.Prophet.number()
								|| attackTargetR.unit == UnitType.Crusader.number()))
				|| (po.dist2(attackTarget) > 26 && attackTargetR.unit == UnitType.Preacher.number()))
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

	private static void scout() {
		if (mainPath == null)
			mainPath = Nav.attEnemeyCastle();

	}

	private static void checkFight() {
		// what about radio enemy?!!?
		nearestDep = null;
		dangerEnemyId = -1;
		attackTargetR = null;
		int value = 0, mx = 0, mn = 10000, mns = 100000;
		Point po = null, poo = null;
		Point pp;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
			pp = p[r.x][r.y];
			if (r.team == teamo.number() && myp.dist2(pp) <= 100) {
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
					po = pp;
					mx = value;
					attackTargetR = r;
				}
			}

			if (r.team == teamo.number()
					&& ((myp.dist2(pp) <= mr.SPECS.UNITS[r.unit].VISION_RADIUS && r.unit != UnitType.Church.number()
							&& r.unit != UnitType.Pilgrim.number() && r.unit != UnitType.Castle.number())
							|| (myp.dist2(pp) <= 26 && r.unit == UnitType.Church.number()))) {
				if (mn > myp.dist2(pp)) {
					poo = pp;
					dangerEnemyId = r.id;
					mn = myp.dist2(pp);
				}
			}
		}
		for (Robot r : seenIR) {
			pp = p[r.x][r.y];
			if (r.unit == UnitType.Castle.number() || r.unit == UnitType.Church.number()) {
				if (mns > myp.distxy(pp)) {
					nearestDep = pp;
					mns = myp.distxy(pp);
				}
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
		return (((myp.karbonite && me.karbonite != 20) || (myp.fuel && me.fuel != 100)) && mr.fuel >= 1);
		// TODO WTF Const
	}

}
