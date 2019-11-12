package bc19;

public class Prophet extends Util {
	public static Point savePo;
	public static int lastTry = -5;
	public static Point attackTarget = null;
	private static Point dangerEnemy = null;
	private static Point runAway = null;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		checkFight();

		if (dangerEnemy == null && attackTarget != null) {
			mr.log("attack by a prophet. x: " + attackTarget.x + " y: " + attackTarget.y);
			return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
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
				mainPath = Nav.AStar();
				lastTry = me.turn;
			}
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
							mr.log("move(2) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
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
							mr.log("move(3) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
							return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
						} else {
							mr.log("HERE4");
							xx = myp.x + myp.dxTo(po) / 2;
							yy = myp.y + myp.dyTo(po) / 2;
							if (canReach(p[xx][yy])) {
								// recalc = 0;
								mr.log("move(4) a prophet. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
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

	private static void checkFight() {
		// what about radio enemy?!!?
		int value = 0, mx = 0, mn = 10000;
		Point po = null, poo = null;
		for (Robot r : mr.getVisibleRobots()) {
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
