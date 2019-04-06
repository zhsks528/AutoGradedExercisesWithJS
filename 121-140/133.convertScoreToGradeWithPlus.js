// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) --> 'A'
// * (89  - 80) --> 'B'
// * (79  - 70) --> 'C'
// * (69  - 60) --> 'D'
// * (59  -  0) --> 'F'
// * If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// * If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
// * If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
// * There are is no F+ and there is no F-.

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

function convertScoreToGradeWithPlusAndMinus(score) {
  let letterGrade = "";
  let scoreAsString = score.toString();
  let scoreRange = 0;
  let scorePlusMinus = "";

  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  } else if (score >= 90) {
    letterGrade = "A";
  } else if (score >= 80) {
    letterGrade = "B";
  } else if (score >= 70) {
    letterGrade = "C";
  } else if (score >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  if (letterGrade !== "F") {
    if (scoreAsString[1] >= 8 || score === 100) {
      scorePlusMinus = "+";
    } else if (scoreAsString[1] <= 2 && score) {
      scorePlusMinus = "-";
    }
  }
  return letterGrade + scorePlusMinus;
}
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output);
