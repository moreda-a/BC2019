package bc19;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.TreeMap;

public class Nav extends Util {
	private static Point agoal = null;
	private static int ins = 0;

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
	public static void destSetPilgrimToResource() {
		path = new Stack<Point>();
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
		// do we need this ?
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction4 dir : Direction4.values()) {
				pi = po.dir4To(dir);
				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
					if ((pi.karbonite || pi.fuel) && mr.getVisibleRobotMap()[pi.y][pi.x] <= 0) {
						dest = pi;
						ppo = po;
						path.push(pi);
						while (parent[ppo.x][ppo.y] != null) {
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("dest(t) seted. pathsize: " + path.size());
						break outerloop;
					}
					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
				}
			}
		}
		// mr.log("dest not found.");
	}

	public static void backResourceToCC() {
		mr.log("backRes");
		path = new Stack<Point>();
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
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
//					if (mr.getVisibleRobotMap()[pi.y][pi.x] > 0)
//						mr.log("id " + mr.getVisibleRobotMap()[pi.y][pi.x] + " units : "
//								+ mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit + " dir:" + dir.number());
					if (mr.getVisibleRobotMap()[pi.y][pi.x] > 0
							&& (mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit == UnitType.Castle.number()
									|| mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit == UnitType.Church
											.number())) {
						if (dir.number() < 8) {
							dest = po;
							ppo = po;
							while (parent[ppo.x][ppo.y] != null) {
								path.push(ppo);
								ppo = parent[ppo.x][ppo.y];
							}
							mr.log("dest(r) seted. pathsize: " + path.size());
							qq = 0 - qq;
							break outerloop;
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

	public static void setTargetEnemyCastle() {
		calcEnemyCastle();
		mr.log("stec");
		path = new Stack<Point>();
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
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
//					if (mr.getVisibleRobotMap()[pi.y][pi.x] > 0)
//						mr.log("id " + mr.getVisibleRobotMap()[pi.y][pi.x] + " units : "
//								+ mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit + " dir:" + dir.number());
					if (pi.ecastle) {
						dest = pi;
						ppo = po;
						path.push(pi);
						while (parent[ppo.x][ppo.y] != null) {
							path.push(ppo);
							ppo = parent[ppo.x][ppo.y];
						}
						mr.log("dest(p) seted. pathsize: " + path.size());
						qq = 0 - qq;
						break outerloop;

					}
					qq++;
					que.add(pi);
					marked[pi.x][pi.y] = true;
					parent[pi.x][pi.y] = po;
				}
			}
		}
	}

	private static void calcEnemyCastle() {
		// TODO make it faster ?:D O(1) probably
		boolean vertical = true;
		boolean horizontal = true;
		// don't need to check for resource low resource on map
		// problem btw same passable ...
		// btw same map
		outter: for (int i = 0; i < size; ++i)
			for (int j = 0; j < size; ++j) {
				if (p[i][j].passable != p[i][size - j - 1].passable) {
					vertical = false;
					break outter;
				}
				if (p[i][j].passable != p[size - i - 1][j].passable) {
					horizontal = false;
					break outter;
				}
			}
		for (Robot r : mr.getVisibleRobots()) {
			if (r.unit == UnitType.Castle.number()) {
				if (vertical) {
					p[r.x][size - r.y - 1].ecastle = true;
					agoal = p[r.x][size - r.y - 1];
				}
				if (horizontal) {
					p[size - r.x - 1][r.y].ecastle = true;
					agoal = p[size - r.x - 1][r.y];
				}
			}
		}
		if (vertical && horizontal)
			mr.log("FuckVFuckH :((");

	}

	// A* baby
	// f(n) = g(n) + h(n)
	public static void AStar() {
		mr.log("AStar:" + ins);
		ins = 0;
		Point po = null, pi;
		int gg, value = -1;
		HashSet<Point> hp = null;

		calcEnemyCastle();
		if (agoal == null) {
			mr.log("no goal A* :(");
			return;
		}

		HashSet<Point> closedSet = new HashSet<Point>();
		HashSet<Point> openSet = new HashSet<Point>();
		openSet.add(myp);

		HashMap<Point, Point> parent = new HashMap<Point, Point>();
		parent.put(myp, null);
		HashMap<Point, Integer> g = new HashMap<Point, Integer>();// initializeAllToInfinity();
		g.put(myp, 0);

		//MTreeMap<Integer, HashSet<Point>> fm = new MTreeMap<Integer, HashSet<Point>>();// initializeAllToInfinity();
		HashMap<Point, Integer> f = new HashMap<Point, Integer>();// initializeAllToInfinity();

		// For the first node, that value is completely heuristic.
		// fScore[start] := heuristic_cost_estimate(sta rt, goal)
		value = h(myp);
		f.put(myp, value);
		hp = new HashSet<Point>();
		hp.add(myp);
//		fm.put(value, hp);
//
//		while (!openSet.isEmpty()) {
//
//			hp = fm.firstEntry().getValue();
//			po = hp.iterator().next();
//			if (hp.size() == 1)
//				fm.pollFirstEntry();
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
//				break;
//			}
//			openSet.remove(po);
//			closedSet.add(po);
//
//			for (Direction9 dir : Direction9.values()) {
//				++ins;
//				pi = po.dir9To(dir);
//				if (pi == null || closedSet.contains(pi))
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
//				value = gg + h(pi);
//				if (f.containsKey(pi))
//					fm.get(f.get(pi)).remove(pi);
//
//				f.put(pi, value);
//				if (fm.containsKey(value))
//					fm.get(value).add(pi);
//				else {
//					hp = new HashSet<Point>();
//					hp.add(pi);
//					fm.put(value, hp);
//				}
//
//			}
//		}
		mr.log("ins: " + ins);

	}

