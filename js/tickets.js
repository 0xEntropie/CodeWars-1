/*
 Original Problem
 The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

 Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

 Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

 Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
 */

// TODO End this, last case fails

function tickets(peopleInLine) {
    const price = 25;
    var current = 0;
    
    for (var i = 0; i < peopleInLine.length; i++) {
        var payed = peopleInLine[i];
        var back = payed - price;
        
        // console.log('Now: ' + current + '; Payed ' + payed + ', back ' + back);
        
        if (back > current) {
            // console.log('Had ' + current + ' and needed ' + back);
            return 'NO';
        }
        
        current += (price - back);
    }
    
    return 'YES';
}

// Testing
const test = require('./common/test');

test(tickets([25, 25, 50, 50]), 'YES');
test(tickets([25, 100]), 'NO');
test(tickets([25,25,25,100,25,50,25,100,25,25,50,100,25,50,25,100,100,100]), 'NO');
// test(tickets([25,50,25,100,25,25,25,100,25,25,25,100,25,50,25,100]), 'YES');