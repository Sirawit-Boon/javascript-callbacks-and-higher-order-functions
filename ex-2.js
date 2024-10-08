//Exercise #2: At Least Five Function

function atLeastFive(array, operation, classNum) {
  // Start coding here
  if (operation(array) >= 5){
    return `นักเรียนห้องที่ ${classNum} ผ่านเกณฑ์ ✅`
  }
  else {return`นักเรียนห้องที่ ${classNum} ไม่ผ่านเกณฑ์ ❌`}
  
}

//operation
function passCount(array) {
  let studentCount =0;
  for (let i=0;i < array.length;i++){
    if(array[i] > 70){
      studentCount++;
    }
  }
  return studentCount;
}
//array
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

console.log(`${atLeastFive(studentScoresRoom1,passCount,1)}`);
console.log(atLeastFive(studentScoresRoom2,passCount,2));
console.log(atLeastFive(studentScoresRoom3,passCount,3));





