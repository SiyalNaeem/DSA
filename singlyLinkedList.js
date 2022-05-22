class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0){
            return undefined;
        }
        let currentNode = this.head;
        let pre = currentNode;
        while(currentNode.next != null){
            pre = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return pre;
    }

    shift(){
        if(this.length == 0){
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        
        if(this.length == 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let node = new Node(val);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length || this.length == 0){
            return undefined;
        }

        let currentNode = this.head;
        let i = 0;
        while(i !== idx){
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;

    }

    set(idx, val){
        if(idx < 0 || idx >= this.length){
            return undefined;
        }
        
        let currentNode = this.get(idx);
        if(currentNode){
            currentNode.val = val;
            return true;
        }

        return false;
    }

    insert(idx, val){
        if(idx < 0 || idx >= this.length){
            return false;
        }

        if(idx == this.length-1) {
            this.push(val);
            return true;
        }

        if(idx == 0){
            this.unshift(val);
            return true;
        }

        let currentNode = this.get(idx-1);
        let temp = currentNode.next;

        let newNode = new Node(val);
        temp.next = newNode;
        newNode.next = currentNode;
        
        this.length++;
        
        return true;
        
    }

    remove(idx){
        console.log(this.length)
        if(idx < 0 || idx >= this.length){
            return undefined;
        }

        if(idx == this.length-1) {
            this.pop();
        }
    // debugger
        if(idx == 0){
            this.shift();
            return;
        }

        let currentNode = this.get(idx-1);
        let temp = currentNode?.next;

        currentNode.next = temp?.next;

        
        this.length--;
        
        return temp;
        
    }
}


const list = new SinglyLinkedList();
list.push(3)
list.push(4)
list.push(5)
list.push(6)
// list.remove(1);