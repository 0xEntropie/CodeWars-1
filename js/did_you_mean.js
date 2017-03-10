/*
I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

Additional notes:

there is always exactly one possible solution
*/

// Used Levenshtein distance
// https://en.wikipedia.org/wiki/Levenshtein_distance

// Code needs Babel/ES6 transpiler

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
  return this.words.reduce((prev, current) => {
    let diff = levenstein(current, term);

    if (diff < prev[1]) {
      return [current, diff];
    }

    return prev;
  }, [this.words[0], levenstein(this.words[0], term)])[0];
};

function levenstein(a, b) {
  let m = [], i, j, min = Math.min;

  if (!(a && b)) return (b || a).length;

  for (i = 0; i <= b.length; m[i] = [i++]);
  for (j = 0; j <= a.length; m[0][j] = j++);

  for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
          m[i][j] = b.charAt(i - 1) == a.charAt(j - 1)
              ? m[i - 1][j - 1]
              : m[i][j] = min(
                  m[i - 1][j - 1] + 1, 
                  min(m[i][j - 1] + 1, m[i - 1 ][j] + 1))
      }
  }

  return m[b.length][a.length];
}

let fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);

fruits.findMostSimilar('strawbery'); // strawberry
fruits.findMostSimilar('berry'); // cherry

let langs = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
langs.findMostSimilar('heaven'); // java