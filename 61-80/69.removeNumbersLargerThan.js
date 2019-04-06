// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }

function removeNumbersLargerThan(num, obj) {
  for (var item in obj) {
    if (obj[item] > num) {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  a: 8,
  b: 2,
  c: 3
};
removeNumbersLargerThan(5, obj);
console.log(obj);
