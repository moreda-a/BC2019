package bc19;

//again they use y/x :((( what a retard
public class MyRobot extends BCAbstractRobot {
	// static?
	public boolean lastTurnEnd = true;
	public Action action = null;
	public int lastTurn;
	public boolean lastActionDone;
	public int lastx;
	public int lasty;

	// Action thisTurnAct;
	public Action turn() {
		if (!lastTurnEnd)
			log("LastTurn not ENDED");
		lastTurnEnd = false;
		lastActionDone = checkAction();
		if (!lastActionDone)
			log("LastTurn not Done");
		// check for last action haven't done!

		log("Turn : " + me.turn + " karbonite : " + karbonite + " Fuel : " + fuel + " x : " + me.x + " y : " + me.y
				+ " type: " + UnitType.values()[me.unit] + " me.kar : " + me.karbonite + " me.fuel : " + me.fuel);

		if (!Util.initDone)
			Util.init(this);
		// or use SPECS.CASTLE maybe values change?! maybe not set
		action = null;
		switch (UnitType.values()[me.unit]) {
		case Castle:
			action = Castle.turn(this);
			break;
		case Church:
			break;
		case Pilgrim:
			action = Pilgrim.turn(this);
			break;
		case Crusader:
			action = Crusader.turn(this);
			break;
		case Prophet:
			action = Prophet.turn(this);
			break;
		case Preacher:
			action = Preacher.turn(this);
			break;
		default:
			log("ERROR: weird robot type :" + UnitType.values()[me.unit]);
		}
		lastTurn = me.turn;
		lastx = me.x;
		lasty = me.y;
		lastTurnEnd = true;
		return action;
	}

	private boolean checkAction() {
		boolean ch = false;
		if (action == null)
			return true;
		if (action.getClass() == AttackAction.class) {
			// how check lol ? :D not in range? :D
			ch = true;
		} else if (action.getClass() == BuildAction.class) {
			// what about wrong actions?!
			// what if destroyed? TODO
			// they will move before i track idiot!
//			BuildAction ba = (BuildAction) action;
//			if (getVisibleRobotMap()[me.y + ba.dy][me.x + ba.dx] != 0
//					&& getRobot(getVisibleRobotMap()[me.y + ba.dy][me.x + ba.dx]).unit == ba.build_unit)
			ch = true;
		} else if (action.getClass() == GiveAction.class) {
			// what about wrong actions?!
			// full giving ??
			if (me.karbonite == 0 && me.fuel == 0)
				ch = true;
		} else if (action.getClass() == MineAction.class) {
			// wtf ?:D
			ch = true;
		} else if (action.getClass() == MoveAction.class) {
			MoveAction ma = (MoveAction) action;
			if (lastx + ma.dx == me.x && lasty + ma.dy == me.y)
				ch = true;
		} else if (action.getClass() == TradeAction.class) {
			// omgalul
			ch = true;
		} else
			log("ERROR: weird action type :" + action.getClass());
		return ch;
	}
}