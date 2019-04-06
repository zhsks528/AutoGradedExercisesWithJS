// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word.
// Notes:* If given an empty string, it should return an empty array.

// var output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllLetters(str) {
  var list = [];
  for (var i in str) {
    list.push(str[i]);
  }
  return list;
}

var output = getAllLetters("Radagast");
console.log(output);
