class _Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        // if queue is empty, make node the first node
        if (this.first === null) {
            this.first = node;
        }

        // if there are at least two items
        if (this.last) {
            node.previous = this.last;
            this.last.next = node;
        }

        // make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }

       // save first node
       const node = this.first;

       // set first node to next node
       this.first = this.first.next;
       this.first.previous = null;

        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}

module.exports = Queue;