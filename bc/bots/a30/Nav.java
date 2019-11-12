package bc19;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Nav extends Util {
	private static Point agoal = null;
	public static int ins = 0;
	public static int flag = -1;
	private static int speed;

	/*
	 * Normal BFS with start nodes and block nodes that dosen't pass the block
	 * nodes. parent and near and distance as parameter that set in the BFS.
	 * O(m+n)->O(n)
	 */
//	private void BFS(intVec start, intVec block, int[] near, int[] distance, int size, intVec[] adjacencyList) {
//		Queue<Integer> queue = new LinkedList<Integer>();
//		Integer[] mark = new Integer[size];
//		Integer ie;
//		for (Integer i = 0; i < size; ++i) {
//			mark[i] = 0;
//			near[i] = -1;
//			distance[i] = Integer.MAX_VALUE / 2;
//		}
//		for (Integer it : start) {
//			queue.add(it);
//			mark[it] = 1;
//			distance[it] = 0;
//			near[it] = it;
//		}
//		if (block != null)
//			for (Integer it : block)
//				mark[it] = -1;
//		while (!queue.isEmpty()) {
//			ie = queue.poll();
//			for (Integer it : adjacencyList[ie]) {
//				if (mark[it] != 1) {
//					near[it] = near[ie];
//					distance[it] = distance[ie] + 1;
//					if (mark[it] == 0)
//						queue.add(it);
//					mark[it] = 1;
//				}
//			}
//		}
//	}
	public static Stack<Point> destSetPilgrimToResource() {
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		mr.log("here");
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								|| (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Castle.number()
										&& mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Church
												.number()))
						&& (myp != po || (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0 && Pilgrim.isItSafe(pi)))) {
					if (pi.fuel && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
						value = -pi.dist2(myp);
						if (value >= mx) {
							mx = value;
							mxx = pi;
						}
					}
					if (pi.karbonite && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
						dest = pi;
						ppo = po;
						path.push(pi);
						while (parent[ppo.x][ppo.y] != null) {
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("dest(t) seted (karbonite). pathsize: " + path.size());
						return path;
						// break outerloop;
					}
					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
				}
			}
			if (mxx != null && po.dist2(myp) > 25) { // can change
				dest = mxx;
				ppo = parent[dest.x][dest.y];
				path.push(dest);
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}
				mr.log("dest(t) fuel. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
				return path;
			}
		}
		return null;
		// mr.log("dest not found.");
	}

	public static Stack<Point> backResourceToCC() {
		mr.log("backRes");
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		int qq = 0;
		// do we need this ?
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0 && Pilgrim.isItSafe(pi)))) {
//					if (mr.getVisibleRobotMap()[pi.y][pi.x] > 0)
//						mr.log("id " + mr.getVisibleRobotMap()[pi.y][pi.x] + " units : "
//								+ mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit + " dir:" + dir.number());
					if ((mr.getVisibleRobotMap()[pi.y][pi.x] > 0
							&& (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit == UnitType.Castle.number()
									|| mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit == UnitType.Church
											.number()))
							|| (pi.icastle)) {
						if (dir.number() < 8) {
							dest = po;
							ppo = po;
							while (parent[ppo.x][ppo.y] != null) {
								path.push(ppo);
								ppo = parent[ppo.x][ppo.y];
							}
							mr.log("dest(r) seted. pathsize: " + path.size());
							qq = 0 - qq;
							mr.log("GG:" + qq);
							if (path.size() == 0)
								return null;// TODO ? ? ? ?
							return path;
							// break outerloop;
						} else {
							// vaghti yebar mirine o mibine dg nmibine
						}
					} else {
						qq++;
						que.add(pi);
						marked[pi.x][pi.y] = true;
						parent[pi.x][pi.y] = po;
					}
				}
			}
		}
		mr.log("GG:" + qq);
		return null;
//		if (qq > 0) {
//			for (int i = 0; i < size; ++i) {
//				String s = "";
//				for (int j = 0; j < size; ++j)
//					s += mr.getVisibleRobotMap()[i][j] + " ";
//				mr.log(s);
//			}
//		}
		// mr.log("dest not found.");
	}

	private static void calcEnemyCastle() {
		// TODO make it faster ?:D O(1) probably

		// don't need to check for resource low resource on map
		// problem btw same passable ...
		// btw same map

		for (Point po : castlei) {
			if (vertical && p[po.x][size - po.y - 1].ocastleNotDes) {
				p[po.x][size - po.y - 1].ocastle = true;
				agoal = p[po.x][size - po.y - 1];
			}
			if (horizontal && p[size - po.x - 1][po.y].ocastleNotDes) {
				p[size - po.x - 1][po.y].ocastle = true;
				agoal = p[size - po.x - 1][po.y];
			}
		}
		// mycastle hello ? :D
		if (myCC == null)
			mr.log("bullshit?!!:D");
		if (revPoint(myCC).ocastle)
			agoal = revPoint(myCC);
		// felan benzaram harki bere be rev khodesh hum ? :D
		if (vertical && horizontal)
			mr.log("FuckVFuckH :((");

	}

	public static Stack<Point> ASstar() {
		mr.log("LastAStar:" + ins + " flag: " + flag);
		agoal = null;
		calcEnemyCastle();
		if (agoal == null) {
			mr.log("no goal A* :(");
			return null;
		}
		return sadbfs(agoal);
		// return cAStar4(agoal);
//		if (me.unit == UnitType.Pilgrim.number())
//			return AStar4(agoal);
//		else if (me.unit == UnitType.Crusader.number())
//			return AStar9(agoal);
//		else if (me.unit == UnitType.Prophet.number())
//			return AStar4(agoal);
//		else if (me.unit == UnitType.Preacher.number())
//			return AStar4(agoal);
//		return null;
	}

	private static Stack<Point> sadbfs(Point goal) {
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		ins = 0;
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
					if (pi.ocastle) {
						dest = pi;
						ppo = po;
						path.push(dest);
						while (parent[ppo.x][ppo.y] != null) {
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("dest(t) seted. pathsize: " + path.size() + " - " + ins);
						mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
						return path;
						// break outerloop;
					}
					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -pi.dist2(goal);
					if (value >= mx) {
						mx = value;
						mxx = pi;
					}
				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127
//				if (ins > 50 * (me.time - 20)) {
//					dest = mxx;
//					ppo = parent[dest.x][dest.y];
//					path.push(dest);
//					while (parent[ppo.x][ppo.y] != null) {
//						path.push(ppo);
//						ppo = parent[ppo.x][ppo.y];
//					}
//					mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//					mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//					return path;
//				}
			}
		}
		return null;
	}

	public static Stack<Point> reAStar() {
		mr.log("LastAStar:" + ins + " flag: " + flag);
//		agoal = null;
//		calcEnemyCastle();
//		if (agoal == null) {
//			mr.log("no goal A* :(");
//			return null;
//		}
		agoal = dest;
		return null;
		// return cAStar4(agoal);
//		if (me.unit == UnitType.Crusader.number())
//			return AStar9(agoal);
//		else if (me.unit == UnitType.Prophet.number())
//			return AStar4(agoal);
//		else if (me.unit == UnitType.Preacher.number())
//			return AStar4(agoal);
//		return null;
	}

	// A* baby
	// f(n) = g(n) + h(n)
	// with one goal
