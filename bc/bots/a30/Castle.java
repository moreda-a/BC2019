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
	public static boolean needRes = false;
	public static boolean pullNow = false;
	public static boolean needForDef = false;
	public static int myRush = 0;
	public static int enAttack = 0;
	public static int enAttackPro = 0;
	public static int rpre = -1;

	public static Action turn(MyRobot myRobot) {
		stopUsingRes = false;
		pullNow = false;
		setupt(myRobot);
		if (me.turn % 200 == 0)
			rushSize = 4;
		if (me.turn == 1) {
			estlen = myp.distxy(revPoint(myp));
			myCC = myp;
			for (Robot r : mr.getVisibleRobots()) {
				if (r.team == teami.number()) {
					// mr.log("ez :" + r.id + " - " + r.castle_talk);
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

		goodTimeForRush();

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

		for (Integer iid : knownRListChu) {
			if (allKnownR[iid] == true) {
				if (lastKnownR[iid] != me.turn) {
					for (Point lip : lookInProg) {
						if (lip == null)
							continue;
						if (lip.dist2(xr[iid], yr[iid]) <= 9) {
							lookInProg.remove(lip);
							break;
						}
					}
				}
				allKnownR[iid] = false;
			}
		}

		if (me.turn == 3) {
			appx = castlei.size();
		}
		estFighter = Math.max(unitNum - resP.size() / 2, 0);

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

		if (attackTarget != null && (ut == null || ut != UnitType.Preacher || cpu == null
				|| mr.karbonite < mr.SPECS.UNITS[ut.number()].CONSTRUCTION_KARBONITE
				|| mr.fuel < mr.SPECS.UNITS[ut.number()].CONSTRUCTION_FUEL)) {
			mr.log("attack by a castle. x: " + attackTarget.x + " y: " + attackTarget.y);
			return mr.attack(myp.dxTo(attackTarget), myp.dyTo(attackTarget));
		} else {
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
					else if (ut == UnitType.Crusader)
						cru++;
					return mr.buildUnit(ut.number(), dx(assignDir), dy(assignDir));
				} else {
					mr.log("Building a " + ut + " . point : " + assignNode);
					if (ut == UnitType.Pilgrim)
						pil++;
					else if (ut == UnitType.Preacher)
						pre++;
					else if (ut == UnitType.Prophet)
						pro++;
					else if (ut == UnitType.Crusader)
						cru++;
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
		} else if (ut == UnitType.Crusader) {
			// mainPath = Nav.nextAssignDefPro();
			mainPath = Nav.nextAssignDefPro();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Prophet) {
			// mainPath = Nav.nextAssignDefPro();
			mainPath = Nav.nextAssignDefBackPro();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		} else if (ut == UnitType.Preacher) {
			mainPath = Nav.nextAssignDefPre();
			if (mainPath != null && mainPath.size() != 0) {
				assignNode = mainPath.pop();
			}
		}
	}

	private static UnitType nextUnit() {
		UnitType uu = null;
		if (appx == 1) {
			uu = goForHaras();
			if (uu != null)
				return uu;
			// bebin maslan if yedune bud besaz vali zakhire kardan age bishtar az yedune
			// bashe besode mast
			if (pre == 0 && mr.karbonite >= 30 && mr.karbonite < 40 && mr.fuel >= 50) {
				return UnitType.Preacher;
			}

			uu = goForDef();
			if (uu != null)
				return uu;

			if (stopUsingRes)
				return null;

			uu = goForRes();
			if (uu != null)
				return uu;

			uu = readyForDef();
			if (uu != null)
				return uu;

			uu = readyForPush();
			if (uu != null)
				return uu;

			uu = goForExp();
			if (uu != null)
				return uu;

			uu = goForHp();
			if (uu != null)
				return uu;
			return null;
		}

		uu = goForDef();
		if (uu != null)
			return uu;

		if (stopUsingRes)
			return null;

		uu = goForRes();
		if (uu != null)
			return uu;

		uu = readyForDef();
		if (uu != null)
			return uu;

		uu = readyForPush();
		if (uu != null)
			return uu;

		uu = goForExp();
		if (uu != null)
			return uu;

		uu = goForHp();
		if (uu != null)
			return uu;

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

//		if (me.turn > 150) {
//			// is dying one Pre good trade?
//			// age fuel nadashtim preacher besaz va tekun nade
//			// mostghlean naft nadarim
//			if (mr.fuel < 500) {
//				return UnitType.Preacher;
//			}
//
//			// karbon kam va ba arzeshe prophet besaz
//			if (mr.karbonite < 500) {
//				return UnitType.Prophet;
//			}
//		}
		return null;
	}

	private static UnitType goForDef() {
		// bebin maslan if yedune bud besaz vali zakhire kardan age bishtar az yedune
		// bashe besode mast

		// FIRST PRE MADE not against ranger dude
		if (seenO.size() != 0 && seenIPreNear + seenIProNear < seenO.size()) { // 1-0 1-1 2-1 3-1 3-2 4-2 5-2 5-3
			if (seenIPreNear <= 2 * seenIProNear && (me.health == 200 || pro != 0)) {
				needForDef = true;
				return UnitType.Preacher;
			} else {
				return UnitType.Prophet;
			}
		}
		return null;
	}

	private static UnitType goForRes() {
		// if (pil < (karbonP.size() + fuelP.size()) / (xid.size() + 1))
		if (seenIPilNear < resGoalP.size() && (pil < 2 || mr.karbonite >= 40 && mr.fuel >= 100) && seenO.size() == 0)
			return UnitType.Pilgrim;
		return null;
	}

	private static UnitType readyForDef() {
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
		if (enAttack != 0) {
			// if no ranger 3 or 4 is enough and back
			// else we need as much as their size? or 8 - 10 ?
			if (enAttackPro == 0) {
				if (seenIPreNear + seenIProNear < enAttack)
					if (seenIPreNear <= 2 * seenIProNear && (me.health == 200 || pro != 0)) {
						return UnitType.Preacher;
					} else if (seenIProNear < 4) {
						return UnitType.Prophet;
					}
			} else {
				if (seenIPreNear + seenIProNear < enAttack)
					if (seenIPreNear <= 2 * seenIProNear && (me.health == 200 || pro != 0)) {
						return UnitType.Preacher;
					} else if (seenIProNear < Math.max(enAttackPro + 3, 10)) {
						return UnitType.Prophet;
					}
			}
		} else if (me.turn >= 150) {
//			if (mr.karbonite >= 150 && mr.fuel >= 500) {
//				if (fuelP.size() < karbonP.size()) {
//					// return UnitType.Preacher;
//				} else
//					return UnitType.Prophet;
//			}

			if (mr.karbonite >= 50 + 25 && mr.fuel >= 200 + 50 && seenIProNear < 3)
				return UnitType.Prophet;
			if (pro < seenO.size() && mr.karbonite >= 25 && mr.fuel >= 50)
				return UnitType.Prophet;
			if (pro < 3 && mr.karbonite >= 35 && mr.fuel >= 100 && me.turn > 20)
				return UnitType.Prophet;
		}
		return null;
	}

	private static UnitType readyForPush() {
		// rush for kill
		if (me.turn >= 20) {// && me.turn < 150) {
			if (mr.karbonite >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_KARBONITE
					&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].CONSTRUCTION_FUEL
					&& (pre % rushSize != rushSize
							|| (mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE * estlen
									* Math.max(estFighter, rushSize * appx)))) {
				// mr.log("SWAT: " + estFighter + " - " + unitNum + " - " + rushSize + " - " +
				// appx + " - " + estlen);
				return null;
				// return UnitType.Preacher;
			} else {
				if (mr.karbonite >= 50 + 25 && mr.fuel >= 200 + 50 && seenIProNear < 3)
					return UnitType.Prophet;
				if (pro < seenO.size() && mr.karbonite >= 25 && mr.fuel >= 50)
					return UnitType.Prophet;
				if (pro < 3 && mr.karbonite >= 35 && mr.fuel >= 100 && me.turn > 20)
					return UnitType.Prophet;
			}
		}
		// rush for end
		// rush for trade
		if (me.turn >= 150) {
			// good to build crusader when less karbon more feul then more hp can tank and
			// prophet and preacher kill them
//			if (mr.karbonite >= 150 && mr.fuel >= 500) {
//				if ((pre * 150 + pro * 125) * fuelP.size() <= pre * (50 + estlen * 3) * karbonP.size()) {
//					return UnitType.Preacher;
//				} else
//					return UnitType.Prophet;
//			}

		}
		return null;
	}

	private static UnitType goForHaras() {
		if (me.turn == 1) {
			Point etx = Nav.expandTargetXXX();
			mr.log("etx: " + etx);
			if (etx != null) {
				mr.log("etx: " + (myp.distxy(revPoint(etx)) / 3) + " - " + (myp.distxy(etx) / 2));
				if (myp.distxy(revPoint(etx)) / 3 <= myp.distxy(etx) / 2)// no need to predict! //wrong 8...9
					return UnitType.Crusader;
			}
		}
		return null;
	}

	private static UnitType goForExp() {
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
		return null;
	}

	private static UnitType goForHp() {
		if (me.turn >= 100) {
			double dp = (double) mr.karbonite / 15 - (double) mr.fuel / 50;// not like this
			double dc = (double) mr.fuel / 25 - (double) mr.karbonite / 15;
			if (dp >= dc)
				return UnitType.Preacher;
			else
				return UnitType.Crusader;
		}
		return null;
	}
//(pre % rushSize != rushSiz ||(mr.fuel>=mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE*estlen*Math.max(estFighter,rushSize*appx)))

	private static void goodTimeForRush() {
//		if (me.turn < 150 || (mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE * estlen
//				* Math.max(estFighter, seenIPreNear) && seenIPreNear >= 4)) 
		{
			if (Communication.smessage % 16 != 10)
				wave = 0;
//			if (pre != 0 && (pre % rushSize == 0 || (mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE
//					* estlen * Math.max(estFighter, seenIPreNear) && seenIPreNear >= 4)) && !vwave) {
			if (me.turn < 800 && pre != 0 && pre % rushSize == 0 && !vwave) {
				wave = rushSize;
				vwave = true;
				rpre = pre;
			} else if (rpre != pre) {
				vwave = false;
			}
		}
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
		enAttack = Math.max(enAttack, seenO.size());
		enAttackPro = Math.max(enAttackPro, seenOPre);
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
