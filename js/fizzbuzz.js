/*
Original Problem:
Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected outputs: n, "Fizz", "Buzz", or "FizzBuzz" depending on the following rules:

Multiples of 5 and 3 return "FizzBuzz"
Multiples of 3 return "Fizz"
Multiples of 5 return "Buzz"
Your job is to write an algorithm that receives the input and outputs the correct value.
*/

// Here's the most classical programming challenge

function preFizz(n) {
  let str = '';

  if (n % 3 === 0) {
    str += 'Fizz';
  }

  if (n % 5 === 0) {
    str += 'Buzz';
  }

  return str || n;
}