// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.

// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

function getLongestElement(arr) {
  if (arr.length < 1) {
    return "";
  }

  var longest = arr[0];
  for (var item in arr) {
    if (longest.length < arr[item].length) {
      longest = arr[item];
    }
  }
  return longest;
}
var output = getLongestElement(["one", "two", "three"]);
console.log(output);
