class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let currentNode = this.root;
            while (true) {
                if (val == currentNode.val)
                    return undefined;
                if (val < currentNode.val) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(val) {
        if (!this.root)
            return null;
        let currentNode = this.root;
        while (currentNode) {
            if (val == currentNode.val) {
                return currentNode;
            } else if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    traverse(node) {
        const tree = {
            val: node.val
        };
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }

    breadthFirstSearch() {
        const data = []
          , queue = [];
        let node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        return data;
    }

    dfsPreOrder(){
        const data = [];
        
        function traverseDFS(node){
            data.push(node.val);
            if(node.left) traverseDFS(node.left);
            if(node.right) traverseDFS(node.right);
        }
        traverseDFS(this.root);
        return data;
    }

    dfsPostOrder(){
        const data = [];
        function traverseDFS(node){
            if(node.left) traverseDFS(node.left);
            if(node.right) traverseDFS(node.right);
            data.push(node.val);
        }
        traverseDFS(this.root);
        return data;
    }

    dfsInOrder(){
        const data = [];
        function traverseDFS(node){
            if(node.left) traverseDFS(node.left);
            data.push(node.val);
            if(node.right) traverseDFS(node.right);
        }
        traverseDFS(this.root);
        return data;
    }

}


const bts = new BTS();
bts.insert(10)
bts.insert(6)
bts.insert(3)
bts.insert(8)
bts.insert(15)
bts.insert(20)
bts.traverse(bts.root)
