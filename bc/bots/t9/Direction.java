package bc19;

public enum Direction {
	North(0), Northeast(1), East(2), Southeast(3), South(4), Southwest(5), West(6), Northwest(7), Center(8);

	private final int number;

	Direction(int number) {
		this.number = number;
	}

	public int number() {
		return number;
	}

}
