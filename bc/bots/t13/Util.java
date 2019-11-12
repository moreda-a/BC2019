package bc19;

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

	// o(n^2) 4k...
	public static void init(MyRobot myRobot) {
		mr = myRobot;
		me = mr.me;
		// setupt(myRobot);
		size = mr.map.length;
		p = new Point[size][size];
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				p[i][j] = new Point(i, j, mr.map[j][i], mr.karboniteMap[j][i], mr.fuelMap[j][i]);
		// WARNING y/x!!!

		teami = Team.values()[me.team];
		teamo = Team.values()[1 - me.team];

		FastMath.initRand(myRobot.id, me.x);
		initDone = true;
		mr.log("init Passed :D");
	}

	// turn setup
	protected static void setupt(MyRobot myRobot) {
		mr = myRobot;
		me = mr.me;
		myp = p[me.x][me.y];
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

}
