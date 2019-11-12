package bc19;

import java.util.ArrayList;

public class Church extends Util {
	public static Point attackTarget = null;
	private static Point dangerEnemy = null;
	private static Point runAway = null;
	private static ArrayList<Point> seenFriend;
	private static Direction assignDir;
	public static int pil = 0;
	public static int pre = 0;
	public static UnitType ut;
	public static Direction cpu;
	private static Point assignNode;
	public static int wave = 0;
	public static boolean vwave = false;
	private static int seenPil;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (me.turn == 1) {

			for (int i = 0; i < size; ++i)
				for (int j = 0; j < size; ++j) {
					if (p[i][j].fuel)
						fuelP.add(p[i][j]);
					if (p[i][j].karbonite)
						karbonP.add(p[i][j]);
					if (myp.distxy(p[i][j]) <= 8 && (p[i][j].fuel || p[i][j].karbonite))
						resGoalP.add(p[i][j]);

				}
		}
//		wave = 0;
//		if (pre != 0 && pre % 4 == 0 && !vwave) {
//			wave = 4;
//			vwave = true;
//		} else if (pre % 4 != 0) {
//			vwave = false;
//		}
		// Communication.turn();
		// Communication.castleInCastle();
		// Communication.castleOut();
		// Communication.signalOutCastle();
		// Communication.signalOut();

		// checkFight();

		ut = nextUnit();
		cpu = canProduceUnit();
		if (ut != null && mr.karbonite >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_KARBONITE
				&& mr.fuel >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_FUEL && cpu != null) {
			assign();
			if (assignNode == null) {
				mr.log("Building a " + ut + " . dir : " + assignDir);
				if (ut == UnitType.Pilgrim)
					pil++;
				else if (ut == UnitType.Preacher)
					pre++;
				return mr.buildUnit(ut.number(), dx(assignDir), dy(assignDir));
			} else {
				mr.log("Building a " + ut + " . point : " + assignNode);
				if (ut == UnitType.Pilgrim)
					pil++;
				else if (ut == UnitType.Preacher)
					pre++;
				return mr.buildUnit(ut.number(), myp.dxTo(assignNode), myp.dyTo(assignNode));
			}
		}

//		if (me.turn < 12) {
//			Direction dir = canProduceUnit();
//			if (dir != null) {
//				return build3Pre1Pil(dir);
//				// return build4Cru1Pil(dir);
//				// return build4Pro(dir);
//			}
//			// return produceNewUnit(UnitType.Pilgrim.number());
//		}
		return null;
	}

	private static void assign() {
		assignNode = null;
		assignDir = cpu;
		if (ut == UnitType.Pilgrim && me.turn < 100) {
			mainPath = Nav.nextAssignRes();

			if (mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Preacher) {

		} else {

		}
	}

	private static UnitType nextUnit() {
//		if (me.turn < 5) {
//			if (mr.karbonite == 100)
//				return UnitType.Preacher;
//			if (mr.karbonite == 70)
//				return UnitType.Preacher;
//		}
		// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))
		if (seenPil < resGoalP.size())
			return UnitType.Pilgrim;
//		else {
//			if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE * 4
//					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL * 4) { // startWave;
//				wave = 4;
//				return UnitType.Preacher;
//			}
//		}
//		if (wave != 0 && mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE * (wave - 1)
//				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL * (wave - 1)) {
//			wave--;
//			if (wave == 0)
//				return null;
//			return UnitType.Preacher;
//		}
//		if (me.turn >= 20) {
//			if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE
//					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL)
//				return UnitType.Preacher;
//		}
		return null;
	}

	private static void checkFight() {
		// what about radio enemy?!!?
		seenPil = 0;
		seenFriend = new ArrayList<Point>();
		int value = 0, mx = 0, mn = 10000;
		Point po = null, poo = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 64) {
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

			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 100) {
				if (mn > myp.dist2(p[r.x][r.y])) {
					poo = p[r.x][r.y];
					mn = myp.dist2(p[r.x][r.y]);
				}
			}
			// what about others?
			if (r.team == teami.number() && p[r.x][r.y] != myp) {
				if (r.unit == UnitType.Pilgrim.number())
					seenPil++;
				seenFriend.add(p[r.x][r.y]);
			}
		}
		attackTarget = po;
		dangerEnemy = poo;
	}

	private static Action build3Pre1Pil(Direction dir) {
		if (mr.karbonite >= 30) {
			mr.log("Building a Preacher. dir : " + dir);
			return mr.buildUnit(UnitType.Preacher.number(), dx(dir), dy(dir));
		} else if (mr.karbonite >= 10) {
			mr.log("Building a pilgrim. dir : " + dir);
			return mr.buildUnit(UnitType.Pilgrim.number(), dx(dir), dy(dir));
		}
		return null;
	}

	private static Action build4Cru1Pil(Direction dir) {
		if (mr.karbonite >= 20) {
			mr.log("Building a Crusader. dir : " + dir);
			return mr.buildUnit(UnitType.Crusader.number(), dx(dir), dy(dir));
		} else if (mr.karbonite >= 10) {
			mr.log("Building a pilgrim. dir : " + dir);
			return mr.buildUnit(UnitType.Pilgrim.number(), dx(dir), dy(dir));
		}
		return null;
	}

	private static Action build4Pro(Direction dir) {
		if (mr.karbonite >= 25) {
			mr.log("Building a Prophet. dir : " + dir);
			return mr.buildUnit(UnitType.Prophet.number(), dx(dir), dy(dir));
		} else if (mr.karbonite >= 10) {
			mr.log("Building a pilgrim. dir : " + dir);
			return mr.buildUnit(UnitType.Pilgrim.number(), dx(dir), dy(dir));
		}
		return null;
	}

	private static Direction canProduceUnit() {
		// check resource only for pilgrim
//		if (mr.karbonite < 10 || mr.fuel < 50)
//			return null;
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
