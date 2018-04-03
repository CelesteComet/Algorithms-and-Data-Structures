"use strict";
exports.__esModule = true;
var Graph_1 = require("./Graph");
var Paths = /** @class */ (function () {
    function Paths(graph, startVertex) {
        this.graph = graph;
        this.startVertex = startVertex;
        this.marked = new Array();
        this.edgeTo = new Array();
        // fill marked and edgeTo
        for (var i = 0; i < this.graph.numberOfVertices; i++) {
            this.marked.push(false);
            this.edgeTo.push(null);
        }
    }
    Paths.prototype.hasPathTo = function (vertex) {
        return this.marked[vertex];
    };
    Paths.prototype.dfs = function (vertex) {
        this.marked[vertex] = true;
        var adjacentVertices = this.graph.getAdjacentVertices(vertex);
        for (var i = 0; i < adjacentVertices.length; i++) {
            if (!this.marked[adjacentVertices[i]]) {
                this.dfs(adjacentVertices[i]);
                this.edgeTo[adjacentVertices[i]] = vertex;
            }
        }
    };
    Paths.prototype.getPathTo = function (vertex) {
        if (this.hasPathTo[vertex] === null) {
            return null;
        }
        var stack = new Array();
        var currentVertex = this.edgeTo[vertex];
        while (currentVertex !== null) {
            stack.push(currentVertex);
            currentVertex = this.edgeTo[currentVertex];
        }
        return stack;
    };
    return Paths;
}());
var mGraph = new Graph_1.Graph(13);
mGraph.addEdge(0, 1);
mGraph.addEdge(0, 2);
mGraph.addEdge(0, 6);
mGraph.addEdge(0, 5);
mGraph.addEdge(5, 3);
mGraph.addEdge(5, 4);
mGraph.addEdge(3, 4);
mGraph.addEdge(7, 8);
mGraph.addEdge(9, 11);
mGraph.addEdge(9, 10);
mGraph.addEdge(9, 12);
mGraph.addEdge(11, 12);
var mPath = new Paths(mGraph, 0);
mPath.dfs(0);
console.log(mPath.getPathTo(4));
console.log(mGraph.adjencyList);
