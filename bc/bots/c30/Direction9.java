package bc19;

public enum Direction9 {
	North(0), Northeast(1), East(2), Southeast(3), South(4), Southwest(5), West(6), Northwest(7), Center(8), North2(9),
	East2(10), South2(11), West2(12), NNN(13), NNE(14), NNEE(15), NEE(16), EEE(17), EES(18), EESS(19), ESS(20), SSS(21),
	SSW(22), SSWW(23), SWW(24), WWW(25), WWN(26), WWNN(27), WNN(28);
	// none? center eff ???
	private final int number;

	Direction9(int number) {
		this.number = number;
	}

	public int number() {
		return number;
	}

}
