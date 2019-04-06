// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {
  var newArray = [];
  arr.filter(function(item) {
    if (item % 2 == 0) {
      return newArray.push(item);
    }
  });
  return newArray;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output);
