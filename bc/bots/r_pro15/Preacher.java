package bc19;

public class Preacher extends Util {

	public static Point savePo;
	public static int lastTry = -5;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (!mr.lastActionDone)
			mainPath.push(savePo);

		if (dest == myp) {
			dest.ecastle = false;
			dest = null;
		}
		Point poc = canAttack();
		if (poc != null)
			return mr.attack(myp.dxTo(poc), myp.dyTo(poc));
		// stop over calculate 20*5 = 100
		if (dest == null && lastTry + 5 <= me.turn) {
			// Nav.setTargetEnemyCastle();
			Nav.AStar();
			lastTry = me.turn;
		}
		if (dest != null && dest != myp) {
			Point po = mainPath.peek();
			if (mr.getVisibleRobotMap()[po.y][po.x] == 0) {
				mainPath.pop();
				savePo = po;
				// recalc = 0;
				mr.log("move(t) a preacher. x: " + po.x + " y: " + po.y);
				return mr.move(myp.dxTo(po), myp.dyTo(po));
			} else {
				// ++recalc;
			}
		}
		return null;
	}

	private static Point canAttack() {
		// what about radio enemy?!!?
		int value = 0, mx = 0;
		Point po = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
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
		}
		return po;
	}

}
