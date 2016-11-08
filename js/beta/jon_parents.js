/*
 Original Problem (Beta):
 Most of us love Game of Thrones, but if you have watched GOT or not, you can do the kata anyway. Let's help Jon Snow to meet his original parents.

 Write a function that will receive 2 parameters: dad and mom. If the 2 Jon Snow's parents are correct it will return "Jon Snow you deserve the throne" but if is not correct, it will return "You know nothing, Jon Snow".

 Note: the Jon Snow dad is Rhaegar Targaryen and his mother is Lyanna Stark.

 Example:

 jonSnowParents("Ned Stark", "Cersei Lannister") // return "You know nothing, Jon Snow"

 jonSnowParents("Rhaegar Targaryen", "Lyanna Stark") // return "Jon Snow you deserve the throne"

 jonSnowParents("Robert Baratheon", "Catelyn Stark") // return "You know nothing, Jon Snow"
 */
function jonSnowParents(dad, mom) {
    return dad === 'Rhaegar Targaryen' && mom === 'Lyanna Stark' ? 'Jon Snow you deserve the throne' : 'You know nothing, Jon Snow';
}

// Testing (not really needed)
const test = require('../common/test');

test(jonSnowParents('Rhaegar Targaryen', 'Lyanna Stark'), 'Jon Snow you deserve the throne');
test(jonSnowParents('Jon Doe', 'Emma Watson'), 'You know nothing, Jon Snow');