class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {

        if (this.length == 0)
            return undefined;

        let poppedNode = this.tail;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {

        if (this.length == 0) {
            return undefined;
        }

        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else {
            let poppedNode = this.head;
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        
        this.length--;
        return poppedNode;

    }

    unshift(val) {

        let newNode = new Node(val);
        if(this.length == 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
            oldHead.prev = newNode;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(this.length == 0) return undefined;
        if(idx < 0 || idx >= this.length) return undefined;

        let half = Math.floor(this.length/2);
        let currentNode;
        let i;
        if(idx <= half){
            currentNode = this.head;
            i=0;
            while(i != idx){
                currentNode = currentNode.next;
                i++;
            }
        } else{
            currentNode = this.tail;
            i=this.length-1;
            while(i != idx){
                currentNode = currentNode.prev;
                i--;
            }
        }
        return currentNode;
    }

    set(idx, val){
        let node = this.get(idx);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

}

const dll = new DoublyLinkedList();
dll.push(9)
dll.push(10)
dll.push(11)
