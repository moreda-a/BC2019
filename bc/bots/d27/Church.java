package bc19;

import java.util.ArrayList;

public class Church extends Util {
	public static Point attackTarget = null;
	private static Point dangerEnemy = null;
	private static Point runAway = null;
	private static Direction assignDir;
	public static UnitType ut;
	public static Direction cpu;
	private static Point assignNode;
	public static int wave = 0;
	public static boolean vwave = false;
	public static int enAttack = 0;
	public static int enAttackPro = 0;
	public static boolean needRes = false;
	public static boolean needForDef = false;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		if (me.turn == 1) {
			myCC = myp;
			for (Point po : resP) {
				if (myp.distxy(po) <= 6)
					resGoalP.add(po);
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

		checkFight();
		needForDef = false;
		ut = nextUnit();
		// mr.log("Here2.5");
		cpu = canProduceUnit();

		needRes = false;
		if (ut == UnitType.Preacher && cpu != null && (mr.karbonite < mr.SPECS.UNITS[ut.number()].CONSTRUCTION_KARBONITE
				|| mr.fuel < mr.SPECS.UNITS[ut.number()].CONSTRUCTION_FUEL) && needForDef)
			needRes = true;
		if (needRes) {
			Communication.cmessage = 3 * 4;
			Communication.castleOut();
		}

		if (ut != null && mr.karbonite >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_KARBONITE
				&& mr.fuel >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_FUEL && cpu != null) {
			assign();
			if (assignNode == null) {
				mr.log("Building a " + ut + " . dir : " + assignDir);
				if (ut == UnitType.Pilgrim)
					pil++;
				else if (ut == UnitType.Preacher)
					pre++;
				else if (ut == UnitType.Prophet)
					pro++;
				return mr.buildUnit(ut.number(), dx(assignDir), dy(assignDir));
			} else {
				mr.log("Building a " + ut + " . point : " + assignNode);
				if (ut == UnitType.Pilgrim)
					pil++;
				else if (ut == UnitType.Preacher)
					pre++;
				else if (ut == UnitType.Prophet)
					pro++;
				return mr.buildUnit(ut.number(), myp.dxTo(assignNode), myp.dyTo(assignNode));
			}
		}
		return null;
//		if (me.turn < 12) {
//			Direction dir = canProduceUnit();
//			if (dir != null) {
//				return build3Pre1Pil(dir);
//				// return build4Cru1Pil(dir);
//				// return build4Pro(dir);
//			}
//			// return produceNewUnit(UnitType.Pilgrim.number());
//		}
	}

	private static void assign() {
		assignNode = null;
		assignDir = cpu;
		if (ut == UnitType.Pilgrim && me.turn < 100) {
			mainPath = Nav.nextAssignRes();

			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Prophet) {
			mainPath = Nav.nextAssignDefPro();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Preacher) {
			mainPath = Nav.nextAssignDefPro();// nextAssignDefPre
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		}
//			mainPath = Nav.nextAssignDefPre();
//			if (mainPath != null && mainPath.size() != 0) {
//				assignNode = mainPath.pop();
//			}

	}

	private static UnitType nextUnit() {
		UnitType uu = null;
//		if (me.turn < 5) {
//			if (mr.karbonite == 100)
//				return UnitType.Preacher;
//			if (mr.karbonite == 70)
//				return UnitType.Preacher;
//		}
		// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))

		uu = goForDef();
		if (uu != null)
			return uu;

//		if (stopUsingRes)
//			return null;

		uu = goForRes();
		if (uu != null)
			return uu;

		uu = readyForDef();
		if (uu != null)
			return uu;

		// FIRST PRE MADE not against ranger dude

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

	private static UnitType goForDef() {
		// bebin maslan if yedune bud besaz vali zakhire kardan age bishtar az yedune
		// bashe besode mast

		// FIRST PRE MADE not against ranger dude
		// mr.log("here0" + seenO.size() + " - " + seenIPre + " - " + seenIPro);
		if (seenO.size() != 0 && seenIPreNear + seenIProNear < seenO.size()) { // 1-0 1-1 2-1 3-1 3-2 4-2 5-2 5-3
			if (seenIPreNear <= 2 * seenIProNear && (me.health == 100 || pro != 0)) {
				// mr.log("here");
				needForDef = true;
				return UnitType.Preacher;
			} else {
				// mr.log("here1");
				return UnitType.Prophet;
			}
		}
		return null;
	}

	private static UnitType goForRes() {
		// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))
		if (seenIPilNear < resGoalP.size() && (pil < 2 || mr.karbonite >= 40 && mr.fuel >= 100) && pil < 10
				&& seenO.size() == 0) // seenIpil
			return UnitType.Pilgrim;
		return null;
	}

	private static UnitType readyForDef() {
		if (mr.karbonite >= 50 + 25 && mr.fuel >= 200 + 50 && seenIProNear < 3)
			return UnitType.Prophet;
		if (pro < seenO.size() && mr.karbonite >= 25 && mr.fuel >= 50)
			return UnitType.Prophet;
		if (pro < 3 && mr.karbonite >= 35 && mr.fuel >= 100 && me.turn > 20)
			return UnitType.Prophet;
		// age karbon map kame kheyli preacher nasaz hum ? alabte chera besaz :D
		// vali bahash hamle nakon chon mimiran bad shayad feul ziyad bashe va on yaro
		// ba trade ok bashe

		// age feul map kame dg ye alame preacher besaz
		// cru ?

		// ready for early def and late def

		// if we want def? :D

		// do you have seen preachers trying to take you down ? ->
		// having small pre + pro
		// do you have seen crusaders trying to take you down ? ->
		// having small pre is enough (high fuel ->prophet is fine)
		// do you have seen prophets trying to take you down ? ->
		// having offensive/defensive prophet + small pre/cru
		if (enAttack != 0 && ((mr.karbonite >= 25 + 30 + 50 && mr.fuel >= 200 + 50 + 50)
				|| (me.turn > 20 && mr.karbonite >= 25 + 30 && mr.fuel >= 50 + 50) || enAttackPro >= 3)) {
			// if no ranger 3 or 4 is enough and back
			// else we need as much as their size? or 8 - 10 ?
			if (enAttackPro == 0) {
				if (seenIPre + seenIPro < enAttack)
					if (seenIPre <= 2 * seenIPro && (me.health == 200 || pro != 0)) {
						return UnitType.Preacher;
					} else if (seenIPro < 4) {
						return UnitType.Prophet;
					}
			} else {
				if (seenIPre + seenIPro < enAttack)
					if (seenIPre <= 2 * seenIPro && (me.health == 200 || pro != 0)) {
						return UnitType.Preacher;
					} else if (seenIPro < Math.max(enAttackPro + 3, 10)) {
						return UnitType.Prophet;
					}
			}
		}
		return null;
	}

	private static void checkFight() {
		// what about radio enemy?!!?
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

		}
		attackTarget = po;
		dangerEnemy = poo;
		enAttack = Math.max(enAttack, seenO.size());
		enAttackPro = Math.max(enAttackPro, seenOPre);
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
