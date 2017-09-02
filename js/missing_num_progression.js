/*
Original problem:
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing (list) , list will always be atleast 3 numbers. The missing term will never be the first or last one.

Example :

findMissing([1,3,5,9,11]) == 7
PS: This is a sample question of the facebook engineer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!
*/

const findMissing = list => {
  let diff = list[1] - list[0];

  for (let i = 1; i < list.length; i++) {
    const newDiff = list[i] - list[i - 1];

    if (Math.abs(newDiff) < Math.abs(diff)) {
      diff = newDiff;
    }
  }

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== diff) {
      return list[i] + diff;
    }
  }
};

// Testing
const test = require('./common/test');

test(findMissing([1, 3, 5, 9, 11]), 7);

test(findMissing([2, 4, 8]), 6);
test(findMissing([1, 5, 7]), 3);

test(findMissing([1, -1, -5]), -3);
