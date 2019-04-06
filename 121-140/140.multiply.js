// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:
// * It should not use the multiply operator (*).\

// var output = multiply(4, 7);
// console.log(output); // --> 28

function multiply(num1, num2) {
  var sum = 0;
  for (i = 1; i <= Math.abs(num2); i++) {
    sum += num1;
  }
  if (num2 < 0) {
    return -sum;
  }
  return sum;
}

var output = multiply(4, 7);
console.log(output); // --> 28
