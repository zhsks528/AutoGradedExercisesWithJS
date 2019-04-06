// Write a function called "squareElements".

// Given a array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

function squareElements(arr) {
  var newArray = [];

  for (var item in arr) {
    newArray.push(arr[item] * arr[item]);
  }
  return newArray;
}

var output = squareElements([1, 2, 3]);
console.log(output);
