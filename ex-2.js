//Exercise #2: At Least Five Function

function atLeastFive(array, operation, classNum) {
  // Start coding here
  if (operation(array) >= 5) {
    return `${classNum} ผ่านเกณฑ์ ✅`
  } else {
    return `${classNum} ไม่ผ่านเกณฑ์ ❌`
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkStudentScores, 1)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkStudentScores, 2)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkStudentScores, 3)

console.log(`นักเรียนห้องที่ ${scoreRoom1Result}`)
console.log(`นักเรียนห้องที่ ${scoreRoom2Result}`)
console.log(`นักเรียนห้องที่ ${scoreRoom3Result}`)

function checkStudentScores (array) {
  let countStudent = 0;
  for (let scores of array) {
    if (scores > 70) {
      countStudent++;
    }
  }
  return countStudent;
}
