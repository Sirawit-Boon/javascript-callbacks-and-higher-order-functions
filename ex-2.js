//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  if (operation(array) >= 5) {
    return "ผ่านเกณฑ์"
  } else {
    return "ไม่ผ่านเกณฑ์"
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkStudentScores)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkStudentScores)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkStudentScores)

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)

function checkStudentScores (array) {
  let countStudent = 0;
  for (let scores of array) {
    if (scores > 70) {
      countStudent++;
    }
  }
  return countStudent;
}
