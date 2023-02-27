console.log(`start`);

var num = 10;
if (num > 0) {
  console.log(`inside if`);
  console.log(`number ${num} is positive`);
}
console.log(`End`);

var voterAge = 20;

if (voterAge >= 18) {
  console.log(`You are eligible for vote`);
  console.log(`Age is ${voterAge}`);
}
console.log(`end of if block`);

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  if (num % 2 != 0) {
    return "Odd";
  }
}
var result = checkEvenOdd(45);
console.log(`Number 45 is ${result}`);

//var result = checkEvenOdd(70);
console.log(`Number 70 is ${checkEvenOdd(70)}`);

// if...... else

var num1 = 5;

if (num1 > 0) {
  console.log(`Number ${num1} is positive`);
} else {
  console.log(`Number ${num1} is negative`);
}

function marriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age > 21) {
    console.log(`${boyName} you are Eligible for marriage`);
  } else {
    console.log(`${boyName} you are Not eligible for marriage`);
  }
}
marriageEligibility("Male", 25, "Bill Gates");
marriageEligibility("Male", 20, "Steve Jobs");
