console.log(
  `------------------------------------- #1 Check Voter Age Eligibility -----------------------------------------`
);

function voteEligibilty(age) {
  //instead of checking this conds --> age == NaN || age == null || age == undefined || typeof age == "string" use typeof age != "number"
  if (age <= 0 || age > 120 || typeof age != "number") {
    console.log(`Your age is ==> "${age}", this is Invalid Data!!`);
    console.log("****");
  } else if (age > 18) {
    console.log(`Congrats!!! your age is ==> ${age}. You are eligible to vote`);
    console.log("****");
  } else {
    console.log(
      `Sorry!!! your age is ==> ${age}. You are not eligible to vote`
    );
    console.log("****");
  }
}

voteEligibilty(45);
voteEligibilty(17);
voteEligibilty(8);
voteEligibilty(20);
voteEligibilty(10);
voteEligibilty(null);
voteEligibilty(0);
voteEligibilty(undefined);
voteEligibilty(200);
voteEligibilty("test");

console.log("");
console.log("*");
console.log(
  `------------------------------------- #2 Grade system -----------------------------------------`
);
console.log("*");
function gradeCalculation(marks) {
  if (marks <= 0 || marks > 100 || typeof marks != "number") {
    console.log(
      `marks ${marks} is not valid marks, please provide value between 0 to 100`
    );
    console.log("****");
  } else if (marks >= 90) {
    console.log(`Fantastic Marks: ${marks}, Your grade is A+`);
    console.log("****");
  } else if (marks >= 75 && marks < 90) {
    console.log(`Excellent Marks : ${marks}, Your grade is A`);
    console.log("****");
  } else if (marks >= 50 && marks < 75) {
    console.log(`Good Marks : ${marks}, Your grade is B`);
    console.log("****");
  } else if (marks >= 35 && marks < 50) {
    console.log(`Poor marks : ${marks}, your grade is C, you need impovement`);
    console.log("****");
  } else if (marks > 0 && marks < 35) {
    console.log(`You have failed in exam, you got only : ${marks} marks`);
    console.log("****");
  }
}

gradeCalculation(98);
gradeCalculation(88);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
