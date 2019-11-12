package bc19;

public class Point {
	public int x;
	public int y;

	Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public Point dirTo(Direction dir) {
		return new Point(x + Util.dx(dir), y + Util.dy(dir));

	}
}