//	public static Stack<Point> AStar9(Point goal) {
//		speed = 9;
//		Point po = null, pi;
//		MHashSet hp = null;
//		ins = 0;
//		int gg, value = -1;
//		Stack<Point> path = new Stack<Point>();
//
//		MHashSet closedSet = new MHashSet();
//		MHashSet openSet = new MHashSet();
//		openSet.add(myp);
//
//		HashMap<Point, Point> parent = new HashMap<Point, Point>();
//		parent.put(myp, null);
//		HashMap<Point, Integer> g = new HashMap<Point, Integer>();// initializeAllToInfinity();
//		g.put(myp, 0);
//
//		HashMap<Integer, MHashSet> fm = new HashMap<Integer, MHashSet>();// initializeAllToInfinity();
//		MPriorityQueue fq = new MPriorityQueue();
//		HashMap<Point, Integer> f = new HashMap<Point, Integer>();// initializeAllToInfinity();
//
//		value = h(myp, goal);
//		f.put(myp, value);
//		hp = new MHashSet();
//		hp.add(myp);
//		fm.put(value, hp);
//		fq.add(value);
//		int fn = 0;
//		int cry = 0, ccry = 0;
//		while (!openSet.isEmpty()) {
//			// implement RB? :(
//			fn = fq.poll();
//			hp = fm.get(fn);
//			if (hp == null || hp.size() == 0) {
//				++ccry;
//				continue;
//			}
//			po = hp.getFirst();
//
//			if (!openSet.contains(po)) {
//				++cry;
//				continue;
//			}
//
//			if (hp.size() == 1)
//				fm.remove(fn);
//			else
//				hp.remove(po);
//
//			if (po.ecastle) {
//				dest = po;
//				Point ppo = po;
//				while (parent.get(ppo) != null) {
//					path.push(ppo);
//					ppo = parent.get(ppo);
//				}
//				mr.log("destA*(Castle) seted. pathsize: " + path.size());
//				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//				return path;
//				// break;
//			}
//			openSet.remove(po);
//			closedSet.add(po);
//
//			for (Direction9 dir : Direction9.values()) {
//				++ins;
//				pi = po.dir9To(dir);
//				if (pi == null || closedSet.contains(pi) || !pi.passable
//						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
//					continue;
//
//				gg = g.get(po) + 1;
//				if (!openSet.contains(pi))
//					openSet.add(pi);
//				else if (gg >= g.get(pi))
//					continue;
//
//				parent.put(pi, po);
//				g.put(pi, gg);
//				value = gg + h(pi, goal);
//				if (f.containsKey(pi))
//					fm.get(f.get(pi)).remove(pi);
//
//				f.put(pi, value);
//				if (fm.containsKey(value))
//					fm.get(value).add(pi);
//				else {
//					hp = new MHashSet();
//					hp.add(pi);
//					fm.put(value, hp);
//				}
//				fq.add(value);
//			}
//		}
//		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//		return null;
//	}

	// A* baby
	// f(n) = g(n) + h(n)
	// with one goal

