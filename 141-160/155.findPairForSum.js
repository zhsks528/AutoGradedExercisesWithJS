// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// example :

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function findPairForSum(array, sum) {
  var resPair = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        resPair.push(array[i], array[j]);
      }
    }
  }
  return resPair;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
