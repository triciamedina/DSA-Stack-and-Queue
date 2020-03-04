const Stack = require('./stack');

class Queue {
    constructor() {
        this.in = new Stack();
        this.out = new Stack();
    }

    enqueue(data) {
        while (this.out.top) {
            let node = this.out.pop();
            this.in.push(node);
        }
        
        this.in.push(data);
    }

    dequeue() {
       while (this.in.top) {
           let node = this.in.pop();
           this.out.push(node);
       }

       return this.out.pop();
   }
}

function main() {
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(starTrekQ.dequeue(), starTrekQ.dequeue())
}

main();