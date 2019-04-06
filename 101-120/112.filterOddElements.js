// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

function filterOddElements(arr) {
  var newArray = [];
  arr.filter(function(item) {
    if (item % 2 == 1) {
      return newArray.push(item);
    }
  });
  return newArray;
}
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);
