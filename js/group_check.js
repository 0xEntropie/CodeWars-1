/*
 Original Problem:
 In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

 Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

 ({})
 [[]()]
 [{()}]
 The next are done incorrectly

 {(})
 ([]
 [])
 A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

 Your function will take an input string that may contain any of the symbols "()" "{}" or "[]" to create groups.

 It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.
 */
function groupCheck(s) {
    var expecting = [];
    
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    var inverseMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (var i = 0; i < s.length; i++) {
        var char = s.charAt(i);
        var opening = map[char];
        
        if (opening) {
            expecting.push(char);
            continue;
        }
        
        var open = inverseMap[char];
        
        if (expecting[expecting.length - 1] !== open) {
            return false;
        } else {
            expecting.pop();
        }
    }
    
    return expecting.length <= 0;
}

console.log(groupCheck('({})'));
console.log(groupCheck('[[]()]'));
console.log(groupCheck('[{()}]'));

console.log(groupCheck('{(})'));
console.log(groupCheck('([]'));
console.log(groupCheck('[])'));