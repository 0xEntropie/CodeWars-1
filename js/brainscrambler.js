/*
Original Problem:
Brainscrambler

Brainscrambler is an Esoteric programming language, Your task is to create an interpreter for Brainscrambler. The interpreter class is provided and a function called read which will be used.

Commands

The eleven possible commands in the Brainscrambler language:
+ Increment the current number.
- Decrement the current number.
< Move the current number to the stack to the "left".
> Move the current number to the stack to the "right".
* Push a zero onto the current stack.
^ Pop the current number and discard it.
# Rotate between stacks.
, Input a number and push it to the current stack.
. Output the current number.
[ While the current number is greater than zero.
] End while.
Important

All stacks have an original value of 0
When popping from the stack if no values are left the current number will be undefined.
The output string must be cleared every time the read function is called but the stacks still persist values.
If a . or < or > operation appears and the current number is undefined, do not add anything to the output or shift anything.
If a + or - appear and the current number is undefined then set the current number to 0
When doing the loop check the condition at the end of each loop.
Brainscrabler memory consists of three stacks: A, B, and C. The "current stack" starts out at A, then is rotated to B, then to C, then back to A again, using the # command.
Input

Input you should expect is only for the read function inside the Interpreter class which will take one parameters: input. 

Input will be a string of possible commands.

Output

The output will be a string containing all values that have been sent to the output, you must only return from the read function once the source code has finished being read.

Examples

Simple Program

input: *+.
output: '1'

Reference: https://esolangs.org/wiki/Brainscrambler
*/

// Code needs Babel/ES6 transpiler

const Interpreter = function() {
  let stack = [0, 0, 0];
  let i = 0;

  return {
    read: function(input) {
      let out = '';
      let loop;

      const numRegex = /,\d+/;

      const getNext = function(up) {
        return up ? (i >= 2 ? 0 : i + 1) : (i <= 0 ? 2 : i - 1);
      }

      input = [...input];

      for (let j = 0; j < input.length; j++) {
        switch (input[j]) {
          case '+':
            stack[i] !== undefined ? stack[i]++ : stack[i] = 0;
            break;
          case '-':
            stack[i] !== undefined ? stack[i]-- : stack[i] = 0;
            break;
          case '<':
          case '>':
            if (stack[i] === undefined) {
              break;
            }

            stack[getNext(input[j] === '>')] = stack[i];
            delete stack[i];
            break;
          case '*':
            stack[i] = 0;
            break;
          case '^':
            delete stack[i];
            break;
          case '#':
            i = getNext(true);
            break;
          case ',':
            let num = numRegex.exec(input.slice(j).join(''))[0].substring(1);

            j += num.length;
            stack[i] = parseInt(num);
            break;
          case '.':
            if (stack[i] !== undefined) {
              out += stack[i];
            }
            break;
          case '[':
            loop = input.slice(j).indexOf(']');
            break;
          case ']':
            if (stack[i] > 0) {
              j -= loop;
            }
            break;
        }
      }

      return out;
    }
  }
}

// Tests
// https://segmentfault.com/q/1010000008617820
const instance = Interpreter();

console.log(instance.read(',9[.--]'));
console.log('97531');