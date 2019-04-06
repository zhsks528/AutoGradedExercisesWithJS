// Use the skeleton provided to write a working implementation.

// Notes:
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.

function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce(function(sum, number) {
    return (sum += number);
  });
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed");
  } else {
    console.log(
      "FAILED [" + testName + "] Expected " + expected + " but got " + actual
    );
  }
}

var testArr = [2, 4, 6];

assertEqual(sum(testArr), 12, 'test "sum" function');

assertEqual(average(testArr), 4, 'test "average" function');
