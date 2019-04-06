// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {
  var newObj = {};
  for (var i in str) {
    if (!newObj[str[i]]) {
      newObj[str[i]] = 1;
    } else {
      newObj[str[i]]++;
    }
  }
  return newObj;
}
var output = countAllCharacters("banana");
console.log(output);
