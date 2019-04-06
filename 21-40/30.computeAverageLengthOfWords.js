// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

function computeAverageLengthOfWords(word1, word2) {
  var word = word1 + word2;
  var length = word.length / 2;
  return length;
}
var output = computeAverageLengthOfWords("code", "programs");
console.log(output);
