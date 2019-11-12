package bc19;

/**
 * A class representing a map entry for a hashmap
 *
 * @version 1.0
 */
public class MapEntryPI {
	private boolean removed;
	private Point key;
	private Integer value;
	private MapEntryPI next;

	public MapEntryPI getNext() {
		return next;
	}

	public void setNext(MapEntryPI next) {
		this.next = next;
	}

	public MapEntryPI(Point k, Integer v) {
		key = k;
		value = v;
		next = null;
		removed = false;
	}

	public MapEntryPI(Point key2, Integer value2, MapEntryPI next2) {
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

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
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