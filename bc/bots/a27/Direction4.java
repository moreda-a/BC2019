package bc19;

public enum Direction4 {
	North(0), Northeast(1), East(2), Southeast(3), South(4), Southwest(5), West(6), Northwest(7), Center(8), North2(9),
	East2(10), South2(11), West2(12);
	// none? center eff ???
	private final int number;

	Direction4(int number) {
		this.number = number;
	}

	public int number() {
		return number;
	}

}
