package bc19;

public class Pilgrim extends Util {
	public static Point savePo;
	public static int recalc = 0;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (!mr.lastActionDone)
			path.push(savePo);

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
				if (dest == null || recalc % 4 == 3) {
					recalc = 0;
					Nav.backResourceToCC();
				}
				if (dest != null && dest != myp) {
					mr.log("Pere");
					Point po = path.peek();
					if (mr.getVisibleRobotMap()[po.y][po.x] == 0) {
						path.pop();
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
			if (dest == null || recalc % 4 == 3) {
				recalc = 0;
				Nav.destSetPilgrimToResource();
			}

			if (dest != null && dest != myp) {
				Point po = path.peek();
				if (mr.getVisibleRobotMap()[po.y][po.x] == 0) {
					path.pop();
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
