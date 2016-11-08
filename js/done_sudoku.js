/*
 Original Problem:
 See https://www.codewars.com/kata/did-i-finish-my-sudoku/train/javascript
 (Contains images)
 */

function doneOrNot(board) {
    // Vertical check
    for (var y = 0; y < board.length; y++) {
        var used = [];
        
        for (var x = 0; x < board[y].length; x++) {
            var num = board[y][x];
            
            if (used.indexOf(num) != -1) {
                return 'Try again!';
            }
            
            used.push(num);
        }
    }

    // Horizontal check
    for (var x = 0; x < board[0].length; x++) {
        var used = [];

        for (var y = 0; y < board.length; y++) {
            var num = board[y][x];

            if (used.indexOf(num) != -1) {
                return 'Try again!';
            }

            used.push(num);
        }
    }
    
    // Region checking
    for (var regY = 0; regY < Math.floor(board.length / 3); regY++) {
        for (var regX = 0; regX < Math.floor(board[regX].length / 3); regX++) {
            var used = [];
            
            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 3; x++) {
                    var num = board[regY * 3 + y][regX * 3 + x];

                    if (used.indexOf(num) != -1) {
                        return 'Try again!';
                    }

                    used.push(num);
                }
            }
        }
    }
    
    return 'Finished!';
}

// Testing
const test = require('./common/test');

test(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");

test(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");