// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
  var length = 0;
  var newArray = [];
  if (Array.isArray(arr) && arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > length) {
        length = arr[i].length;
      }
    }
  }
  return length;
}

var output = getLengthOfLongestElement(["one", "two", "three"]);
console.log(output);
