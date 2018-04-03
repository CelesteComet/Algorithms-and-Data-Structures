"use strict";
exports.__esModule = true;
var Graph = /** @class */ (function () {
    /**
    * Represents a graph.
    * @constructor
    * @param {number} numberOfVertices - number of vertices on graph
    */
    function Graph(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjencyList = new Array();
        for (var i = 0; i < this.numberOfVertices; i++) {
            this.adjencyList[i] = new Array();
        }
        // let adjencyList = Array.from({length: this.numberOfVertices}, (v,i) => new Array);
    }
    /**
    * Creates an edge between vertices v and w
    * @param {number} v - vertex v
    * @param {number} y - vertex y
    */
    Graph.prototype.addEdge = function (v, w) {
        this.adjencyList[v].push(w);
        this.adjencyList[w].push(v);
    };
    /**
    * Gets the graphs adjacent vertices
    * @param {number} v - index of vertex
    */
    Graph.prototype.getAdjacentVertices = function (v) {
        return this.adjencyList[v];
    };
    return Graph;
}());
exports.Graph = Graph;
