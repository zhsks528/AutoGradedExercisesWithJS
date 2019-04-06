// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:* If no elements match, "keep" should return an empty array.

// var output = keep([1, 2, 3, 2, 1], 2)
// console.log(output); --> [2, 2]

function keep(array, keeper) {
  var list = new Array();
  for (var item in array) {
    if (array[item] === keeper) {
      list.push(array[item]);
    }
  }
  return list;
}

var output = keep([1, 2, 3, 2, 1], 2);
console.log(output);
