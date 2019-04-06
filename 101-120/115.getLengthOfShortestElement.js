// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

function getLengthOfShortestElement(arr) {
  if (arr.length < 1) {
    return 0;
  }

  var short = arr[0].length;
  for (var item in arr) {
    if (short > arr[item].length) {
      short = arr[item].length;
    }
  }
  return short;
}
var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output);
