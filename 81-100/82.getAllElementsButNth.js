// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}

var output = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output);
