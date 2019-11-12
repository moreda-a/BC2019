package bc19;

public enum UnitType {
	Castle(0), Church(1), Pilgrim(2), Crusader(3), Prophet(4), Preacher(5), None(6);

	private final int number;

	UnitType(int number) {
		this.number = number;
	}

	public int number() {
		return number;
	}
}
