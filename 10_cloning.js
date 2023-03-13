const person = {
    fullName : "MS Dhoni",
    age : 38
}

Object.freeze(person);

person.add = "Satara";

console.log(person);
