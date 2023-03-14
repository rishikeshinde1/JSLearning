const person = {
    fullName : "MS Dhoni",
    age : 38
}

Object.freeze(person);

person.add = "Satara";

console.log(person);


let n1 = 100;// 200
let n2 = n1;  // Deep clone
console.log(n2);// 100
n1 = 200;
console.log(n2);//

let s1 = "Hey JS";
let s2 = s1; // Deep clone

let b1 = true;
let b2 = b1; // Deep clone

const person1 = {
    fullName: "MS Dhoni",
    age : 38
}
const player = person1; // Shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);


console.log("Deep clone using spread operator");
const newPlayer = { ...person1 }; // Deep clone using spread operator
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person ==> ${person1.fullName} ${person1.age}`);


console.log("Deep clone using spread String.json()");
const bank = {
    bankName: "SBI Bank",
    accountNo: 3456789,
    bankAddress: {
        city: "Banglore",
        PIN: 5556677
    }
}
const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddress.PIN = 999999;
console.log(`bank==> ${bank.bankAddress.PIN}`);// 
console.log(`newBank==> ${newBank.bankAddress.PIN}`);//