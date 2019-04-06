// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3) {
  var newArray = [word1, word2, word3];
  var short = newArray[0];
  for (var item in newArray) {
    if (short.length > newArray[item].length) {
      short = newArray[item];
    }
  }
  return short;
}

var output = findShortestOfThreeWords("a", "two", "three");
console.log(output);
