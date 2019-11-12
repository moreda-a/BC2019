package bc19;

public enum Team {
	RED(0), BLUE(1);

	private final int number;

	Team(int number) {
		this.number = number;
	}

	public int number() {
		return number;
	}
}
