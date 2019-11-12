package bc19;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;

public class Util {
	protected static int[] dx = { 0, 1, 1, 1, 0, -1, -1, -1, 0 };
	protected static int[] dy = { -1, -1, 0, 1, 1, 1, 0, -1, 0 };
	protected static int[] dx4 = { 0, 1, 1, 1, 0, -1, -1, -1, 0, 0, 2, 0, -2 };
	protected static int[] dy4 = { -1, -1, 0, 1, 1, 1, 0, -1, 0, -2, 0, 2, 0 };
	protected static int[] dx9 = { 0, 1, 1, 1, 0, -1, -1, -1, 0, 0, 2, 0, -2, 0, 1, 2, 2, 3, 2, 2, 1, 0, -1, -2, -2, -3,
			-2, -2, -1 };
	protected static int[] dy9 = { -1, -1, 0, 1, 1, 1, 0, -1, 0, -2, 0, 2, 0, -3, -2, -2, -1, 0, 1, 2, 2, 3, 2, 2, 1, 0,
			-1, -2, -2 };
	public static Point[][] p;
	public static int size;
	public static MyRobot mr;
	public static Robot me;
	public static Point myp;
	public static Point dest;
	public static Stack<Point> mainPath;
	public static Stack<Point> subPath;
	public static boolean initDone = false;
	public static Team teami;
	public static Team teamo;
	public static long fTime;
	public static Point myCastle = null;
	public static Point myCC = null;
	public static Point enCastle = null;
	public static HashSet<Integer> preacheri = new HashSet<Integer>();
	public static HashSet<Point> castlei = new HashSet<Point>();
	public static HashSet<Point> castleo = new HashSet<Point>();
	public static HashMap<Integer, Integer> xid = new HashMap<Integer, Integer>();
	public static HashMap<Integer, Integer> yid = new HashMap<Integer, Integer>();
	public static ArrayList<Point> karbonP = new ArrayList<Point>();
	public static ArrayList<Point> fuelP = new ArrayList<Point>();
	public static ArrayList<Point> resP = new ArrayList<Point>();
	public static ArrayList<Point> resGoalP = new ArrayList<Point>();
	public static boolean vertical = true;
	public static boolean horizontal = true;
	public static boolean top = false;
	public static boolean down = false;
	public static boolean right = false;
	public static boolean left = false;
	public static ArrayList<Point> seenI;
	public static ArrayList<Point> seenO;
	public static ArrayList<Robot> seenIR;
	public static ArrayList<Robot> seenOR;
	public static int seenIPil;
	public static int seenIPre;
	public static Point attackTarget = null;
	public static Robot attackTargetR;
	public static Point dangerEnemy = null;
	public static Integer dangerEnemyId = -1;
	public static int pil = 0;
	public static int pre = 0;
	public static int pro = 0;

	public static ArrayList<Point> resToDep = new ArrayList<Point>();
	public static ArrayList<Point> potDep = new ArrayList<Point>();

	// o(n^2) 4k...
	public static void init(MyRobot myRobot) {
		mr = myRobot;
		me = mr.me;
		// setupt(myRobot);
		size = mr.map.length;
		p = new Point[size][size];
		for (int i = 0; i < size; ++i) {
			for (int j = 0; j < size; ++j) {
				p[i][j] = new Point(i, j, mr.map[j][i], mr.karboniteMap[j][i], mr.fuelMap[j][i]);
				if (mr.karboniteMap[j][i]) {
					karbonP.add(p[i][j]);
					resP.add(p[i][j]);
				}
				if (mr.fuelMap[j][i]) {
					fuelP.add(p[i][j]);
					resP.add(p[i][j]);
				}

				if (vertical && mr.map[j][i] != mr.map[size - j - 1][i]) {
					vertical = false;
				}

				if (horizontal && mr.map[j][i] != mr.map[j][size - i - 1]) {
					horizontal = false;
				}
			}
		}
		// WARNING y/x!!!
		if (vertical) {
			if (me.y <= size / 2) {
				top = true;
				down = false;
			} else {
				top = false;
				down = true;
			}
		}
		if (horizontal) {
			if (me.x <= size / 2) {
				left = true;
				right = false;
			} else {
				left = false;
				right = true;
			}
		}
//not valuable always ? born in wrong side?

		teami = Team.values()[me.team];
		teamo = Team.values()[1 - me.team];

		calcDep();// ?????? to long dude?
		FastMath.initRand(myRobot.id, me.x);
		initDone = true;
		mr.log("init Passed :D");
	}

