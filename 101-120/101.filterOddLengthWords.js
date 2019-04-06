// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {
  var newArray = [];
  for (var item in words) {
    if (words[item].length % 2 == 1) {
      newArray.push(words[item]);
    }
  }
  return newArray;
}

var output = filterOddLengthWords(["there", "it", "is", "now"]);
console.log(output);
