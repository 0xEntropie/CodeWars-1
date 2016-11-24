/*
 Original Problem:
 Create a RomanNumerals helper that can convert a roman numeral to and from an integer value. The class should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

 Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

 Examples:

 RomanNumerals.toRoman(1000); // should return 'M'
 RomanNumerals.fromRoman('M'); // should return 1000
 */

const RomanNumerals = {
	values: {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	},
	toRoman(number) {
		var text = '';
		
		for (letter in this.values) {
			while (number >= this.values[letter]) {
				text += letter;
				number -= this.values[letter];
			}
		}
		
		return text;
	},
	fromRoman(text) {
		text = text.toUpperCase();
		
		var decimal = 0;
		var previous = 0;
		
		for (var i = text.length - 1; i >= 0; i--) {
			var char = text.charAt(i);
			var value = this.values[char];
			
			decimal = this.processDecimal(value, previous, decimal);
			previous = value;
		}
		
		return decimal;
	},
	processDecimal(value, previous, decimal) {
		if (previous > value) {
			return decimal - value;
		} else {
			return decimal + value;
		}
	}
};

// Testing
const test = require('./common/test');

test(RomanNumerals.fromRoman('M'), 1000);
test(RomanNumerals.fromRoman('LXX'), 70);
test(RomanNumerals.fromRoman('IV'), 4);

test(RomanNumerals.toRoman(15), 'XV');
test(RomanNumerals.toRoman(4), 'IV');

