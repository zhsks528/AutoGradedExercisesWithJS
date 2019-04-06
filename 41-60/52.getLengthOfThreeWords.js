// Write a function called "getLengthOfThreeWords".

// Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.

// var output = getLengthOfThreeWords('some', 'other', 'words');
// console.log(output); // --> 14

function getLengthOfThreeWords(word1, word2, word3) {
  var word = word1 + word2 + word3;
  return word.length;
}

var output = getLengthOfThreeWords("some", "other", "words");
console.log(output);
