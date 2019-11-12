package bc19;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

/**
 * A class representing a hash map with linear probing collision handling.
 *
 * @author Christopher Tam
 *
 * @param <K> the type for the key of entries.
 * @param <V> the type for the value of entries.
 */
public class HashMapPP implements HashMapInterfacePP {

	// Do not make any new instance variables.
	private MapEntryPP[] table;
	private int size;
	private Stack<MapEntryPP> list;

	public HashMapPP() {
		clear();
		list = new Stack<MapEntryPP>();
	}

	public Stack<MapEntryPP> getList() {
		return list;
	}

	public MapEntryPP getFirst() {
		// nice java bug :D maybe java - > js
//		while (list.peek() != null && list.peek().isRemoved()) {
//			if (!list.peek().isRemoved())
//				break;
//			list.remove();
//		}

		MapEntryPP meo = list.peek();
		while (meo != null && meo.isRemoved()) {
			list.pop();
			meo = list.peek();
		}
		return meo;
	}

	@Override
	public Point add(Point key, Point value) {
		if (key == null) {
			throw new IllegalArgumentException("Argument cannot be null.");
		}
		// value ke mitune null bashe ?
		if (this.getNextLoadFactor() > MAX_LOAD_FACTOR) {
			resize();
		}
		int index = this.getAddIndex(key);
		MapEntryPP entry = this.table[index];
		MapEntryPP lastentry = null;
		Point result = null;
		MapEntryPP mea = null;
		if (entry == null) {
			mea = new MapEntryPP(key, value);
			this.table[index] = mea;
		} else {
			while (entry != null && !entry.getKey().equals(key)) {
				lastentry = entry;
				entry = entry.getNext();
			}
			if (entry == null) {
				mea = new MapEntryPP(key, value);
				lastentry.setNext(mea);
			} else if (entry.getKey().equals(key)) {
				if (!entry.isRemoved()) { // dafuck ?
					result = entry.getValue();
				}
				entry.setRemoved(true);
				mea = new MapEntryPP(key, value, entry.getNext());
				entry = mea;
			}
		}
		if (result == null)
			size++;
		list.push(mea);

		return result;
	}

	@Override
	public Point remove(Point key) {
		if (key == null) {
			throw new IllegalArgumentException("Argument cannot be null.");
		}
		int index = this.getAddIndex(key);
		MapEntryPP entry = this.table[index];
		MapEntryPP lastentry = null;
		Point result = null;
		while (entry != null && !entry.getKey().equals(key)) {
			lastentry = entry;
			entry = entry.getNext();
		}
		if (entry == null) {
			return null;
		} else if (entry.getKey().equals(key)) {
			if (!entry.isRemoved()) { // dafuck ?
				entry.setRemoved(true);
				result = entry.getValue();
				size--;
				if (lastentry != null)
					lastentry.setNext(entry.getNext());
				else
					this.table[index] = null;
			} else {
				return null;
			}
			return result;
		}

		return null;
	}

	@Override
	public Point get(Point key) {
		if (key == null) {
			throw new IllegalArgumentException("Argument cannot be null.");
		}
		int index = this.getAddIndex(key);
		MapEntryPP entry = this.table[index];
		while (entry != null && !entry.getKey().equals(key))
			entry = entry.getNext();

		if (entry != null && entry.getKey().equals(key) && !entry.isRemoved())
			return entry.getValue();
		return null;
	}

	@Override
	public boolean contains(Point key) {
		return get(key) != null;
	}

	@Override
	public void clear() {
		this.table = (MapEntryPP[]) new MapEntryPP[STARTING_SIZE];
		this.size = 0;
	}

	@Override
	public int size() {
		return this.size;
	}

//	@Override
//	public Set<K> keySet() {
//		HashSet<K> result = new HashSet<K>(size);
//		for (int i = 0; i < this.table.length; i++) {
//			MapEntryPP entry = this.table[i];
//			if (entry != null && !entry.isRemoved()) {
//				result.add(entry.getKey());
//			}
//		}
//		return result;
//	}

	@Override
	public List<Point> values() {
		ArrayList<Point> result = new ArrayList<Point>(size);
		for (int i = 0; i < this.table.length; i++) {
			MapEntryPP entry = this.table[i];
			if (entry != null && !entry.isRemoved()) {
				result.add(entry.getValue());
			}
		}
		return result;
	}

	/**
	 * Calculates the load factor if another element is added the HashMap.
	 *
	 * @return Returns the load factor.
	 */
	private double getNextLoadFactor() {
		return (double) (size + 1) / (double) this.table.length;
	}

	/**
	 * Doubles the size of the HashMap and inserts the elements into the new
	 */
	private void resize() {
		MapEntryPP[] temp = this.table;
		this.table = (MapEntryPP[]) new MapEntryPP[temp.length * 2];
		// this.size = 0;
		for (int i = 0; i < temp.length; i++) {
			MapEntryPP entry = temp[i];
			if (entry != null && !entry.isRemoved()) {
				int index = Math.abs(entry.getKey().hashCode()) % temp.length;
				table[index] = entry;
			}
		}
	}

	/**
	 * Gets the index of a given array-backed HashMap to add the given key.
	 *
	 * @param key The key to add.
	 * @return Returns the index to add to.
	 */
	private int getAddIndex(Point key) {
		int index = Math.abs(key.hashCode()) % this.table.length;
		return index;

//		MapEntryPP curEntry = this.table[index];
//		int firstRemoved = -1;
//		int curIndex = index;
//		boolean looped = false;
//
//		while (curEntry != null && !curEntry.getKey().equals(key) && (!looped || curIndex != index)) {
//			if (firstRemoved == -1 && curEntry.isRemoved()) {
//				// Record first removed
//				firstRemoved = index;
//			}
//
//			if (++curIndex >= this.table.length) {
//				// Loop back around to the first of the table
//				curIndex = 0;
//				looped = true;
//			}
//
//			curEntry = this.table[curIndex];
//		}
//		if (curEntry != null && curEntry.getKey().equals(key)) {
//			return curIndex;
//		} else {
//			return (firstRemoved == -1 ? curIndex : firstRemoved);
//		}
	}

//	@Override
//	public Set<K> keySet() {
//		// TODO Auto-generated method stub
//		return null;
//	}
}