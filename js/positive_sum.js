/*
 Original Problem:
 You get an array of numbers, return the sum of all of the positives ones.

 Example [1,-4,7,12] => 1 + 7 + 12 = 20
 */

// Fun fact: shortest problem up to date! (8/11/2016)

function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
}

// Testing
const test = require('./common/test');

test(positiveSum([1,-2,3,4,5]), 13);
