package bc19;

import java.util.Arrays;
import java.util.PriorityQueue;

public class MPriorityQueue {

	private static final int DEFAULT_INITIAL_CAPACITY = 11;

	/**
	 * Priority queue represented as a balanced binary heap: the two children of
	 * queue[n] are queue[2*n+1] and queue[2*(n+1)]. The priority queue is ordered
	 * by comparator, or by the elements' natural ordering, if comparator is null:
	 * For each node n in the heap and each descendant d of n, n <= d. The element
	 * with the lowest value is in queue[0], assuming the queue is nonempty.
	 */
	transient Integer[] queue; // non-private to simplify nested class access

	/**
	 * The number of elements in the priority queue.
	 */
	private int size = 0;

	/**
	 * The number of times this priority queue has been <i>structurally
	 * modified</i>. See AbstractList for gory details.
	 */
	transient int modCount = 0; // non-private to simplify nested class access

	/**
	 * The maximum size of array to allocate. Some VMs reserve some header words in
	 * an array. Attempts to allocate larger arrays may result in OutOfMemoryError:
	 * Requested array size exceeds VM limit
	 */
	private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

	/**
	 * Creates a {@code PriorityQueue} with the default initial capacity (11) that
	 * orders its elements according to their {@linkplain Comparable natural
	 * ordering}.
	 */
	public MPriorityQueue() {
		this(DEFAULT_INITIAL_CAPACITY);
	}

	/**
	 * Creates a {@code PriorityQueue} with the specified initial capacity that
	 * orders its elements according to the specified comparator.
	 *
	 * @param initialCapacity the initial capacity for this priority queue
	 * @param comparator      the comparator that will be used to order this
	 *                        priority queue. If {@code null}, the
	 *                        {@linkplain Comparable natural ordering} of the
	 *                        elements will be used.
	 * @throws IllegalArgumentException if {@code initialCapacity} is less than 1
	 */
	public MPriorityQueue(int initialCapacity) {
		// Note: This restriction of at least one is not actually needed,
		// but continues for 1.5 compatibility
		if (initialCapacity < 1)
			throw new IllegalArgumentException();
		this.queue = new Integer[initialCapacity];
	}

	/**
	 * Inserts the specified element into this priority queue.
	 *
	 * @return {@code true} (as specified by {@link Collection#add})
	 * @throws ClassCastException   if the specified element cannot be compared with
	 *                              elements currently in this priority queue
	 *                              according to the priority queue's ordering
	 * @throws NullPointerException if the specified element is null
	 */
	public boolean add(Integer e) {
		return offer(e);
	}

	/**
	 * Inserts the specified element into this priority queue.
	 *
	 * @return {@code true} (as specified by {@link Queue#offer})
	 * @throws ClassCastException   if the specified element cannot be compared with
	 *                              elements currently in this priority queue
	 *                              according to the priority queue's ordering
	 * @throws NullPointerException if the specified element is null
	 */
	public boolean offer(Integer e) {
		if (e == null)
			throw new NullPointerException();
		modCount++;
		int i = size;
		if (i >= queue.length)
			grow(i + 1);
		size = i + 1;
		if (i == 0)
			queue[0] = e;
		else
			siftUp(i, e);
		return true;
	}

	/**
	 * Increases the capacity of the array.
	 *
	 * @param minCapacity the desired minimum capacity
	 */
	private void grow(int minCapacity) {
		int oldCapacity = queue.length;
		// Double size if small; else grow by 50%
		int newCapacity = oldCapacity + ((oldCapacity < 64) ? (oldCapacity + 2) : (oldCapacity >> 1));
		// overflow-conscious code
		if (newCapacity - MAX_ARRAY_SIZE > 0)
			newCapacity = hugeCapacity(minCapacity);
		queue = Arrays.copyOf(queue, newCapacity);
	}

	public int size() {
		return size;
	}

	private static int hugeCapacity(int minCapacity) {
		if (minCapacity < 0) // overflow
			throw new OutOfMemoryError();
		return (minCapacity > MAX_ARRAY_SIZE) ? Integer.MAX_VALUE : MAX_ARRAY_SIZE;
	}

	/**
	 * Inserts item x at position k, maintaining heap invariant by promoting x up
	 * the tree until it is greater than or equal to its parent, or is the root.
	 *
	 * To simplify and speed up coercions and comparisons. the Comparable and
	 * Comparator versions are separated into different methods that are otherwise
	 * identical. (Similarly for siftDown.)
	 *
	 * @param k the position to fill
	 * @param x the item to insert
	 */
	private void siftUp(int k, Integer x) {
		siftUpComparable(k, x);
	}

	private void siftUpComparable(int k, Integer x) {
		while (k > 0) {
			int parent = (k - 1) >>> 1;
			Integer e = queue[parent];
			if (x - e >= 0)
				break;
			queue[k] = e;
			k = parent;
		}
		queue[k] = x;
	}

	public Integer poll() {
		if (size == 0)
			return null;
		int s = --size;
		modCount++;
		Integer result = queue[0];
		Integer x = queue[s];
		queue[s] = null;
		if (s != 0)
			siftDown(0, x);
		return result;
	}

	/**
	 * Inserts item x at position k, maintaining heap invariant by demoting x down
	 * the tree repeatedly until it is less than or equal to its children or is a
	 * leaf.
	 *
	 * @param k the position to fill
	 * @param x the item to insert
	 */
	private void siftDown(int k, Integer x) {
		siftDownComparable(k, x);
	}

	private void siftDownComparable(int k, Integer x) {
		int half = size >>> 1; // loop while a non-leaf
		while (k < half) {
			int child = (k << 1) + 1; // assume left child is least
			Integer c = queue[child];
			int right = child + 1;
			if (right < size && (c - queue[right]) > 0)
				c = queue[child = right];
			if (x - c <= 0)
				break;
			queue[k] = c;
			k = child;
		}
		queue[k] = x;
	}
}
