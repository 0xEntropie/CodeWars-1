/*
Original Problem:
Ronald's uncle left him 3 fertile chickens in his will. When life gives you a chickens, you start a business selling chicken eggs which is exactly what Ronald decided to do.

Each chicken lays 300 eggs in its first year. However, each chicken's egg production decreases by 20% every following year (rounded down if value is a decimal) until when it dies (after laying its quota of eggs obviously!).

Ronald is also an astute businessman. For more eggs, you need more chickens! And so, every year, he buys 3 new chickens.

Your Task:

For a given year, and life span of chicken span, calculate how many eggs Ronald's chickens will lay him that year, whereby year=1 is when Ronald first got his inheritance and span>0.

If year=0, make sure to return "No chickens yet!".

Note:
1. All chickens have the same life span regardless of when they are bought.
2. Let's assume all calculations are made at the end of the year so don't bother taking eggs laid per month into consideration.

3. Each chicken's egg production goes down by 20% each year, NOT the total number of eggs produced by each 'batch' of chickens. While this might appear to be the same thing, it doesn't once non-integers come into play so take care that this is reflected in your kata!

*/

// https://www.codewars.com/kata/how-many-eggs/train/javascript

function egged(year, span) {
  if (!year) {
    return 'No chickens yet!';
  }

  var chickens = [300, 300, 300];
  var eggs = 0;

  for (var y = 0; y < year; y++) {
    for (var i = 0; i < chickens.length; i++) {
      var chick = chickens[i] = Math.floor(chickens[i] * .8);

      eggs += chick;
    
      console.log('Changed ' + i + ' to ' + chick);
    }

    if (y % span === 0) {
      chickens.splice(0, 3);
      console.log('Removed 3 eggs @ ' + y);
    }

    chickens.push(300, 300, 300);

    console.log(chickens);
    console.log('y: ' + y + ' c:' + chickens.length);
  }

  return eggs;
}

//console.log(egged(0, 5));
console.log(egged(2, 1) + ' -> 900');
//console.log(red(1, 1) + ' -> ');
//console.log(egged(4, 8) + ' -> 2655');
//console.log(red(74, 10));