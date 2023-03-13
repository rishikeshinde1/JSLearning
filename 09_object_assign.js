let professor = {
    name:"Mayur Sanas",
    id:"48451",
    address:"Pune",
    subject:"Engineering drawing",
    salary:"150000",
    degreees:{
        mainDegree:"PHD",
        specialization1:"CSC",
        specialization2:"Adv computing",
        specialization3:"CAD",
        specialization4:"Fusion 360"

    },
    
    certificates:['Hacker Rank Particiapation', 'Certificate in IFE course', 'Certificate in Advance Programming'],
    concatDegrees : function(){
        let degrees = '1.' + this.degreees.mainDegree +' 2.'+ this.degreees.specialization1+' 3.' + this.degreees.specialization2 +' 4.'+ this.degreees.specialization3 +' 5.' + this.degreees.specialization4;  
        return degrees; 

    }
}

console.log(`----------------------------------------------------------------`);
console.log("====#1 Properties of professor Object====");
console.log(`Professor object proprties : Name - ${professor.name}, ID - ${professor.id}, Adress = ${professor.address}, Subject - ${professor.subject}, Salary - ${professor.salary}`);

console.log(`----------------------------------------------------------------`);

console.log("====#2 Nested certificate Object====");

console.log(`Degrees for the professor are: ${professor.degreees.mainDegree}, ${professor.degreees.specialization1}, ${professor.degreees.specialization2}, ${professor.degreees.specialization3},  ${professor.degreees.specialization4}`);

console.log(`----------------------------------------------------------------`);
console.log(`===#3 - Add one array certificates `);
let certificate;
for (let index = 0; index < professor.certificates.length; index++) {
    const certificate = professor.certificates[index];
    console.log(`Array at index${index} elemnts available in object: ${certificate}`);
}

console.log(`----------------------------------------------------------------`);
console.log(`===#4 - Add function as a value which should concat all degrees in #2 please return as a string and log on console`);

console.log(`Professsor degrees are : ${professor.concatDegrees()}`);


console.log(`----------------------------------------------------------------`);
console.log(`===#5 - Add new property ====`);

professor.totalExperience = "14 Years";

console.log(professor.totalExperience);

console.log(`----------------------------------------------------------------`);
console.log(`===#6 - Modify existing property salary ====`);

professor.salary = "1,80,000";

for (const key in professor) {
    if (Object.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(element);
    }
}
//ßconsole.log(professor);
console.log(`----------------------------------------------------------------`);
console.log(`===#7 & #8 - Add new certificate at end and log it====`);

professor.certificates.push('Oracle Certified');

console.log(professor.certificates[professor.certificates.length - 1]);




