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

    dfsR(vertex){
        const nodes = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vert){
            if(!vert) return null;
            visited[vert] = true;
            nodes.push(vert);
            adjacencyList[vert].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
        })(vertex);

        return nodes;
    }

    dfsI(vertex){
        const stack = [vertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[vertex] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }

        return result;
    }

    bfs(vertex){
        const queue = [vertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[vertex] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(sibling => {
                if(!visited[sibling]){
                    visited[sibling] = true;
                    queue.push(sibling);
                }
            })
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

console.log(graph.adjacencyList)
console.log(graph.bfs("A"));