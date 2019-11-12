package bc19;

import java.util.HashSet;

public class Castle extends Util {

	private static Direction assignDir;
	public static UnitType ut;
	public static Direction cpu;
	private static Point assignNode;
	public static int wave = 0;
	public static boolean vwave = false;
	public static int pili = 0;
	public static int lastPili = -1;
	public static boolean stopUsingRes = false;
	public static HashSet<Point> lookInProg = new HashSet<Point>();
	public static HashSet<Point> doneDep = new HashSet<Point>();
	public static Point expTarget;
	public static int appx = 0;
	public static int rushSize = 4;
	public static int estlen = 0;
	public static int unitNum = 0;
	public static int estFighter = 0;

	public static Action turn(MyRobot myRobot) {
		stopUsingRes = false;
		setupt(myRobot);
		if (me.turn % 200 == 0)
			rushSize = 4;
		if (me.turn == 1) {
			estlen = myp.distxy(revPoint(myp));
			myCC = myp;
			for (Robot r : mr.getVisibleRobots()) {
				if (r.team == teami.number()) {
					// mr.log("ez :" + r.id + " - " + r.castle_talk);
					if (!mr.isVisible(r) || r.x != myp.x || r.y != myp.y)
						appx++;
				}
			}
			for (Point po : resP) {
				if (myp.distxy(po) <= 6)
					resGoalP.add(po);
			}
			Point pp = myp;
			if (!pp.icastle && pp.icastleNotDes) {
				pp.icastle = true;
				castlei.add(pp);
			}
			Point pr = revPoint(pp);
			if (!pr.ocastle && pr.ocastleNotDes) {
				pr.ocastle = true;
				castleo.add(pr);
			}
		}
		if (Communication.smessage % 16 != 10)
			wave = 0;
		if (pre != 0 && pre % rushSize == 0 && !vwave) {
			wave = rushSize;
			vwave = true;
		} else if (pre % rushSize != 0) {
			vwave = false;
		}
		// mr.log("Here01");
		Communication.turn();
		// mr.log("Here02");
		Communication.castleInCastle();
		// mr.log("Here03");
		Communication.castleOut();
		// mr.log("Here04");
		Communication.signalOutCastle();
		// mr.log("Here05");
		Communication.signalOut();

		// mr.log("Castle Here1");
		checkFight();
		// mr.log("Here2");

		if (me.turn == 3) {
			appx = castlei.size();
		}
		estFighter = Math.max(unitNum - resP.size() / 2, 0);

		if (attackTarget != null) {
			mr.log("attack by a castle. x: " + attackTarget.x + " y: " + attackTarget.y);
			return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
		} else {
			ut = nextUnit();
			// mr.log("Here2.5");
			cpu = canProduceUnit();
			// mr.log("Here3");
			if (ut != null && mr.karbonite >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_KARBONITE
					&& mr.fuel >= mr.SPECS.UNITS[ut.number()].CONSTRUCTION_FUEL && cpu != null) {
				assign();
				// mr.log("Here4");
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

			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Preacher) {
			mainPath = Nav.nextAssignDefPre();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Prophet) {
			mainPath = Nav.nextAssignDefPro();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		}
	}

	private static UnitType nextUnit() {
		if (appx == 1) {
			// bebin maslan if yedune bud besaz vali zakhire kardan age bishtar az yedune
			// bashe besode mast
			if (pre == 0 && mr.karbonite >= 30 && mr.karbonite < 40 && mr.fuel >= 50) {
				return UnitType.Preacher;
			}
			// FIRST PRE MADE not against ranger dude
			if (seenO.size() != 0 && seenIPre + seenIPro < seenO.size()) { // 1-0 1-1 2-1 3-1 3-2 4-2 5-2 5-3
				if (seenIPre <= 2 * seenIPro && (me.health == 200 || pro != 0))
					return UnitType.Preacher;
				else
					return UnitType.Prophet;
			}
			if (stopUsingRes)
				return null;
			// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))
			if (seenIPilNear < resGoalP.size() && (pil < 2 || mr.karbonite >= 10 && mr.fuel >= 50) && seenO.size() == 0)// seenIPil
				return UnitType.Pilgrim;
//			else {
//				if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE * 4
//						&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL * 4) { // startWave;
//					wave = 4;
//					return UnitType.Preacher;
//				}
//			}
//			if (wave != 0 && mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE * (wave - 1)
//					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL * (wave - 1)) {
//				wave--;
//				if (wave == 0)
//					return null;
//				return UnitType.Preacher;
//			}
			if (me.turn >= 20) {
				if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE
						&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL
						&& (pre % rushSize != rushSize - 1
								|| mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE * estlen
										* Math.max(estFighter, rushSize * appx))) {
					mr.log("SWAT: " + estFighter + " - " + unitNum + " - " + rushSize + " - " + appx + " - " + estlen);
					return UnitType.Preacher;
				} else {
					if (mr.karbonite >= 50 + 25 && mr.fuel >= 200 + 50 && seenIProNear < 3)
						return UnitType.Prophet;
					if (pro < seenO.size() && mr.karbonite >= 25 && mr.fuel >= 50)
						return UnitType.Prophet;
					if (pro < 3 && mr.karbonite >= 35 && mr.fuel >= 100 && me.turn > 20)
						return UnitType.Prophet;
				}
			}
			// if (me.turn >= 50)
			{
				if (seenIPilNear >= resGoalP.size() && pili < 8
						&& mr.karbonite >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].CONSTRUCTION_KARBONITE
						&& mr.fuel >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].CONSTRUCTION_FUEL
						&& (lastPili == -1 || me.turn > lastPili + 10))// pil < (karbonP.size()
				// + fuelP.size()) / (2
				// * xid.size() + 2))
				// seenIPil
				{
					if (Nav.expandTargetXXX() != null && (pre >= 1 || mr.karbonite >= 10 && mr.fuel >= 50)
							&& seenO.size() == 0) {// why ?
						lastPili = me.turn;
						pili++;
						return UnitType.Pilgrim;
					}
				}
			}
			return null;
		}
		// bebin maslan if yedune bud besaz vali zakhire kardan age bishtar az yedune
		// bashe besode mast

		// FIRST PRE MADE not against ranger dude
		if (seenO.size() != 0 && seenIPre + seenIPro < seenO.size()) { // 1-0 1-1 2-1 3-1 3-2 4-2 5-2 5-3
			if (seenIPre <= 2 * seenIPro && (me.health == 200 || pro != 0))
				return UnitType.Preacher;
			else
				return UnitType.Prophet;
		}

		if (stopUsingRes)
			return null;
		// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))
		if (seenIPilNear < resGoalP.size() && (pil < 2 || mr.karbonite >= 40 && mr.fuel >= 100) && seenO.size() == 0)
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
		if (me.turn >= 20) {
			if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE
					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL
					&& (pre % rushSize != rushSize
							|| (mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE * estlen
									* Math.max(estFighter, rushSize * appx)))) {
				mr.log("SWAT: " + estFighter + " - " + unitNum + " - " + rushSize + " - " + appx + " - " + estlen);
				return UnitType.Preacher;
			} else {
				if (mr.karbonite >= 50 + 25 && mr.fuel >= 200 + 50 && seenIProNear < 3)
					return UnitType.Prophet;
				if (pro < seenO.size() && mr.karbonite >= 25 && mr.fuel >= 50)
					return UnitType.Prophet;
				if (pro < 3 && mr.karbonite >= 35 && mr.fuel >= 100 && me.turn > 20)
					return UnitType.Prophet;
			}
		}
		// if (me.turn >= 50)
		{
			if (seenIPilNear >= resGoalP.size() && pili < 8
					&& mr.karbonite >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].CONSTRUCTION_KARBONITE
					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Pilgrim.number()].CONSTRUCTION_FUEL
					&& (lastPili == -1 || me.turn > lastPili + 10))// pil < (karbonP.size()
			// + fuelP.size()) / (2
			// * xid.size() + 2))
			{
				if (Nav.expandTargetXXX() != null && (pre >= 1 || mr.karbonite >= 40 && mr.fuel >= 100)
						&& seenO.size() == 0) {// why ?
					lastPili = me.turn;
					pili++;
					return UnitType.Pilgrim;
				}
			}
		}
		return null;
	}

	private static void checkFight() {
		// what about radio enemy?!!?
		int value = 0, mx = 0, mn = 100000;
		Point po = null, poo = null;
		for (Robot r : seenOR) {
			if (myp.dist2(p[r.x][r.y]) <= 64) {
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
				value = 100 * value - myp.dist2(p[r.x][r.y]);
				// add value of neighbor health and ...
				if (value > mx) {
					po = p[r.x][r.y];
					mx = value;
				}
			}

			if (myp.dist2(p[r.x][r.y]) <= 100) {
				if (mn > myp.dist2(p[r.x][r.y])) {
					poo = p[r.x][r.y];
					mn = myp.dist2(p[r.x][r.y]);
				}
			}
		}
		attackTarget = po;
		dangerEnemy = poo;
	}

	@SuppressWarnings("unused")
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

	@SuppressWarnings("unused")
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

	@SuppressWarnings("unused")
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

	@SuppressWarnings("unused")
	private static void tellAboutResource() {
		// mr.signal(value, radius);
		// not yet
	}

}
