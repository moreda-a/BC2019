package bc19;

public class Point {
	public int x;
	public int y;
	public boolean passable;
	public boolean karbonite;
	public boolean fuel;

	public int lastTimeChange;
	public int robot;
	public boolean ecastle = false;

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

	public Point dir4To(Direction4 dir) {
		if (Util.checkOnMap(x + Util.dx4(dir), y + Util.dy4(dir)))
			return Util.p[x + Util.dx4(dir)][y + Util.dy4(dir)];
		return null;
	}

	public Point dir9To(Direction9 dir) {
		if (Util.checkOnMap(x + Util.dx9(dir), y + Util.dy9(dir)))
			return Util.p[x + Util.dx9(dir)][y + Util.dy9(dir)];
		return null;
	}

	public int dxTo(Point po) {
		return po.x - x;
	}

	public int dyTo(Point po) {
		return po.y - y;
	}

	public int dist2(Point po) {
		return (x - po.x) * (x - po.x) + (y - po.y) * (y - po.y);
	}

}
