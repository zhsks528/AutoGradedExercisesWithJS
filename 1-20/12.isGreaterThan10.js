// Write a function called "isGreaterThanTen".

// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

// var output = isGreaterThanTen(11);
// console.log(output); // --> true

function isGreaterThanTen(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
var output = isGreaterThanTen(11);
console.log(output);