//	public static Stack<Point> AStar4(Point goal) {
//		speed = 4;
//		Point po = null, pi;
//		MHashSet hp = null;
//		ins = 0;
//		int gg, value = -1;
//		Stack<Point> path = new Stack<Point>();
//
//		MHashSet closedSet = new MHashSet();
//		MHashSet openSet = new MHashSet();
//		openSet.add(myp);
//
//		HashMap<Point, Point> parent = new HashMap<Point, Point>();
//		parent.put(myp, null);
//		HashMap<Point, Integer> g = new HashMap<Point, Integer>();// initializeAllToInfinity();
//		g.put(myp, 0);
//
//		HashMap<Integer, MHashSet> fm = new HashMap<Integer, MHashSet>();// initializeAllToInfinity();
//		MPriorityQueue fq = new MPriorityQueue();
//		HashMap<Point, Integer> f = new HashMap<Point, Integer>();// initializeAllToInfinity();
//
//		value = h(myp, goal);
//		f.put(myp, value);
//		hp = new MHashSet();
//		hp.add(myp);
//		fm.put(value, hp);
//		fq.add(value);
//		int fn = 0;
//		int cry = 0, ccry = 0;
//
//		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
//		while (!openSet.isEmpty()) {
//			mr.log("SIZE: " + openSet.size() + " - " + closedSet.size() + " - " + parent.size() + " - " + g.size()
//					+ " -fm- " + fm.size() + " - " + fq.size() + " - " + f.size());
//
//			// implement RB? :(
//			if (fq.size() == 0) {
//				mr.log("BAD BUG 01 : " + openSet.size() + " - " + closedSet.size() + " - " + ins + " - " + cry + " + "
//						+ openSet.getFirst());
//				break;
//			}
//			flag = 1;
//			fn = fq.poll();
//			flag = 11;
//			hp = fm.get(fn);
//			// that's bad
//			if (hp == null || hp.size() == 0) {
//				++ccry;
//				continue;
//			}
//			flag = 12;
//			if (hp.size() == 0) {
//				mr.log("BAD BUG 02 : " + openSet.size() + " - " + closedSet.size() + " - " + ins + " - " + cry + " + "
//						+ openSet.getFirst() + " fn: " + fn);
//				break;
//			}
//			// mr.log("hello : " + hp.getList());
//
////			while (hp.getList().peek() != null && hp.getList().peek().isRemoved()) {
////				mr.log("GG : " + hp.getList().peek() + " - " + hp.getList().peek().isRemoved());
////				mr.log("aa :" + hp.getList().poll());
////			}
////			mr.log("zz :" + hp.getList().peek());
//			po = hp.getFirst();
//			// it is last queue sucks =))
//			flag = 2;
//			if (!openSet.contains(po)) {
//				++cry;
//				continue;
//			}
//
//			if (hp.size() == 1)
//				fm.remove(fn);
//			else
//				hp.remove(po);
//
//			flag = 3;
//			if (po.ecastle) {
//				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//				dest = po;
//				Point ppo = po;
//				while (parent.get(ppo) != null) {
//					path.push(ppo);
//					ppo = parent.get(ppo);
//				}
//				mr.log("destA*(Castle) seted. pathsize: " + path.size());
//				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//				return path;
//				// break;
//			}
//			flag = 4;
//			openSet.remove(po);
//			closedSet.add(po);
//			flag = 5;
//			for (Direction4 dir : Direction4.values()) {
//				++ins;
//				pi = po.dir4To(dir);
//				if (pi == null || closedSet.contains(pi) || !pi.passable
//						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
//					continue;
//				flag = 6;
//				gg = g.get(po) + 1;
//				if (!openSet.contains(pi))
//					openSet.add(pi);
//				else if (gg >= g.get(pi))
//					continue;
//				flag = 7;
//				parent.put(pi, po);
//				g.put(pi, gg);
//				value = gg + h(pi, goal);
//				if (f.containsKey(pi)) {
//					if (fm.get(f.get(pi)) == null) {
//						mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
//						for (Integer poi : fm.keySet())
//							mr.log("canwe : " + poi + " : " + fm.get(poi));
//					}
//					fm.get(f.get(pi)).remove(pi);
//				}
//				flag = 8;
//				f.put(pi, value);
//				if (fm.containsKey(value))
//					fm.get(value).add(pi);
//				else {
//					hp = new MHashSet();
//					hp.add(pi);
//					fm.put(value, hp);
//				}
//				flag = 9;
//				fq.add(value);
//			}
//		}
//		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//		return null;
//	}

	public static Stack<Point> AStarIsBack4(Point goal) {
		mr.log("LastAStar:" + ins + " flag: " + flag);
		speed = 4;
		Point po = null, pi;
		pointStack hp = null;
		ins = 0;
		int gg, value = -1;
		Stack<Point> path = new Stack<Point>();

		boolean[][] closedSet = new boolean[size][size];
		boolean[][] openSet = new boolean[size][size];
//		for (int i = 0; i < size; ++i)
//			for (int j = 0; j < size; ++j) {
//				openSet[i][j] = false;
//				closedSet[i][j] = false;
//			}
		openSet[myp.x][myp.y] = true;

		Point[][] parent = new Point[size][size];
		parent[myp.x][myp.y] = null;

		Integer[][] g = new Integer[size][size];// initializeAllToInfinity();
		g[myp.x][myp.y] = 0;

		// HashMap<Integer, HashSet<Point>> fm = new HashMap<Integer, HashSet<Point>>();
		pointStack[] fm = new pointStack[1000];// initializeAllToInfinity();
		MPriorityQueue fq = new MPriorityQueue();
		Integer[][] f = new Integer[size][size];// initializeAllToInfinity();

		value = h(myp, goal);
		f[myp.x][myp.y] = value;
		hp = new pointStack();
		hp.add(myp);
		// fm.put(value, hp);
		fm[value] = hp;
		fq.add(value);
		int fn = 0;
		int cry = 0, ccry = 0;
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);

		while (fq.size() != 0) { // !openSet.isEmpty()
			// implement RB? :(
			flag = 1;
			fn = fq.poll();
			flag = 11;
			hp = fm[fn];
			// that's bad
			if (hp == null || hp.size() == 0) {
				++ccry;
				continue;
			}
			flag = 12;
			po = hp.pop();
			// it is last queue sucks =))
			flag = 2;
			if (!openSet[po.x][po.y]) {
				++cry;
				continue;
			}

//			if (hp.size() == 1)
//				fm[fn] = null;
			// fm.remove(fn);// why ?
//			else
//				hp.pop();

			flag = 3;
			if (po.ocastle || po == goal) {
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);

				dest = po;
				Point ppo = dest;
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}

				mr.log("destA*(Castle) seted. pathsize: " + path.size());
				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
				return path;
				// break;
			}
			flag = 4;

			openSet[po.x][po.y] = false;
			closedSet[po.x][po.y] = true;

			flag = 5;
			for (Direction4 dir : Direction4.values()) {
				++ins;
				pi = po.dir4To(dir);
				if (pi == null || closedSet[pi.x][pi.y] || !pi.passable
						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
					continue;
				flag = 6;
				gg = g[po.x][po.y] + 1;
				if (!openSet[pi.x][pi.y])
					openSet[pi.x][pi.y] = true;
				else if (gg >= g[pi.x][pi.y])
					continue;
				flag = 7;

				parent[pi.x][pi.y] = po;
				g[pi.x][pi.y] = gg;

				value = gg + h(pi, goal);

//				if (f.containsKey(pi)) {
//					if (fm.get(f.get(pi)) == null) {
//						mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
//						for (Integer poi : fm.keySet())
//							mr.log("canwe : " + poi + " : " + fm.get(poi));
//					}
//					fm.get(f.get(pi)).remove(pi);// why ?
//				}
				flag = 8;

				f[pi.x][pi.y] = value;

				if (fm[value] != null)
					fm[value].add(pi);
				else {
					hp = new pointStack();
					hp.add(pi);
					fm[value] = hp;
				}
				flag = 9;
				fq.add(value);
			}
		}
		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
		return null;
	}

	public static Stack<Point> AStarIsBack4p(Point goal) {
		mr.log("LastAStar:" + ins + " flag: " + flag);
		speed = 4;
		Point po = null, pi;
		pointStack hp = null;
		ins = 0;
		int gg, value = -1;
		Stack<Point> path = new Stack<Point>();

		boolean[][] closedSet = new boolean[size][size];
		boolean[][] openSet = new boolean[size][size];
//		for (int i = 0; i < size; ++i)
//			for (int j = 0; j < size; ++j) {
//				openSet[i][j] = false;
//				closedSet[i][j] = false;
//			}
		openSet[myp.x][myp.y] = true;

		Point[][] parent = new Point[size][size];
		parent[myp.x][myp.y] = null;

		Integer[][] g = new Integer[size][size];// initializeAllToInfinity();
		g[myp.x][myp.y] = 0;

		// HashMap<Integer, HashSet<Point>> fm = new HashMap<Integer, HashSet<Point>>();
		pointStack[] fm = new pointStack[1000];// initializeAllToInfinity();
		MPriorityQueue fq = new MPriorityQueue();
		Integer[][] f = new Integer[size][size];// initializeAllToInfinity();

		value = h(myp, goal);
		f[myp.x][myp.y] = value;
		hp = new pointStack();
		hp.add(myp);
		// fm.put(value, hp);
		fm[value] = hp;
		fq.add(value);
		int fn = 0;
		int cry = 0, ccry = 0;
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);

		while (fq.size() != 0) { // !openSet.isEmpty()
			// implement RB? :(
			flag = 1;
			fn = fq.poll();
			flag = 11;
			hp = fm[fn];
			// that's bad
			if (hp == null || hp.size() == 0) {
				++ccry;
				continue;
			}
			flag = 12;
			po = hp.pop();
			// it is last queue sucks =))
			flag = 2;
			if (!openSet[po.x][po.y]) {
				++cry;
				continue;
			}

//			if (hp.size() == 1)
//				fm[fn] = null;
			// fm.remove(fn);// why ?
//			else
//				hp.pop();

			flag = 3;
			if (po.dist2(goal) == 1) { // delete last one :D will work ?
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);

				dest = po;
				Point ppo = dest;
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}
				mr.log("destA*(Castle) seted. pathsize: " + path.size());
				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
				return path;
				// break;
			}
			flag = 4;

			openSet[po.x][po.y] = false;
			closedSet[po.x][po.y] = true;

			flag = 5;
			for (Direction4 dir : Direction4.values()) {
				++ins;
				pi = po.dir4To(dir);
				if (pi == null || closedSet[pi.x][pi.y] || !pi.passable
						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
					continue;
				flag = 6;
				gg = g[po.x][po.y] + 1;
				if (!openSet[pi.x][pi.y])
					openSet[pi.x][pi.y] = true;
				else if (gg >= g[pi.x][pi.y])
					continue;
				flag = 7;

				parent[pi.x][pi.y] = po;
				g[pi.x][pi.y] = gg;

				value = gg + h(pi, goal);

//				if (f.containsKey(pi)) {
//					if (fm.get(f.get(pi)) == null) {
//						mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
//						for (Integer poi : fm.keySet())
//							mr.log("canwe : " + poi + " : " + fm.get(poi));
//					}
//					fm.get(f.get(pi)).remove(pi);// why ?
//				}
				flag = 8;

				f[pi.x][pi.y] = value;

				if (fm[value] != null)
					fm[value].add(pi);
				else {
					hp = new pointStack();
					hp.add(pi);
					fm[value] = hp;
				}
				flag = 9;
				fq.add(value);
			}
		}
		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
		return null;
	}

