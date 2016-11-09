/*
 Original Problem:
 Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a plane pyramid built of numbers, like this one here:

 /3/
 \7\ 4 
 2 \4\ 6 
 8 5 \9\ 3
 Here comes the task...

 Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

 Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' longest 'slide down'. For example,

 By the way...

 My tests include some extraordinarily high pyramides so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

 (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.
 */
function longestSlideDown(pyramid) {
    var previous = 0;
    var sum = pyramid[0][0];
    
    for (var height = 1; height < pyramid.length; height++) {
        var largest = previous;
        
        for (var i = previous; i <= (previous + 1); i++) {
            if (i < 0 || i >= pyramid[height].length) {
                continue;
            }

            var num = pyramid[height][i];

            if (num > pyramid[height][largest]) {
                largest = i;
            }
        }
        
        previous = largest;
        sum += pyramid[height][largest];
    }
    
    return sum;
}

// Testing
const test = require('./common/test');

/*test(longestSlideDown([
    [3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]
]), 23);*/

test(longestSlideDown([
    [75],
    [95, 64], // 95
    [17, 47, 82], // 47
    [18, 35, 87, 10], // 87
    [20,  4, 82, 47, 65], // 82
    [19,  1, 23, 75,  3, 34], // 75
    [88,  2, 77, 73,  7, 63, 67], // 73
    [99, 65,  4, 28,  6, 16, 70, 92], // 28
    [41, 41, 26, 56, 83, 40, 80, 70, 33], // 83
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29], // 47
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14], // 43
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57], // 73
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48], // 91
    [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31], // 67
    [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23] // 98
]), 1074);