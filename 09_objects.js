const student = {
    firstName: "Rishi",
    lastName: "Shinde",
    isWorking : true,
    age : 32,
    collegeName : "SCOEM",
    id: 345
}
console.log(student);

console.log(typeof student);

// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

//update property of object
student.collegeName = "COEP";
console.log(student.collegeName);

console.log(student.age);
student.age = "33";
console.log(student.age);

// add new property to existing object

student.city = "Pune";
console.log(student.city);



student.country = "India";
console.log(student.country);

//delete existing property

delete student.isWorking;

console.table(student);

//empty object

let teacher = {};

//firstName = "Mohit"

teacher.firstName = "Mohit";

console.log(teacher);
