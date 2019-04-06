// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:
// * It does so without using the modulo operator (%).
// * It should work for negative numbers and zero.

// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

function isEvenWithoutModulo(num) {
  var quota = Math.floor(num / 2);
  var remainder = quota * 2;

  if (num - remainder === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenWithoutModulo(18);
console.log(output);
