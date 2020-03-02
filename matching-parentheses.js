const Stack = require('./stack')

function matchingParentheses(s) {
    let stringStack = new Stack();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stringStack.push({ char: s[i], position: [i] })
        }

        if (s[i] === ')') {
            if (stringStack.top && (stringStack.top.data.char === '(')) {
                stringStack.pop()
            } else {
                return `You are missing a "(" for the "(" located at position ${i}`;
            }
        }
    }

    if (!stringStack.top) {
        return true;
    }

    return `you are missing a ")" for the "(" located at position ${stringStack.top.data.position}`;
}

// True, true, false, false
console.log(matchingParentheses("(1 + 2)"));
console.log(matchingParentheses("(1 + 2) * (3 + 4)"));
console.log(matchingParentheses("(1 + 2) * 3 + 4)"));
console.log(matchingParentheses("(1 + 2 * (3 + 4)"));