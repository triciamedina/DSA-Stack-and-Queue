const Queue = require('./queue-single');

const peek = function(q) {
    if (!q.first) {
        return null
    }

    return q.first.value;
}

const isEmpty = function(q) {
    if (!q.first) {
        return true;
    }

    return false;
}

const display = function(q) {
    if (!q.first) {
        return null
    }

    let node = q.first;
    while (node.next) {
        console.log(node.value)
        node = node.next;
    }

    console.log(node.value)
}

function main() {
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(display(starTrekQ))
}

main();