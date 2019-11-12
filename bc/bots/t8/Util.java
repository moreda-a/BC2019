package bc19;

public class Util {
	private static int[] dx = { 0, 1, 1, 1, 0, -1, -1, -1, 0 };
	private static int[] dy = { -1, -1, 0, 1, 1, 1, 0, -1, 0 };

	public static int dx(Direction dir) {
		return dx[dir.number()];
	}

	public static int dy(Direction dir) {
		return dy[dir.number()];
	}

	public static boolean checkOnMap(int x, int y, int n) {
		return x >= 0 && x < n && y >= 0 && y < n;
	}

}
