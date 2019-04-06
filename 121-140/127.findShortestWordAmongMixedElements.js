// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {
  var newArray = [];
  if (arr.length < 1) {
    return "";
  }
  for (var item in arr) {
    if (typeof arr[item] === "string") {
      newArray.push(arr[item]);
    }
  }
  if (newArray.length < 1) {
    return "";
  }

  var short = newArray[0];
  for (var item in newArray) {
    if (short.length > newArray[item].length) {
      short = newArray[item];
    }
  }
  return short;
}

var output = findShortestWordAmongMixedElements([4, "two", 2, "three"]);
console.log(output);
