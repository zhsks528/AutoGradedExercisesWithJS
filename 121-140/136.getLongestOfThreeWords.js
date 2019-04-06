// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:
// * If there is a tie, it should return the first word in the tie.

// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

function getLongestOfThreeWords(word1, word2, word3) {
  var newArray = [];

  newArray.push(word1, word2, word3);

  var longest = newArray[0];
  for (var item in newArray) {
    if (longest.length < newArray[item].length) {
      longest = newArray[item];
    }
  }
  return longest;
}

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output);
