// Write a function called "isOddLength".

// Given a word, "isOddLength" returns whether the length of the given word is odd.

// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
  var a = word.length;

  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
var output = isOddLength("special");
console.log(output);
