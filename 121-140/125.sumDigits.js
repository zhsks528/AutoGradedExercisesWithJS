// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4

// Notes:
// * In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// * Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {
  var digit = num.toString();
  var sum = 0;
  for (var i = 0; i < digit.length; i++) {
    if (digit[i] === "-") {
      sum -= Number(digit[i + 1]);
      i += 2;
    }
    sum += Number(digit[i]);
  }
  return sum;
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(3 - 16);
console.log(output); // --> 4
