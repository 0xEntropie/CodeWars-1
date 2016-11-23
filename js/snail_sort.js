/*
 Original Problem:
 Snail Sort

 Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

 array = [[1,2,3],
 [4,5,6],
 [7,8,9]]
 snail(array) #=> [1,2,3,6,9,8,7,4,5]
 For better understanding, please follow the numbers of the next array consecutively:

 array = [[1,2,3],
 [8,9,4],
 [7,6,5]]
 snail(array) #=> [1,2,3,4,5,6,7,8,9]

 NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

 NOTE 2: The 0x0 (empty matrix) is represented as [[]]
 */

function snail(array) {
	var result = [];
	
	while (array.length > 1 && array[0].length > 1) {
		result = result.concat(getValues(array));

		array.shift();
		array.pop();
		
		for (var y = 0; y < array.length; y++) {
			array[y].shift();
			array[y].pop();
		}
	}
	
	if (array.length > 0 && array[0].length > 0) {
		result.push(array[0][0]);	
	}
	
	return result;
}

function getValues(array) {
	var values = array[0];
	
	for (var y = 1; y < array.length; y++) {
		values.push(array[y][array[y].length - 1]);
	}
	
	var latest = array[array.length - 1];
	latest.pop();
	
	values = values.concat(latest.reverse());

	for (var y = array.length - 2; y > 0; y--) {
		values.push(array[y][0]);
	}
	
	return values;
}

// TODO Fix testing set

console.log(
  snail(
	[[1,2,3],
	[4,5,6],
	[7,8,9]]
  )
);
