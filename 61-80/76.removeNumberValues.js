// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose valuse are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

function removeNumberValues(obj) {
  for (var item in obj) {
    if (typeof obj[item] == typeof 1) {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: "remaining",
  c: 4
};

removeNumberValues(obj);
console.log(obj);
