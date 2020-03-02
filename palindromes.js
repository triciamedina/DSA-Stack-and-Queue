const Stack = require('./stack')

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let stringStack = new Stack();

    for (let i = 0; i < s.length; i++) {
        stringStack.push(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        if (stringStack.pop() !== s[i]) {
            return false
        }
    }

    return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));