//	public static Stack<Point> cAStar4(Point goal) {
//		speed = 4;
//		Point po = null, pi;
//		HashSetI hp = null;
//		ins = 0;
//		int gg, value = -1;
//		Stack<Point> path = new Stack<Point>();
//		mr.log("SIZE: ");
//		HashSetI closedSet = new HashSetI();
//		HashSetI openSet = new HashSetI();
//		openSet.add(myp);
//		mr.log("SIZE: ");
//		HashMapPP parent = new HashMapPP();
//		parent.add(myp, null);
//		HashMapPI g = new HashMapPI();// initializeAllToInfinity();
//		g.add(myp, 0);
//
//		mr.log("SIZE: ");
//		HashMapIM fm = new HashMapIM();// initializeAllToInfinity();
//		MPriorityQueue fq = new MPriorityQueue();
//		HashMapPI f = new HashMapPI();// initializeAllToInfinity();
//
//		mr.log("SIZE: ");
//		value = h(myp, goal);
//		f.add(myp, value);
//		hp = new HashSetI();
//		hp.add(myp);
//		fm.add(value, hp);
//		fq.add(value);
//		int fn = 0;
//		int cry = 0, ccry = 0;
//
//		mr.log("SIZE: ");
//		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
//		while (!openSet.isEmpty()) {
////			mr.log("SIZE: " + openSet.size() + " - " + closedSet.size() + " - " + parent.size() + " - " + g.size()
////					+ " -fm- " + fm.size() + " - " + fq.size() + " - " + f.size());
//
//			// implement RB? :(
//			if (fq.size() == 0) {
//				mr.log("BAD BUG 01 : " + openSet.size() + " - " + closedSet.size() + " - " + ins + " - " + cry + " + "
//						+ openSet.getFirst());
//				break;
//			}
//			flag = 1;
//			fn = fq.poll();
//			flag = 11;
//			hp = fm.get(fn);
//			// that's bad
//			if (hp == null || hp.size() == 0) {
//				++ccry;
//				continue;
//			}
//			flag = 12;
//			if (hp.size() == 0) {
//				mr.log("BAD BUG 02 : " + openSet.size() + " - " + closedSet.size() + " - " + ins + " - " + cry + " + "
//						+ openSet.getFirst() + " fn: " + fn);
//				break;
//			}
//			// mr.log("hello : " + hp.getList());
//
////			while (hp.getList().peek() != null && hp.getList().peek().isRemoved()) {
////				mr.log("GG : " + hp.getList().peek() + " - " + hp.getList().peek().isRemoved());
////				mr.log("aa :" + hp.getList().poll());
////			}
////			mr.log("zz :" + hp.getList().peek());
//			po = hp.getFirst();
//			// it is last queue sucks =))
//			flag = 2;
//			if (!openSet.contains(po)) {
//				++cry;
//				continue;
//			}
//
//			if (hp.size() == 1)
//				fm.remove(fn);
//			else
//				hp.remove(po);
//
//			flag = 3;
//			if (po.ocastle) {
//				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//				dest = po;
//				Point ppo = po;
//				while (parent.get(ppo) != null) {
//					path.push(ppo);
//					ppo = parent.get(ppo);
//				}
//				mr.log("destA*(Castle) seted. pathsize: " + path.size());
//				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//				return path;
//				// break;
//			}
//			flag = 4;
//			openSet.remove(po);
//			closedSet.add(po);
//			flag = 5;
//			for (Direction4 dir : Direction4.values()) {
//				++ins;
//				pi = po.dir4To(dir);
//				if (pi == null || closedSet.contains(pi) || !pi.passable
//						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
//					continue;
//				flag = 6;
//				gg = g.get(po) + 1;
//				if (!openSet.contains(pi))
//					openSet.add(pi);
//				else if (gg >= g.get(pi))
//					continue;
//				flag = 7;
//				parent.add(pi, po);
//				g.add(pi, gg);
//				value = gg + h(pi, goal);
//				if (f.contains(pi)) {
//					if (fm.get(f.get(pi)) == null) {
//						mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
////						for (Integer poi : fm.keySet())
////							mr.log("canwe : " + poi + " : " + fm.get(poi));
//					}
//					if (fm.contains(f.get(pi)))
//						fm.get(f.get(pi)).remove(pi);
//				}
//				flag = 8;
//				f.add(pi, value);
//				if (fm.contains(value))
//					fm.get(value).add(pi);
//				else {
//					hp = new HashSetI();
//					hp.add(pi);
//					fm.add(value, hp);
//				}
//				flag = 9;
//				fq.add(value);
//			}
//		}
//		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
//		return null;
//	}

	private static int h(Point pi, Point goal) {
		// speed == 4
		return (int) (Math.abs(goal.dxTo(pi)) + Math.abs(goal.dyTo(pi)) + 1) / 2;
		// return (int) Math.ceil(goal.dist)(pi) / speed);
	}

	private static int h9(Point pi, Point goal) {
		// speed == 4
		int mm = Math.min(Math.abs(goal.dxTo(pi)), Math.abs(goal.dyTo(pi)));
		int mam = Math.max(Math.abs(goal.dxTo(pi)), Math.abs(goal.dyTo(pi)));
		if (mm % 2 == 0)
			return (int) mm / 2 + (mam - mm + 2) / 3;
		else
			return (int) (mm + 1) / 2 + (mam - mm - 1 + 2) / 3;

		// return (int) Math.ceil(goal.dist)(pi) / speed);
	}

	public static Stack<Point> defCastleWithPreacher() {
		agoal = null;
		calcEnemyCastle();
		if (agoal == null) {
			mr.log("no goal A* :(");
			return null;
		}
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		ins = 0;
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) && pi.dist2(myCastle) <= 36) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -pi.dist2(agoal);
					if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel
							&& mr.getVisibleRobotMap()[pi.y][pi.x] == 0) {
						mx = value;
						mxx = pi;
					}
				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}
			if (po.dist2(myCastle) > 36 && mxx != null) {
				dest = mxx;
				ppo = parent[dest.x][dest.y];
				path.push(dest);
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}
				mr.log("dest(t) def. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
				return path;
			}
		}
		if (mxx != null) {
			dest = mxx;
			ppo = parent[dest.x][dest.y];
			path.push(dest);
			while (parent[ppo.x][ppo.y] != null) {
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("dest(t) def2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
		return null;
	}

	public static Stack<Point> nextAssignRes() {
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) && (myp != po || dir.number() < 8)) {
					if (pi.fuel && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
						value = -pi.dist2(myp);
						if (value >= mx) {
							mx = value;
							mxx = pi;
						}
					}
					if (pi.karbonite && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
						dest = pi;
						ppo = po;
						path.push(pi);
						while (parent[ppo.x][ppo.y] != null) {
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("castle dest(t) seted (k). pathsize: " + path.size());
						return path;
						// break outerloop;
					}
					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
				}
			}
			if (mxx != null && myp.distxy(po) > 8) { // change it TODO
				dest = mxx;
				ppo = parent[dest.x][dest.y];
				path.push(dest);
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}
				mr.log("castle dest(t) seted(f). pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
				return path;
			}
		}
		return null;
		// mr.log("dest not found.");
	}

	public static Stack<Point> attEnemeyCastle() {
		mr.log("LastAStar:" + ins + " flag: " + flag);
		agoal = null;
		calcEnemyCastle();
		if (agoal == null) {
			mr.log("no goal A* :(");
			return null;
		}
		return AStarIsBack4(agoal);
	}

	public static Stack<Point> goForExpand1() {
		ArrayList<Point> myexp = new ArrayList<Point>();
		int mn = 1000000, mnn = 1000000;
		Point gg = null;
		for (Point kp : karbonP) {
			mn = 1000000;
			for (Point po : castlei) {
				if (kp.distxy(po) < mn)
					mn = kp.distxy(po);
			}
			for (Point po : castleo) {
				if (kp.distxy(po) < mn)
					mn = kp.distxy(po);
			}
			if (kp.distxy(myCastle) <= mn)// or myp ?
			{
				myexp.add(kp);
				if (mr.getVisibleRobotMap()[kp.y][kp.x] <= 0) {
					if (kp.distxy(myp) < mnn) {
						mnn = kp.distxy(myp);
						gg = kp;
					}
				}
			}
		}
		mr.log(" goal : " + gg + " - " + myexp.size());
		if (gg != null)
			return AStarIsBack4p(gg);
		return null;
	}

	public static Point expandTargeti() {
		// ArrayList<Point> myexp = new ArrayList<Point>();
		int mn = 1000000, mnn = 1000000;
		int value;
		Point gg = null;
		for (Point po : resToDep) {// can be null lol
			if (po == null)
				continue;

			mn = 1000000;
			for (Point poo : castlei) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			for (Point poo : castleo) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			if (po.distxy(myp) <= mn) { // ==
				boolean valid = true;
				;
				for (Point pp : Castle.doneDep) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : Castle.lookInProg) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : castlei) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				if (valid)
					return po;
			}
		}
