const Stack = require('./stack')

// allows you to look at the top of the stack without removing it
const peek = function(stack) {
    return stack.top.data
}

// allows you to check if the stack is empty or not
const isEmpty = function(stack) {
    if (!stack.top) {
        return true;
    }

    return false;
}

// to display the stack - what is the 1st item in your stack?
const display = function(stack) {
    // if stack is empty return null
    if (!stack.top) {
        return null;
    }

    let list = '';
    let currentNode;
    let nextNode = stack.top;

    while (nextNode) {
        currentNode = nextNode;
        nextNode = currentNode.next;
        list += `${currentNode.data}\n`;
    }

    return list;
}

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    starTrek.pop();
    starTrek.pop();
    
    console.log(display(starTrek))
}

main();