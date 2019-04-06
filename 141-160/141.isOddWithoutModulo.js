// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%).
// * It should work for negative numbers and zero.

// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

function isOddWithoutModulo(num) {
  var quota = Math.floor(num / 2);
  var remainder = quota * 2;

  if (num - remainder === 1) {
    return true;
  } else {
    return false;
  }
}

var output = isOddWithoutModulo(17);
console.log(output);
