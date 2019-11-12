package bc19;

/**
 * A class representing a map entry for a hashmap
 *
 * @version 1.0
 */
public class MapEntryPP {
	private boolean removed;
	private Point key;
	private Point value;
	private MapEntryPP next;

	public MapEntryPP getNext() {
		return next;
	}

	public void setNext(MapEntryPP next) {
		this.next = next;
	}

	public MapEntryPP(Point k, Point v) {
		key = k;
		value = v;
		next = null;
		removed = false;
	}

	public MapEntryPP(Point key2, Point value2, MapEntryPP next2) {
		key = key2;
		value = value2;
		next = next2;
		removed = false;
	}

	public boolean isRemoved() {
		return removed;
	}

	public void setRemoved(boolean removed) {
		this.removed = removed;
	}

	public Point getKey() {
		return key;
	}

	public void setKey(Point key) {
		this.key = key;
	}

	public Point getValue() {
		return value;
	}

	public void setValue(Point value) {
		this.value = value;
	}

	public boolean equals(Object o) {
		if (!(o instanceof MapEntryPI)) {
			return false;
		} else {
			MapEntryPI that = (MapEntryPI) o;
			return that.getKey().equals(key) && that.getValue().equals(value);
		}
	}

	public String toString() {
		return key.toString() + ": " + value.toString() + ", " + removed;
	}
}