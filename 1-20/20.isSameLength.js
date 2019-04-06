// Write a function called "isSameLength".

// Given two words, "isSameLength" returns whether the given words have the same length.

// var output = isSameLength('words', 'super');
// console.log(output); // --> true

function isSameLength(word1, word2) {
  var a = word1.length;
  var b = word2.length;

  if (a == b) {
    return true;
  } else {
    return false;
  }
}
var output = isSameLength("words", "super");
console.log(output);
