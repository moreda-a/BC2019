package bc19;

//again they use y/x :((( what a retards
public class MyRobot extends BCAbstractRobot {
	public int turn;

	// Action thisTurnAct;
	public Action turn() {
		turn++;
		log("Turn : " + me.turn + " karbonite : " + karbonite + " Fuel : " + fuel);
		log("Q x : " + me.x + " y : " + me.y);
		// or use SPECS.CASTLE maybe values change?! maybe not set
		switch (UnitType.values()[me.unit]) {
		case Castle:
			return castleTurn();
		// break;
		case Church:
			break;
		case Pilgrim:
			return pilgrimTurn();
		// break;
		case Crusader:
			break;
		case Prophet:
			break;
		case Preacher:
			break;
		default:
			log("ERROR: weird robot type");
		}
		return null;
	}

	private Action castleTurn() {
		// TODO Auto-generated method stub
		if (turn < 10) {
			return produceNewUnit(UnitType.Pilgrim.number());
			// return buildUnit(UnitType.Pilgrim.number(), Util.dx(Direction.East),
			// Util.dy(Direction.East));map[p.x][p.y]
		}
		return null;
	}

	private Action produceNewUnit(int unitType) {
		Point p1 = new Point(me.x, me.y);
		for (Direction dir : Direction.values()) {
			Point p = p1.dirTo(dir);
			if (Util.checkOnMap(p.x, p.y, SPECS.MAX_BOARD_SIZE) && map[p.y][p.x]
					&& getVisibleRobotMap()[p.y][p.x] == 0) {
				log("Building a pilgrim. x : " + p.x + " y : " + p.y);
				return buildUnit(unitType, Util.dx(dir), Util.dy(dir));
			}
		}
		return null;
	}

	private Action pilgrimTurn() {
		if (turn == 1) {
			log("I am a pilgrim.");// use log for now

			// log(Integer.toString([0][getVisibleRobots()[0].castle_talk]));
		}
		return null;
	}
}