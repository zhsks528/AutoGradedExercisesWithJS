// Write a function called "getLengthOfTwoWords".

// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9

function getLengthOfTwoWords(word1, word2) {
  var a = word1.concat(word2);
  var length = a.length;
  return length;
}

var output = getLengthOfTwoWords("some", "words");
console.log(output);