//		for (Point kp : karbonP) {
//			mn = 1000000;
//			for (Point po : castlei) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			for (Point po : castleo) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			if (kp.distxy(myp) <= mn)// or myp ?
//			{
//				myexp.add(kp);
//				if (mr.getVisibleRobotMap()[kp.y][kp.x] <= 0) {
//					if (kp.distxy(myp) < mnn) {
//						mnn = kp.distxy(myp);
//						gg = kp;
//					}
//				}
//			}
//		}
//		return gg;
		return null;
	}

	public static Point expandTargetXXX() {
		// ArrayList<Point> myexp = new ArrayList<Point>();
		int mn = 1000000, mnn = 1000000, bb = -10000;
		Point be = null;
		int value;
		Point gg = null;
		for (Point po : resToDep) {// can be null lol
			if (po == null)
				continue;

			mn = 1000000;
			for (Point poo : castlei) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			for (Point poo : castleo) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			if (po.distxy(myp) <= mn) { // ==

				boolean valid = true;

				for (Point pp : Castle.doneDep) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : Castle.lookInProg) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : castlei) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				if (valid) {// yejuri kash size ro ham miyvordi nmishe ? yani khob maslan az roye inke value
							// on noghte he chande shayad beshe na ?
					if (top) {
						if (po.y > bb) {
							bb = po.y;
							be = po;
						}
					}
					if (down) {
						if (-po.y > bb) {
							bb = -po.y;
							be = po;
						}
					}
					if (left) {
						if (po.x > bb) {
							bb = po.x;
							be = po;
						}
					}
					if (right) {
						if (-po.x > bb) {
							bb = -po.x;
							be = po;
						}
					}
				}
			}
		}
		return be;
