package bc19;

public class Util {
	protected static int[] dx = { 0, 1, 1, 1, 0, -1, -1, -1, 0 };
	protected static int[] dy = { -1, -1, 0, 1, 1, 1, 0, -1, 0 };
	public static Point[][] p;
	public static int size;
	public static MyRobot mr;
	public static Robot me;
	public static Point myp;

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

		FastMath.initRand(myRobot.id, me.x);
		// WARNING y/x!!!
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

	public static boolean checkOnMap(int x, int y) {
		return x >= 0 && x < size && y >= 0 && y < size;
	}

	public static boolean checkOnMap(Point po) {
		return po.x >= 0 && po.x < size && po.y >= 0 && po.y < size;
	}

}
