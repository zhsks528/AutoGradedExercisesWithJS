// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length < 1) {
    return 0;
  }

  var newArray = [];
  for (var item in arr) {
    if (typeof arr[item] === "number") {
      newArray.push(arr[item]);
    }
  }

  if (newArray.length < 1) {
    return 0;
  }

  var small = newArray[0];
  for (var item in newArray) {
    if (small > newArray[item]) {
      small = newArray[item];
    }
  }
  return small;
}
var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output);
