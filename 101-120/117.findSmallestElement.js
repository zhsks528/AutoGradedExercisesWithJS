// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

function findSmallestElement(arr) {
  if (arr.length < 1) {
    return 0;
  }
  var small = arr[0];
  for (var item in arr) {
    if (small > arr[item]) {
      small = arr[item];
    }
  }
  return small;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output);
