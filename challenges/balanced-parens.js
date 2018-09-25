/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let stack = [];
    
    for (let i  = 0; i < input.length; i++) {
        let s = input.charAt(i);
        let test = stack[stack.length - 1];
        switch (s) {
            case '[':
            case '(':
            case '{':
                stack.push(s);
                break;
            case ']':
                if (test != '[')
                    return false;
                stack.pop();
                break;
            case ')':
                if (test != '(')
                    return false;
                stack.pop();
                break;
            case '}':
                if (test != '{')
                    return false;
                stack.pop();
                break;
        }
    }
    return stack.length == 0;
}
console.log(balancedParens('('));
console.log(balancedParens('()'));
console.log(balancedParens(')('));
console.log(balancedParens('(())'));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[({})]'));
console.log(balancedParens('[](){}'));
console.log(balancedParens('[(()){}]'));
console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
module.exports = balancedParens;
