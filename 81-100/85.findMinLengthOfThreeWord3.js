// Write a function called "findMinLengthOfThreeWords".

// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  var a = word1.length;
  var b = word2.length;
  var c = word3.length;

  return Math.min(a, b, c);
}
var output = findMinLengthOfThreeWords("a", "be", "see");
console.log(output);
