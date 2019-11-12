package bc19;

public class Castle extends Util {

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (me.turn < 10) {
			Direction dir = canProduceUnit();
			if (dir != null) {
				mr.log("Building a pilgrim. dir : " + dir);
				return mr.buildUnit(UnitType.Pilgrim.number(), dx(dir), dy(dir));
			}
			// return produceNewUnit(UnitType.Pilgrim.number());
		}
		return null;
	}

	private static Direction canProduceUnit() {
		Point p1 = p[me.x][me.y];
		for (Direction dir : Direction.values()) {
			Point p2 = p1.dirTo(dir);
			if (p2 != null && p[p2.x][p2.y].passable && mr.getVisibleRobotMap()[p2.y][p2.x] == 0) {
				return dir;
			}
		}
		return null;
	}

	// find place to produce newUnit null if no place
	@SuppressWarnings("unused")
	private static Action produceNewUnit(int unitType) {
		Point p1 = p[me.x][me.y];
		for (Direction dir : Direction.values()) {
			Point p2 = p1.dirTo(dir);
			if (p2 != null && p[p2.x][p2.y].passable && mr.getVisibleRobotMap()[p2.y][p2.x] == 0) {
				mr.log("Building a pilgrim. x : " + p2.x + " y : " + p2.y);
				return mr.buildUnit(unitType, dx(dir), dy(dir));
			}
		}
		return null;
	}
}
