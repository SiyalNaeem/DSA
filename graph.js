class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if(!this.adjacencyList[name]){
            this.adjacencyList[name] = [];
        }
    }

    addEdge(from, to){
        if(this.adjacencyList[from]){
            this.adjacencyList[from].push(to);
        }
        if(this.adjacencyList[to]){
            this.adjacencyList[to].push(from);
        }
    }

    removeEdge(from, to){
        if(this.adjacencyList[from]){
            this.adjacencyList[from] = this.adjacencyList[from].filter(ver => ver !== to);
        }

        if(this.adjacencyList[to]){
            this.adjacencyList[to] = this.adjacencyList[to].filter(ver => ver !== from);
        }
    }

    removeVertex(name){
        if(this.adjacencyList[name]){
            this.adjacencyList[name].forEach(edge => {
                this.removeEdge(name, edge);
            });

            delete this.adjacencyList[name];
        }
    }
}

const graph = new Graph();
graph.addVertex("tokyo");
graph.addVertex("Pakistan");
graph.addVertex("America");
graph.addEdge("tokyo", "Pakistan")
graph.addEdge("America", "Pakistan")
// graph.removeEdge("America", "Pakistan")
graph.removeVertex("America")
console.log(graph.adjacencyList)