const employee = {
    id: 124567,
    name: "Elon Musk",
    country : "US",
    city: "Silicon Valley"
 }

 for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
 }

 console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);

 const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);


const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);

const student ={
    fName: "ELon",
    lName:"Musk",
    age:45
}
const address = {
    country : "US",
    street : "Silicon VAlley",
    state : "NY"
}

//concat of two object

// concating address in student object

Object.assign(student, address); 
console.log(student);

// concating student in address object
Object.assign(address, student); 
console.log(address);

//new empty object
const newObj = {}; 

Object.assign(newObj, student, address); // concating two object in new object
console.log(newObj);

//direct assignemnt = 

const newCobj = ({}, student, address);
console.log(newCobj);

//Object.freeze(address);

console.log(newObj.state);

//Array Freezing

