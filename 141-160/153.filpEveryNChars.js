// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// example :

// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars(string, integer) {
  var newString = "";
  for (i = 0; i < string.length - 1; i += integer) {
    var slice = string.slice(i, i + integer);
    var reverseString = slice
      .split("")
      .reverse()
      .join("");
    newString += reverseString;
  }
  return newString;
}

var input = "a short example";
var output = flipEveryNChars(input, 5);
console.log(output);
