/*
Original Problem:
Create a function that will tell how many sentences are in a paragraph, based on the number of periods ".", question marks "?" and "!" exclamation points that an input string contains.
*/

function sentenceCount(string) {
  return (string.match(/\.|\?|!/g) || []).length;
}

console.log(sentenceCount("Hello. How are you? I'm pretty, fine."));