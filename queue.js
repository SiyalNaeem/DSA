class Node{
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let node = new Node(val);
        if(this.size == 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue(){
        
        if(this.size == 0) return null;
        let temp = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        
        this.size--;
        return temp.val;
        
    }

    
}

const queue = new Queue();
queue.enqueue(8)