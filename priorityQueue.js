/**Implemented using MinBinaryHeap */

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        this._bubbleUp();
        return this;
    }

    _bubbleUp(){
        let index = this.values.length - 1;
        let element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this._sinkDown();
        }
        return min;
    }

    _sinkDown() {
        let index = 0;
        const length = this.values.length;
        let element = this.values[0];
        while (true) {
            let leftChildIdx = (2 * index) + 1;
            let rightChildIdx = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap == null && rightChild.priority < element.priority) || (swap != null && leftChild.priority > rightChild.priority)) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

    }

}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(8, 1);
priorityQueue.enqueue(3, 2);
priorityQueue.dequeue(3, 2);
console.log(priorityQueue)