/*
 Original Problem:
 Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

 Example:

 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 // returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
 // returns 'Bart & Lisa'

 list([ {name: 'Bart'} ])
 // returns 'Bart'

 list([])
 // returns ''
 Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/
function list(names) {
    var result = '';

    if (names.length <= 1) {
        return names.length == 0 ? '' : names[0]['name'];
    }
    
    for (var i = 0; i < names.length; i++) {
        result += names[i]['name'];

        if (i < names.length - 2) {
            result += ', ';
        } else if (i == names.length - 2) {
            result += ' & ';
        }
    }
    
    return result;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));