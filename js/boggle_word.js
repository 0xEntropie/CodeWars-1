/*
Original Problem:
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes. The array will always be a square 2D array of single capitalized characters, and the string will always be a single capitalized word.

You do not have to check whether the string is a real word or not, only if it's a valid guess.
*/

// NOT ENDED

'use strict';

function checkWord(board, word) {
  word = [...word];

  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < board[y].length; x++) {
      if (check(board, word, y, x)) {
        return true;
      }
    }
  }
}

function check(board, word, y, x) {
  if (y < 0 || x < 0 || y >= board.length || x >= board[y].length) {
    return false;
  }

  if (board[y][x] !== word[0]) {
    return false;
  }

  board = board.slice();
  let remain = word.slice(1);

  if (!remain.length) {
    return true;
  }

  board[y][x] = '-';
  return checkAll(board, remain, y, x);
}

function checkAll(board, remain, y, x) {
  return check(board, remain, y, x + 1) ||
    check(board, remain, y, x - 1) ||
    check(board, remain, y + 1, x) ||
    check(board, remain, y - 1, x) ||
    check(board, remain, y - 1, x - 1) ||
    check(board, remain, y - 1, x + 1) ||
    check(board, remain, y + 1, x - 1) ||
    check(board, remain, y + 1, x + 1);
}

/*function adjacent(board, y, x, char) {
  let opts = [];
  let maxX = board[y].length;

  for (let dx = (x > 0 ? -1 : 0); dx <= (x < maxX ? 1 : 0); ++dx) {
    for (let dy = (y > 0 ? -1 : 0); dy <= (y < board.length ? 1 : 0); ++dy) {
      if (board[y + dy][x + dx] !== char) {
        continue;
      }

      opts.push([y + dy, x + dx]);
    }
  }

  return opts;
}*/

// Tests
const test = require('./common/test');