	// turn setup
	protected static void setupt(MyRobot myRobot) {
		mr = myRobot;
		me = mr.me;
		myp = p[me.x][me.y];

		visibileHandle();
	}

	private static void visibileHandle() {
		// what about radio enemy?!!?
		seenI = new ArrayList<Point>();
		seenO = new ArrayList<Point>();
		seenIR = new ArrayList<Robot>();
		seenOR = new ArrayList<Robot>();
		seenIPil = 0;
		seenIPre = 0;
		Point pp;
		for (Robot r : mr.getVisibleRobots()) {
			if (!mr.isVisible(r))
				continue;
			pp = p[r.x][r.y];
			if (r.team == teami.number() && pp != myp) {
				seenI.add(pp);
				seenIR.add(r);
				if (r.unit == UnitType.Pilgrim.number())
					seenIPil++;
				if (r.unit == UnitType.Preacher.number())
					seenIPre++;
				if (r.unit == UnitType.Castle.number()) {
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
			}
			if (r.team == teamo.number()) {
				seenO.add(pp);
				seenOR.add(r);
				pp.id = r.id;
				pp.unit = r.unit;
				if (r.unit == UnitType.Castle.number()) {
					if (!pp.ocastle && pp.ocastleNotDes) {
						pp.ocastle = true;
						castleo.add(pp);
					}
					Point pr = revPoint(pp);
					if (!pr.icastle && pr.icastleNotDes) {
						pr.icastle = true;
						castlei.add(pr);
					}
				}
			}
		}
		mr.log("seen: " + seenI.size() + " - " + seenO.size());
	}

	public static void calcDep() {
		int mx = -100;
		Point pi = null;
		Point ppo = null;
//		boolean[][] mark = new boolean[size][size];
//		int s = 0;
		ArrayList<Point> first = new ArrayList<Point>();
		for (Point po : resP) {
			for (Direction dir : Direction.values()) {
				pi = po.dirTo(dir);
				if (pi != null && pi.passable && !pi.karbonite && !pi.fuel)
					pi.nearValue++;
			}
		}
		for (Point po : resP) {
			mx = -1;
			ppo = null;
			for (Direction9 dir : Direction9.values()) {
				pi = po.dir9To(dir);
				if (pi != null && pi.nearValue > mx) {
					mx = pi.nearValue;
					ppo = pi;
				}
			}
			// if (ppo != null)
			first.add(ppo);
		}
		resToDep = first;
//		for (Point po : first) {
//			s = 0;
//			for (Direction dir : Direction.values()) {
//				pi = po.dirTo(dir);
//				if (pi != null && pi.passable && !pi.karbonite && !pi.fuel)
//					value[pi.x][pi.y] = -1;
//			}
//		}
	}

	public static int dx(Direction dir) {
		return dx[dir.number()];
	}

	public static int dy(Direction dir) {
		return dy[dir.number()];
	}

	public static int dx4(Direction4 dir) {
		return dx4[dir.number()];
	}

	public static int dy4(Direction4 dir) {
		return dy4[dir.number()];
	}

	public static int dx9(Direction9 dir) {
		return dx9[dir.number()];
	}

	public static int dy9(Direction9 dir) {
		return dy9[dir.number()];
	}

	public static boolean checkOnMap(int x, int y) {
		return x >= 0 && x < size && y >= 0 && y < size;
	}

	public static boolean checkOnMap(Point po) {
		return po.x >= 0 && po.x < size && po.y >= 0 && po.y < size;
	}

	public static Point revPoint(Point po) {
		if (vertical)
			return p[po.x][size - po.y - 1];
		if (horizontal)
			return p[size - po.x - 1][po.y];
		mr.log("Fuck no VH");
		return null;
	}
}
