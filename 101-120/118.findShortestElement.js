// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'

function findShortestElement(arr) {
  if (arr.length < 1) {
    return "";
  }

  var short = arr[0];
  for (var item in arr) {
    if (short.length > arr[item].length) {
      short = arr[item];
    }
  }
  return short;
}

var output = findShortestElement(["a", "two", "three"]);
console.log(output);
