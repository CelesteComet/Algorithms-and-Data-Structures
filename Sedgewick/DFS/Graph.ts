export class Graph {

  numberOfVertices: number;
  adjencyList: Array<Array<number>>;

  /**
  * Represents a graph.
  * @constructor
  * @param {number} numberOfVertices - number of vertices on graph 
  */
  constructor(numberOfVertices: number) {
    this.numberOfVertices = numberOfVertices;
    this.adjencyList = new Array<Array<number>>();
    for(let i = 0; i < this.numberOfVertices; i++) {
      this.adjencyList[i] = new Array<number>();
    }
    // let adjencyList = Array.from({length: this.numberOfVertices}, (v,i) => new Array);
  }

  /**
  * Creates an edge between vertices v and w
  * @param {number} v - vertex v
  * @param {number} y - vertex y
  */
  addEdge(v: number, w: number): void {
    this.adjencyList[v].push(w);
    this.adjencyList[w].push(v);
  }

  /**
  * Gets the graphs adjacent vertices
  * @param {number} v - index of vertex
  */
  getAdjacentVertices(v: number): Array<number> {
    return this.adjencyList[v];
  }
}