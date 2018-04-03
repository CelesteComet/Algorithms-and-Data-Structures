import { Graph } from './Graph';

class Paths {

  graph: any;
  startVertex: number;
  marked: Array<boolean>;
  edgeTo: Array<number>;

  constructor(graph: any, startVertex: number) {
    this.graph = graph;
    this.startVertex = startVertex;
    this.marked = new Array<boolean>();
    this.edgeTo = new Array<number>();

    // fill marked and edgeTo
    for (let i = 0; i < this.graph.numberOfVertices; i++) {
      this.marked.push(false);
      this.edgeTo.push(null);
    }

  }

  hasPathTo(vertex: number): boolean {
    return this.marked[vertex];
  }

  dfs(vertex: number) {
    this.marked[vertex] = true;
    let adjacentVertices: Array<number> = this.graph.getAdjacentVertices(vertex);
    for (let i = 0; i < adjacentVertices.length; i++) {
      if (!this.marked[adjacentVertices[i]]) {
        this.dfs(adjacentVertices[i]);
        this.edgeTo[adjacentVertices[i]] = vertex;
      }
    }
  }

  getPathTo(vertex: number) {
    if (this.hasPathTo[vertex] === null) { return null; }

    let stack: Array<number> = new Array<number>();
    let currentVertex = this.edgeTo[vertex];
    while (currentVertex !== null) {
      stack.push(currentVertex);
      currentVertex = this.edgeTo[currentVertex];
    }
    return stack;
  }
}

let mGraph: Graph = new Graph(13);
mGraph.addEdge(0,1);
mGraph.addEdge(0,2);
mGraph.addEdge(0,6);
mGraph.addEdge(0,5);
mGraph.addEdge(5,3);
mGraph.addEdge(5,4);
mGraph.addEdge(3,4);
mGraph.addEdge(7,8);
mGraph.addEdge(9,11);
mGraph.addEdge(9,10);
mGraph.addEdge(9,12);
mGraph.addEdge(11,12);
let mPath: Paths = new Paths(mGraph, 0);
mPath.dfs(0);
console.log(mPath.getPathTo(4))

console.log(mGraph.adjencyList);








