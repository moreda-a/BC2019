package bc19;

/**
 * A class representing a map entry for a hashmap
 *
 * @version 1.0
 */
public class MapEntryIM {
	private boolean removed;
	private Integer key;
	private HashSetI value;
	private MapEntryIM next;

	public MapEntryIM getNext() {
		return next;
	}

	public void setNext(MapEntryIM next) {
		this.next = next;
	}

	public MapEntryIM(Integer k, HashSetI v) {
		key = k;
		value = v;
		next = null;
		removed = false;
	}

	public MapEntryIM(Integer key2, HashSetI value2, MapEntryIM next2) {
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

	public Integer getKey() {
		return key;
	}

	public void setKey(Integer key) {
		this.key = key;
	}

	public HashSetI getValue() {
		return value;
	}

	public void setValue(HashSetI value) {
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