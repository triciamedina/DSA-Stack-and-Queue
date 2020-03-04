// input: [34, 3, 31, 98, 92, 23]
// output: : [3, 23, 31, 34, 92, 98]    

const Stack = require('./stack')

const sort = function(stack) {
    let tempStack = new Stack();

    while (stack.top) {
        let node = stack.pop();

        while (tempStack.top && (node > tempStack.top.data)) {
            let smallNode = tempStack.pop();
            stack.push(smallNode);
        } 

        tempStack.push(node);
    }
    return tempStack;
}

let sortMe = new Stack();

sortMe.push(34);
sortMe.push(3);
sortMe.push(31);
sortMe.push(98);
sortMe.push(92);
sortMe.push(23);

console.log(sort(sortMe));