//		for (Point kp : karbonP) {
//			mn = 1000000;
//			for (Point po : castlei) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			for (Point po : castleo) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			if (kp.distxy(myp) <= mn)// or myp ?
//			{
//				myexp.add(kp);
//				if (mr.getVisibleRobotMap()[kp.y][kp.x] <= 0) {
//					if (kp.distxy(myp) < mnn) {
//						mnn = kp.distxy(myp);
//						gg = kp;
//					}
//				}
//			}
//		}
//		return gg;
		// return null;
	}

	public static Stack<Point> nextAssignDefPre() {
		// mr.log("nobugpls");
		agoal = null;
		calcEnemyCastle();
		if (agoal == null) {
			mr.log("no goal A* :(");
			return null;
		}
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		// mr.log("nobugpls1");
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) && pi.dist2(myp) <= 36
						&& (myp != po || dir.number() < 8)) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -pi.dist2(agoal);
					if (value >= mx && pi.dist2(myp) > 8 && !pi.karbonite && !pi.fuel) {
						mx = value;
						mxx = pi;
					}
				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}
			if (po.dist2(myp) > 36 && mxx != null) {
				// mr.log("nobugpls2");
				dest = mxx;
				ppo = parent[dest.x][dest.y];
				path.push(dest);
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}
				mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
				return path;
			}
		}
		if (mxx != null) {
			// mr.log("nobugpls3");
			dest = mxx;
			ppo = parent[dest.x][dest.y];
			path.push(dest);
			while (parent[ppo.x][ppo.y] != null) {
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
		return null;
		// mr.log("dest not found.");
	}

	public static Stack<Point> defWithProphet() {
		// mr.log("ffs1");
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		ins = 0;
		// mr.log("sis1");
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					if ((pi.x + pi.y) % 2 == 0 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0 && !pi.karbonite && !pi.fuel
							&& pi.dist2(myp) > 2) {
						// mr.log("sis2");
						dest = pi;
						ppo = dest;
						while (parent[ppo.x][ppo.y] != null) {// ppo != myp
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("dest prophet. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
						mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
						return path;
					}

//					value = -pi.distxy(agoal);
//					if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel) {
//						mx = value;
//						mxx = pi;
//					}

				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}
//			if (po.dist2(myCastle) > 16) {
//				dest = mxx;
//				ppo = parent[dest.x][dest.y];
//				path.push(dest);
//				while (parent[ppo.x][ppo.y] != null) {
//					path.push(ppo);
//					ppo = parent[ppo.x][ppo.y];
//				}
//				mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//				return path;
//			}
		}
//		if (mxx != null) {
//			dest = mxx;
//			ppo = parent[dest.x][dest.y];
//			path.push(dest);
//			while (parent[ppo.x][ppo.y] != null) {
//				path.push(ppo);
//				ppo = parent[ppo.x][ppo.y];
//			}
//			mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//			return path;
//		}
		return null;
	}

	public static Stack<Point> defWithProphet2() {
		// mr.log("ffs1");
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		ins = 0;
		// mr.log("sis1");
		mr.log("OO: " + top + " - " + down + " - " + left + " - " + right + " - " + myCC);
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)
						&& (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								|| (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Castle.number()
										&& mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Church
												.number()))
						&& pi.dist2(myCC) <= 36) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -myCC.dist2(pi) * 100;
					if (top)
						value += pi.y;
					if (down)
						value += -pi.y;
					if (left)
						value += pi.x;
					if (right)
						value += -pi.x;

					if (value >= mx)
						if ((pi.x + pi.y) % 2 == (myCC.x + myCC.y) % 2 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								&& !pi.karbonite && !pi.fuel && pi.dist2(myCC) > 2
								&& ((top && pi.y >= myCC.y) || (down && pi.y <= myCC.y) || (left && pi.x >= myCC.x)
										|| (right && pi.x <= myCC.x))) {
							mx = value;
							mxx = pi;
						}

//					value = -pi.distxy(agoal);
//					if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel) {
//						mx = value;
//						mxx = pi;
//					}

				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}

//			if (po.dist2(myCastle) > 16) {
//				dest = mxx;
//				ppo = parent[dest.x][dest.y];
//				path.push(dest);
//				while (parent[ppo.x][ppo.y] != null) {
//					path.push(ppo);
//					ppo = parent[ppo.x][ppo.y];
//				}
//				mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//				return path;
//			}
		}
		if (mxx != null) {
			// mr.log("sis2");
			dest = mxx;
			ppo = dest;
			while (parent[ppo.x][ppo.y] != null) {// ppo != myp
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("dest prophet2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
//		if (mxx != null) {
//			dest = mxx;
//			ppo = parent[dest.x][dest.y];
//			path.push(dest);
//			while (parent[ppo.x][ppo.y] != null) {
//				path.push(ppo);
//				ppo = parent[ppo.x][ppo.y];
//			}
//			mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//			return path;
//		}
		return null;
	}

	public static Stack<Point> nextAssignDefPro() {
		// mr.log("nobugpls");
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		// mr.log("nobugpls1");
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable && (myp != po || dir.number() < 8)
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)
						&& (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								|| (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Castle.number()
										&& mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Church
												.number()))
						&& pi.dist2(myCC) <= 36) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -myCC.dist2(pi) * 100;
					if (top)
						value += pi.y;
					if (down)
						value += -pi.y;
					if (left)
						value += pi.x;
					if (right)
						value += -pi.x;

					if (value >= mx)
						if ((pi.x + pi.y) % 2 == (myCC.x + myCC.y) % 2 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								&& !pi.karbonite && !pi.fuel && pi.dist2(myCC) > 2
								&& ((top && pi.y >= myCC.y) || (down && pi.y <= myCC.y) || (left && pi.x >= myCC.x)
										|| (right && pi.x <= myCC.x))) {
							mx = value;
							mxx = pi;
						}

//					value = -pi.distxy(agoal);
//					if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel) {
//						mx = value;
//						mxx = pi;
//					}

				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}