//	public static void AStar() {
//		mr.log("AStar:" + ins);
//		ins = 0;
//		Point po = null, pi;
//		int gg, value = -1;
//		HashSet<Point> hp = null;
//
//		calcEnemyCastle();
//		if (agoal == null) {
//			mr.log("no goal A* :(");
//			return;
//		}
//
//		HashSet<Point> closedSet = new HashSet<Point>();
//		HashSet<Point> openSet = new HashSet<Point>();
//		openSet.add(myp);
//
//		HashMap<Point, Point> parent = new HashMap<Point, Point>();
//		parent.put(myp, null);
//		HashMap<Point, Integer> g = new HashMap<Point, Integer>();// initializeAllToInfinity();
//		g.put(myp, 0);
//
//		HashMap<Integer, HashSet<Point>> fm = new HashMap<Integer, HashSet<Point>>();// initializeAllToInfinity();
//		PriorityQueue<Integer> fq = new PriorityQueue<Integer>();
//		HashMap<Point, Integer> f = new HashMap<Point, Integer>();// initializeAllToInfinity();
//
//		// For the first node, that value is completely heuristic.
//		// fScore[start] := heuristic_cost_estimate(sta rt, goal)
//		value = h(myp);
//		f.put(myp, value);
//		hp = new HashSet<Point>();
//		hp.add(myp);
//		fm.put(value, hp);
//		fq.add(value);
//		int fn = 0;
//		int cry = 0;
//		while (!openSet.isEmpty()) {
//
//			// mr.log("hello" + fm + " - " + fm.keySet() + " - " + fm.firstKey());
//			// (shit ERROR)fm.firstEntry is not function
//			// nn treeset, treemap suck
//
//			// hp = fm.firstEntry().getValue();
//			// po = hp.iterator().next();
//			// implement RB? :(
//			fn = fq.poll();
//			hp = fm.get(fn);
//			po = hp.iterator().next();
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
//				break;
//			}
//			openSet.remove(po);
//			closedSet.add(po);
//
//			for (Direction9 dir : Direction9.values()) {
//				++ins;
//				pi = po.dir9To(dir);
//				if (pi == null || closedSet.contains(pi))
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
//				value = gg + h(pi);
//				if (f.containsKey(pi))
//					fm.get(f.get(pi)).remove(pi);
//
//				f.put(pi, value);
//				if (fm.containsKey(value))
//					fm.get(value).add(pi);
//				else {
//					hp = new HashSet<Point>();
//					hp.add(pi);
//					fm.put(value, hp);
//				}
//				fq.add(value);
//			}
//		}
//		mr.log("ins: " + ins + "cry: " + cry);
//
//	}
	private static int h(Point pi) {
		return (int) Math.ceil(agoal.dist2(pi) / 9);
	}

	public static void setTargetEnemyCastleForCrusader() {
		calcEnemyCastle();
		mr.log("stecfc");
		path = new Stack<Point>();
		Queue<Point> que = new LinkedList<Point>();
		// Point[][] parent = new Point[size][size];
		// boolean[][] marked = new boolean[size][size];
		// HashMap<Integer, UndirectedGraphNode> marked = new HashMap(); //store visited
		// nodes
		// HashSet<Point> marked = new HashSet<Point>();
		HashMap<Point, Point> parent = new HashMap<Point, Point>();
		// what about map,set? :(((
		Point po, pi, ppo;
//		for (int i = 0; i < size; ++i)
//			for (int j = 0; j < size; ++j)
//				marked[i][j] = false;
		que.add(myp);
		// marked[myp.x][myp.y] = true;
		// marked.add(myp);
		parent.put(myp, null);
		int qq = 0;
		// do we need this ?
		outerloop: while (!que.isEmpty()) {
			po = que.poll();
			for (Direction9 dir : Direction9.values()) {
				pi = po.dir9To(dir);
				if (pi != null && !parent.containsKey(pi) && p[pi.x][pi.y].passable
						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
					parent.put(pi, po);
					que.add(pi);
					qq++;
//				if (pi != null && !marked[pi.x][pi.y] && p[pi.x][pi.y].passable
//						&& (myp != po || mr.getVisibleRobotMap()[pi.y][pi.x] <= 0)) {
//					if (mr.getVisibleRobotMap()[pi.y][pi.x] > 0)
//						mr.log("id " + mr.getVisibleRobotMap()[pi.y][pi.x] + " units : "
//								+ mr.getRobot(mr.getVisibleRobotMap()[pi.y][pi.x]).unit + " dir:" + dir.number());
					if (pi.ecastle) {
						dest = pi;
						ppo = pi;
						while (parent.get(ppo) != null) {
							path.push(ppo);
							ppo = parent.get(ppo);
						}
						mr.log("dest(p) seted. pathsize: " + path.size());
						qq = 0 - qq;
						break outerloop;

					}
					// marked[pi.x][pi.y] = true;
					// parent[pi.x][pi.y] = po;
				}
			}
		}
	}
}
