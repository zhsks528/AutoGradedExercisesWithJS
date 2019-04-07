// Find the longest single-word palindrome within a phrase.

// The sorting implementation required by this particular implementation strategy / outline has been provided in this case, as a convenience. Study it carefully to make sure you can create custom sort functions of your own, later.

// Notes:
// * Use all the functions in the skeleton.
// * If there are multiple longest palindromes of equal length, return the last one.
// * The phrase will only contain letters (no symbols, punctuation, or numbers).
// * Your palindrome detection should be case-insensitive.

function findLongestPalindrome(sentence) {
  var arr = sentence.split(" ");
  var palindromes = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  palindromes.sort(sortAscendingByLength);
  return palindromes[palindromes.length - 1];
}

function reverseString(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word.toLowerCase());
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] Expected "' +
        expected +
        '", but got "' +
        actual +
        '"'
    );
  }
}

assertEqual(
  findLongestPalindrome("Mom got a tacocat Racecar"),
  "Racecar",
  "returns the longest single word palindrome within the sentence"
);
