package bc19;

import java.util.ArrayList;
import java.util.Iterator;

public class Preacher extends Util {

	public static Point savePo;
	public static int lastTry = -5;
	public static Point attackTarget = null;
	public static Point attackLand = null;
	private static Point dangerEnemy = null;
	private static Point runAway = null;
	private static ArrayList<Point> seenFriend;
	public static boolean stopCommand;
	public static int mode = 0;
	public static ArrayList<Point> lastmyp = new ArrayList<Point>();
	public static boolean slowRush = false;

	public static Action turn(MyRobot myRobot) {
		setupt(myRobot);
		lastmyp.add(myp);
//		if (me.turn > 150) {
//			slowRush = true;
//		}
		if (seenO.size() != 0 || me.health != 60) {
			slowRush = false;
		}
		if (me.turn == 1) {
			for (Robot r : mr.getVisibleRobots())
				if (mr.isVisible(r) && r.team == teami.number() && r.unit == UnitType.Castle.number()) {
					castlei.add(p[r.x][r.y]);
					p[r.x][r.y].icastle = true;
					if (myp.dist2(p[r.x][r.y]) <= 2) {
						myCastle = p[r.x][r.y];
						myCC = p[r.x][r.y];
					}
				}
		}
		Communication.turn();
		Communication.signalInPreacher();
		mr.log("KK1");
		Communication.castleOut();
		Iterator<Point> it = castlei.iterator();
		while (it.hasNext()) {
			Point pp = it.next();
			// mr.log("i : " + pp);
		}
		checkFight();
		if (attackTarget != null) {
			setAttackLand();
			if (attackLand != null) {
				mr.log("attack by a preacher. x: " + attackTarget.x + " y: " + attackTarget.y + " x: " + attackLand.x
						+ " y: " + attackLand.y);
				return mr.attack(myp.dxTo(attackLand), myp.dyTo(attackLand));
			} else
				mr.log("bad attack not done by a preacher. x: " + attackTarget.x + " y: " + attackTarget.y);
		} else if (!stopCommand) {
			if (!mr.lastActionDone) {
				mainPath.push(savePo);
				mr.log("ASTAR VALUE: " + Nav.ins);
			}

			if (dest == myp) {
				if (mode == 0)
					return null;
				dest.ocastle = false;
				dest.ocastleNotDes = false;
				dest = null;
			}
			// stop over calculate 20*5 = 100
			if ((dest == null && lastTry + 5 <= me.turn) || (me.turn > 6 && lastmyp.get(me.turn - 5).x == myp.x
					&& lastmyp.get(me.turn - 5).y == myp.y && lastTry + 5 <= me.turn)) {
				// Nav.setTargetEnemyCastle();
				if (mode == 0)
					mainPath = Nav.defWithProphet2();// defCastleWithPreacher
				if (mode != 0) {
					mainPath = Nav.attEnemeyCastle();
				}
				lastTry = me.turn;
			}
			// mr.log("ss1 " + slowRush);
			if (dest != null && dest != myp) {
				Point po = mainPath.peek();
				mr.log("ss1 " + slowRush + " - " + po);
				if (slowRush && myp.dist2(po) == 4) {
					mr.log("ss3");
					int xx = myp.x + myp.dxTo(po) / 2;
					int yy = myp.y + myp.dyTo(po) / 2;
					if (canReach(p[xx][yy])) {
						// recalc = 0;
						mr.log("move slowRush a preacher. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
						return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
					}
				}
				if (canReach(po)) {
					mainPath.pop();
					savePo = po;
					// recalc = 0;
					mr.log("move(1) a preacher. x: " + po.x + " y: " + po.y);
					return mr.move(myp.dxTo(po), myp.dyTo(po));
				} else {
					mr.log("ss4");
					// mr.log("HERE0");
//					if (subPath == null) {
//						if (mainPath.size() == 1)
//							subPath = Nav.AStar4(po);
//						else {
//							mainPath.pop();
//							savePo = po;
//							Point poo = mainPath.peek();
//							subPath = Nav.AStar4(poo);
//						}
//					} else {
//						Point px = subPath.peek();
//						if(canReach(px))
//					}
					if (mainPath.size() == 1) {
						// mr.log("HERE1");
						int xx = myp.x + myp.dxTo(po) / 2;
						int yy = myp.y + myp.dyTo(po) / 2;
						if (canReach(p[xx][yy])) {
							// recalc = 0;
							mr.log("move(2) a preacher. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
							return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
						}
					} else {
						// mr.log("HERE2");
						mainPath.pop();
						Point poo = mainPath.peek();
						int xx = myp.x + po.dxTo(poo);
						int yy = myp.y + po.dyTo(poo);
						if (checkOnMap(xx, yy) && canReach(p[xx][yy])) {
							// recalc = 0;
							mr.log("move(3) a preacher. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
							return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
						} else {
							// mr.log("HERE4");
							mainPath.push(po);
							xx = myp.x + myp.dxTo(po) / 2;
							yy = myp.y + myp.dyTo(po) / 2;
							if (canReach(p[xx][yy])) {
								// recalc = 0;
								mr.log("move(4) a preacher. x: " + p[xx][yy].x + " y: " + p[xx][yy].y);
								// mainPath.push(po);
								return mr.move(myp.dxTo(p[xx][yy]), myp.dyTo(p[xx][yy]));
							}
							// mr.log("HERE5");
						}
					}

				}
			}
		}
		return null;

	}

	private static boolean canReach(Point po) {
		// to see how it works if we include don't mess here
		if (myp.dist2(po) <= 4 && mr.getVisibleRobotMap()[po.y][po.x] == 0 && po.passable && checkPreNear(po)
				&& mr.fuel >= mr.SPECS.UNITS[UnitType.Preacher.number()].FUEL_PER_MOVE * myp.dist2(po))
			return true;
		return false;
	}

	private static boolean checkPreNear(Point po) {
		// stock ?
		// need better idea
//		for (Point pp : seenFriend)
//			if (mr.getRobot(mr.getVisibleRobotMap()[pp.y][pp.x]).unit == UnitType.Preacher.number()
//					&& (me.turn < 3 || po.dist2(pp) <= 8))
//				return false;
		return true;
	}

	private static void setAttackLand() {
		// 81 or 25 do you care?
		attackLand = null;
		int w = 0, f = 0, e = 0, mx = 0;
		Point po = null, poo = null;
		for (Direction dir : Direction.values()) {
			po = attackTarget.dirTo(dir);
			if (po == null || po.dist2(myp) > 16)// !po.passable
				continue;
			w = 0;
			f = 0;
			e = 0;
			for (Direction dir2 : Direction.values()) {
				poo = po.dirTo(dir2);
				if (poo == null)
					continue;
				if (mr.getVisibleRobotMap()[poo.y][poo.x] == -1)
					++w;
				else if (mr.getVisibleRobotMap()[poo.y][poo.x] != 0
						&& mr.getRobot(mr.getVisibleRobotMap()[poo.y][poo.x]).team == teami.number())
					++f;
				else if (mr.getVisibleRobotMap()[poo.y][poo.x] != 0
						&& mr.getRobot(mr.getVisibleRobotMap()[poo.y][poo.x]).team == teamo.number())
					++e;
			}
			if (e * 10 - f * 12 + w * 2 >= mx) {
				attackLand = p[po.x][po.y];
				mx = e * 10 - f * 10 + w * 2;
			}
		}

	}

	private static void checkFight() {
		// what about radio enemy?!!?
		seenFriend = new ArrayList<Point>();
		int value = 0, mx = 0, mn = 10000;
		Point po = null, poo = null;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
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

			if (r.team == teamo.number() && myp.dist2(p[r.x][r.y]) <= 16) {
				if (mn > myp.dist2(p[r.x][r.y])) {
					poo = p[r.x][r.y];
					mn = myp.dist2(p[r.x][r.y]);
				}
			}
			// what about others?
			if (r.team == teami.number() && p[r.x][r.y] != myp) {
				seenFriend.add(p[r.x][r.y]);
			}
		}
		attackTarget = po;
		dangerEnemy = poo;
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
