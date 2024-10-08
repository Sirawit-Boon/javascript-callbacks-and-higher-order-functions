// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for(let i=0;i < array.length; i++){
    newEmployeeSalaries.push(operation(array[i]));
  }
  
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000]; //array
const newEmployeeSalaries = [];

function getBonus(bonus){ //operation
  return bonus + 5000;
  
}

// Using `forEach` function here

forEach(employeeSalaries,getBonus);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