//			if (po.dist2(myCastle) > 16) {
//				dest = mxx;
//				ppo = parent[dest.x][dest.y];
//				path.push(dest);
//				while (parent[ppo.x][ppo.y] != null) {
//					path.push(ppo);
//					ppo = parent[ppo.x][ppo.y];
//				}
//				mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//				return path;
//			}
		}
		if (mxx != null) {
			// mr.log("sis2");
			dest = mxx;
			ppo = dest;
			while (parent[ppo.x][ppo.y] != null) {// ppo != myp
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("assign dest prophet2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
//		if (mxx != null) {
//			dest = mxx;
//			ppo = parent[dest.x][dest.y];
//			path.push(dest);
//			while (parent[ppo.x][ppo.y] != null) {
//				path.push(ppo);
//				ppo = parent[ppo.x][ppo.y];
//			}
//			mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//			return path;
//		}
		return null;
	}

	public static Stack<Point> nextAssignDefBackPro() {
		// mr.log("nobugpls");
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		// mr.log("nobugpls1");
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable && (myp != po || dir.number() < 8)
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)
						&& (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								|| (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Castle.number()
										&& mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Church
												.number()))
						&& pi.dist2(myCC) <= 36) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -myCC.dist2(pi) * 100;
					if (top)
						value += pi.y;
					if (down)
						value += -pi.y;
					if (left)
						value += pi.x;
					if (right)
						value += -pi.x;

					if (value >= mx)
						if ((pi.x + pi.y) % 2 == (myCC.x + myCC.y) % 2 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								&& !pi.karbonite && !pi.fuel && pi.dist2(myCC) > 2
								&& ((top && pi.y <= myCC.y) || (down && pi.y >= myCC.y) || (left && pi.x <= myCC.x)
										|| (right && pi.x >= myCC.x))) {
							mx = value;
							mxx = pi;
						}

//							value = -pi.distxy(agoal);
//							if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel) {
//								mx = value;
//								mxx = pi;
//							}

				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}

//					if (po.dist2(myCastle) > 16) {
//						dest = mxx;
//						ppo = parent[dest.x][dest.y];
//						path.push(dest);
//						while (parent[ppo.x][ppo.y] != null) {
//							path.push(ppo);
//							ppo = parent[ppo.x][ppo.y];
//						}
//						mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//						mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//						return path;
//					}
		}
		if (mxx != null) {
			// mr.log("sis2");
			dest = mxx;
			ppo = dest;
			while (parent[ppo.x][ppo.y] != null) {// ppo != myp
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("assign dest prophet2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
//				if (mxx != null) {
//					dest = mxx;
//					ppo = parent[dest.x][dest.y];
//					path.push(dest);
//					while (parent[ppo.x][ppo.y] != null) {
//						path.push(ppo);
//						ppo = parent[ppo.x][ppo.y];
//					}
//					mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//					mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//					return path;
//				}
		return null;
	}

	public static Stack<Point> defWithProphet2back() {
		// mr.log("ffs1");
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);
		Stack<Point> path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		Point[][] parent = new Point[size][size];
		boolean[][] marked = new boolean[size][size];
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point po, pi, ppo;
		for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j)
				marked[i][j] = false;
		que.add(myp);
		marked[myp.x][myp.y] = true;
		parent[myp.x][myp.y] = null;
		// do we need this ?
		ins = 0;
		// mr.log("sis1");
		mr.log("OO: " + top + " - " + down + " - " + left + " - " + right);
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				ins++;
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)
						&& (mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								|| (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Castle.number()
										&& mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit != UnitType.Church
												.number()))
						&& pi.dist2(myCC) <= 36) {

					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
					value = -myCC.dist2(pi) * 100;
					if (top)
						value += pi.y;
					if (down)
						value += -pi.y;
					if (left)
						value += pi.x;
					if (right)
						value += -pi.x;

					if (value >= mx)
						if ((pi.x + pi.y) % 2 == (myCC.x + myCC.y) % 2 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
								&& !pi.karbonite && !pi.fuel && pi.dist2(myCC) > 2
								&& ((top && pi.y <= myCC.y) || (down && pi.y >= myCC.y) || (left && pi.x <= myCC.x)
										|| (right && pi.x >= myCC.x))) {
							mx = value;
							mxx = pi;
						}

//							value = -pi.distxy(agoal);
//							if (value >= mx && pi.dist2(myCastle) > 8 && !pi.karbonite && !pi.fuel) {
//								mx = value;
//								mxx = pi;
//							}

				}
				// 10^7/10^3 = 10,000(0)
				// 150
				// 127

			}

