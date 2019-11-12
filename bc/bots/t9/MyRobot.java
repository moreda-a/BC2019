package bc19;

//again they use y/x :((( what a retards
public class MyRobot extends BCAbstractRobot {
	// public int turn;

	// Action thisTurnAct;
	public Action turn() {
		// turn++;
		log("Turn : " + me.turn + " karbonite : " + karbonite + " Fuel : " + fuel);
		log("Q x : " + me.x + " y : " + me.y + " type: " + UnitType.values()[me.unit]);
		if (me.turn == 1)
			Util.init(this);
		// or use SPECS.CASTLE maybe values change?! maybe not set
		switch (UnitType.values()[me.unit]) {
		case Castle:
			return Castle.turn(this);
		// break;
		case Church:
			break;
		case Pilgrim:
			return Pilgrim.turn(this);
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
}