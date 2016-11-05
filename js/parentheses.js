/*
 Original Problem:
 Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

 Examples: 
 validParentheses( "()" ) => returns true 
 validParentheses( ")(()))" ) => returns false 
 validParentheses( "(" ) => returns false 
 validParentheses( "(())((()())())" ) => returns true 

 All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
 */

function validParentheses(parens) {
    var parts = parens.split('');
    var opened = 0;
    
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        
        switch (part) {
            case '(':
                opened++;
                break;
            case ')':
                if (opened-- == 0) {
                    return false;
                }
                
                break;
            default:
                return false;
        }
    }
    
    return opened == 0;
}

console.log(validParentheses('()')); // True
console.log(validParentheses(')(()))')); // False
console.log(validParentheses('(')); // False
console.log(validParentheses('(())((()())())')); // True
console.log(validParentheses('))(('));