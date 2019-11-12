package bc19;

//again they use y/x :((( what a retard
public class MyRobot extends BCAbstractRobot {

	// Action thisTurnAct;
	public Action turn() {
		log("Turn : " + me.turn + " karbonite : " + karbonite + " Fuel : " + fuel);
		log("Q x : " + me.x + " y : " + me.y + " type: " + UnitType.values()[me.unit]);
		log("W kar : " + me.karbonite + " fuel : " + me.fuel);
		if (!Util.initDone)
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
			return Preacher.turn(this);
		// break;
		default:
			log("ERROR: weird robot type");
		}
		return null;
	}
}