//					if (po.dist2(myCastle) > 16) {
//						dest = mxx;
//						ppo = parent[dest.x][dest.y];
//						path.push(dest);
//						while (parent[ppo.x][ppo.y] != null) {
//							path.push(ppo);
//							ppo = parent[ppo.x][ppo.y];
//						}
//						mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//						mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//						return path;
//					}
		}
		if (mxx != null) {
			// mr.log("sis2");
			dest = mxx;
			ppo = dest;
			while (parent[ppo.x][ppo.y] != null) {// ppo != myp
				path.push(ppo);
				ppo = parent[ppo.x][ppo.y];
			}
			mr.log("dest prophet2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
			mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
			return path;
		}
//				if (mxx != null) {
//					dest = mxx;
//					ppo = parent[dest.x][dest.y];
//					path.push(dest);
//					while (parent[ppo.x][ppo.y] != null) {
//						path.push(ppo);
//						ppo = parent[ppo.x][ppo.y];
//					}
//					mr.log("dest(t) INS. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
//					mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
//					return path;
//				}
		return null;
	}

	private static Stack<Point> AStarIsBack9h(Point goal) {
		mr.log("LastAStar:" + ins + " flag: " + flag);
		speed = 4;
		Point po = null, pi;
		pointStack hp = null;
		ins = 0;
		int gg, value = -1;
		Stack<Point> path = new Stack<Point>();

		boolean[][] closedSet = new boolean[size][size];
		boolean[][] openSet = new boolean[size][size];
//		for (int i = 0; i < size; ++i)
//			for (int j = 0; j < size; ++j) {
//				openSet[i][j] = false;
//				closedSet[i][j] = false;
//			}
		openSet[myp.x][myp.y] = true;

		Point[][] parent = new Point[size][size];
		parent[myp.x][myp.y] = null;

		Integer[][] g = new Integer[size][size];// initializeAllToInfinity();
		g[myp.x][myp.y] = 0;

		// HashMap<Integer, HashSet<Point>> fm = new HashMap<Integer, HashSet<Point>>();
		pointStack[] fm = new pointStack[1000];// initializeAllToInfinity();
		MPriorityQueue fq = new MPriorityQueue();
		Integer[][] f = new Integer[size][size];// initializeAllToInfinity();

		value = h9(myp, goal);
		f[myp.x][myp.y] = value;
		hp = new pointStack();
		hp.add(myp);
		// fm.put(value, hp);
		fm[value] = hp;
		fq.add(value);
		int fn = 0;
		int cry = 0, ccry = 0;
		mr.timerLog += " time2: " + (System.currentTimeMillis() - Util.fTime);

		while (fq.size() != 0) { // !openSet.isEmpty()
			// implement RB? :(
			flag = 1;
			fn = fq.poll();
			flag = 11;
			hp = fm[fn];
			// that's bad
			if (hp == null || hp.size() == 0) {
				++ccry;
				continue;
			}
			flag = 12;
			po = hp.pop();
			// it is last queue sucks =))
			flag = 2;
			if (!openSet[po.x][po.y]) {
				++cry;
				continue;
			}

//			if (hp.size() == 1)
//				fm[fn] = null;
			// fm.remove(fn);// why ?
//			else
//				hp.pop();

			flag = 3;
			if (po == goal) {
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);

				dest = po;
				Point ppo = dest;
				while (parent[ppo.x][ppo.y] != null) {
					path.push(ppo);
					ppo = parent[ppo.x][ppo.y];
				}

				mr.log("destA*(Castle) seted. pathsize: " + path.size());
				mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
				return path;
				// break;
			}
			flag = 4;

			openSet[po.x][po.y] = false;
			closedSet[po.x][po.y] = true;

			flag = 5;
			for (Direction9 dir : Direction9.values()) {
				++ins;
				pi = po.dir9To(dir);
				if (pi == null || closedSet[pi.x][pi.y] || !pi.passable
						|| (myp == po && mr.getVisibleRobotMap()[pi.y][pi.x] != 0))
					continue;
				flag = 6;
				gg = g[po.x][po.y] + 1;
				if (!openSet[pi.x][pi.y])
					openSet[pi.x][pi.y] = true;
				else if (gg >= g[pi.x][pi.y])
					continue;
				flag = 7;

				parent[pi.x][pi.y] = po;
				g[pi.x][pi.y] = gg;

				value = gg + h9(pi, goal);

//				if (f.containsKey(pi)) {
//					if (fm.get(f.get(pi)) == null) {
//						mr.log("tt :" + f.get(pi) + " - " + fm.size() + " - " + f.size() + " - " + fq.size());
//						for (Integer poi : fm.keySet())
//							mr.log("canwe : " + poi + " : " + fm.get(poi));
//					}
//					fm.get(f.get(pi)).remove(pi);// why ?
//				}
				flag = 8;

				f[pi.x][pi.y] = value;

				if (fm[value] != null)
					fm[value].add(pi);
				else {
					hp = new pointStack();
					hp.add(pi);
					fm[value] = hp;
				}
				flag = 9;
				fq.add(value);
			}
		}
		mr.log("ins: " + ins + " cry: " + cry + " ccry:" + ccry);
		return null;
	}

	public static Stack<Point> harasCru() {
		Point etc = expandTargetCCC();
		if (etc == null) {
			mr.log("no goal A* :(");
			return null;
		}
		return AStarIsBack9h(revPoint(etc));
	}

	public static Point followCru(Point followTarget) {
		Stack<Point> sp = AStarIsBack9h(followTarget);
		if (sp != null && sp.size() != 0)
			return sp.peek();
		return null;
	}

	public static Point expandTargetCCC() {
		// ArrayList<Point> myexp = new ArrayList<Point>();
		int mn = 1000000, mnn = 1000000, bb = -10000;
		Point be = null;
		int value;
		Point gg = null;
		mr.log("QWER : " + resToDep.size() + " - " + castlei.size() + " - " + castleo.size());
		for (Point po : resToDep) {// can be null lol
			if (po == null)
				continue;

			mn = 1000000;
			for (Point poo : castlei) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			for (Point poo : castleo) {
				if (po.distxy(poo) < mn)
					mn = po.distxy(poo);
			}
			if (po.distxy(myCC) <= mn) { // ==

				boolean valid = true;

				for (Point pp : Castle.doneDep) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : Castle.lookInProg) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				for (Point pp : castlei) {
					if (pp.distxy(po) <= 5) {
						valid = false;
						break;
					}
				}
				if (valid) {// yejuri kash size ro ham miyvordi nmishe ? yani khob maslan az roye inke value
							// on noghte he chande shayad beshe na ?
					if (top) {
						if (po.y > bb) {
							bb = po.y;
							be = po;
						}
					}
					if (down) {
						if (-po.y > bb) {
							bb = -po.y;
							be = po;
						}
					}
					if (left) {
						if (po.x > bb) {
							bb = po.x;
							be = po;
						}
					}
					if (right) {
						if (-po.x > bb) {
							bb = -po.x;
							be = po;
						}
					}
				}
			}
		}
		return be;
//		for (Point kp : karbonP) {
//			mn = 1000000;
//			for (Point po : castlei) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			for (Point po : castleo) {
//				if (kp.distxy(po) < mn)
//					mn = kp.distxy(po);
//			}
//			if (kp.distxy(myp) <= mn)// or myp ?
//			{
//				myexp.add(kp);
//				if (mr.getVisibleRobotMap()[kp.y][kp.x] <= 0) {
//					if (kp.distxy(myp) < mnn) {
//						mnn = kp.distxy(myp);
//						gg = kp;
//					}
//				}
//			}
//		}
//		return gg;
		// return null;
	}

	public static Stack<Point> defWithCru() {
		// mr.log("nobugpls");
		Stack<Point> path = new Stack<Point>();
		int value = -1, mx = -100000;
		Point mxx = null;
		// what about map,set? :(((
		Point pi;
		// do we need this ?
		// mr.log("nobugpls1");
		for (int i = myCC.x - 10; i < myCC.x + 10; ++i)
			for (int j = myCC.y - 10; j < myCC.y + 10; ++j) {
				if (!checkOnMap(i, j))
					continue;
				pi = p[i][j];
				value = -myCC.dist2(pi) * 100;
				if (value >= mx)
					if ((pi.x + pi.y) % 2 == (myCC.x + myCC.y) % 2 && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0
							&& !pi.karbonite && !pi.fuel && pi.dist2(myCC) > 2) {
						mx = value;
						mxx = pi;
					}
			}
		if (mxx != null) {
			path = AStarIsBack9h(mxx);
			// mr.log("sis2");
			dest = mxx;
			if (path != null && path.size() != 0) {
				mr.log("assign dest prophet2. pathsize: " + path.size() + " - " + ins + " - " + dest + " - " + mx);
				mr.timerLog += " time3: " + (System.currentTimeMillis() - Util.fTime);
				return path;
			}
		}
		return null;
	}
}
