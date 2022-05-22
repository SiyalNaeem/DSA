class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,55,18,27,12,33];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(66);
