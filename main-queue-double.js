const Queue = require('./queue-double');

const peek = function(q) {
    if (!q.first) {
        return null
    }

    return q.first.value;
}

function main() {
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(starTrekQ.first.next.previous)
}

main();