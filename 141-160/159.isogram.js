// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

// Write and test a function that determines whether a string is an isogram.

// Notes:
// * Assume your input is only letters.
// * Assume the empty string is an isogram.
// * Ignore case.
// * Follow the pseudocode exactly!

function isIsogram(str) {
  var strK = str.toLowerCase();
  for (var i = 0; i < strK.length; i++) {
    for (var j = i + 1; j < strK.length; j++) {
      if (strK[i] === strK[j]) return false;
    }
  }
  return true;
}

console.log(isIsogram("aksjaiwflajsdioaw"));
console.log(isIsogram("jawabarat"));
console.log(isIsogram("asdfghjkloi"));
console.log(isIsogram("koapsjioawjd"));
console.log(isIsogram("aksjaiwflajsdioaw"));
