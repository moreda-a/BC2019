package bc19;

public class Point {
	public int x;
	public int y;
	public boolean passable;
	public boolean karbonite;
	public boolean fuel;

	Point(int x, int y, boolean passable, boolean karbonite, boolean fuel) {
		this.x = x;
		this.y = y;
		this.passable = passable;
		this.karbonite = karbonite;
		this.fuel = fuel;
	}

	// return null if you can't go there
	public Point dirTo(Direction dir) {
		if (Util.checkOnMap(x + Util.dx(dir), y + Util.dy(dir)))
			return Util.p[x + Util.dx(dir)][y + Util.dy(dir)];
		return null;
	}
}
