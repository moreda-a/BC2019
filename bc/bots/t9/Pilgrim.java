package bc19;

public class Pilgrim extends Util {

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (me.turn < 1000) {
			if (canMine())
				return mr.mine();
			Direction gdir = canGive();
			if (gdir != null)
				return mr.give(dx(gdir), dy(gdir), me.karbonite, me.fuel);
			Direction dir = canMove();
			if (dir != null) {
				mr.log("move a pilgrim. dir : " + dir);
				return mr.move(dx(dir), dy(dir));
			}
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
