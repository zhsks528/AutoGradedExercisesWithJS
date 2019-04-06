// Write a function called "getLargestNumberAmongMixedElements".

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5

function getLargestNumberAmongMixedElements(arr) {
  if (arr.length < 1) {
    return 0;
  }
  var numArray = [];
  for (let i in arr) {
    if (typeof arr[i] === "number") {
      numArray.push(arr[i]);
    }
  }
  if (numArray.length < 1) {
    return 0;
  }
  var largest = numArray[0];
  for (let i in numArray) {
    if (numArray[i] > largest) {
      largest = numArray[i];
    }
  }
  return largest;
}

console.log(getLargestNumberAmongMixedElements([3, "word", 5, "up", 3, 1]));
