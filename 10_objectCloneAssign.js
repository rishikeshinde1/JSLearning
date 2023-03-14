const arrayNums = [20, 3, 4, 56, 90, 400, 49]

console.log(`array of numbers is ==> [${arrayNums}]`);

console.log(' ');
console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#1 - Shallow clone on array and update array value of cloned array ===`);


const newArrayNums = arrayNums;

console.log(`Shallow cloned array is ==> [${newArrayNums}]`);

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(' PUshing values to the cloned array');


newArrayNums.push(55, 66);

console.log(`Cloned Array after pushing the values 55 and 56 ==> [${newArrayNums}]`);


console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#2 - Deep clone on array using spread operator ===`);

const newArrayNumsDeep = [...arrayNums];

console.log(`Deep cloned array is ==> [${newArrayNumsDeep}]`);

console.log(`=== update original array with values 10 & 25 at last===`);

arrayNums.push(10, 25);

console.log(`Main array with update ==> [${arrayNums}]`);
console.log(`Deep cloned array will not update its values ==> [${newArrayNumsDeep}]`);

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#3 - Concat new array with arrayNums ===`);

const arrayEven = [2, 30, 14, 8];

console.log(`Concat new array with array ==> [${[...arrayNums,...arrayEven]}]`);

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#4 - Create employee_info Object ===`);

const employee_info = {
    emp_id :27,
    emp_name: "John Doe",
    salary:{
        july_month : "40,000 INR",
        aug_month : "50,000 INR",
        sept_month : "65,000 INR"
    },
    address :{
        locality:{
            colony : "Om Vrindavan Society",
            street : "Kanch Pokli, 431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"

    },
    mobiles : ["+91 8600 3456 88", "1800 - 4567 32", "+91 9096 5778 77"]
}

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#5 a - Create employee_info Object ===`);

console.log(`Emplyee Address is  => Locality : Colony : ${employee_info.address.locality.colony}, Street : ${employee_info.address.locality.street} city : ${employee_info.address.city}, State : ${employee_info.address.state} `);

for (let index = 0; index < employee_info.mobiles.length; index++) {
    const mobileNumber = employee_info.mobiles[index];
    console.log(`Mobile numbers are : ${mobileNumber}`);
}

console.log(`------------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`===#6 Deep Clone using json.stringify() ===`);

const new_employee_info = JSON.parse(JSON.stringify(employee_info));

console.log(new_employee_info);

console.log(`==== 6 a =====`);

new_employee_info.salary.july_month = "80,000 INR";

console.log(`employee july month salary ==> ${new_employee_info.salary.july_month}`);

employee_info.address.country = "United Kingdom";
console.log(`Employee address is==> ${employee_info.address.country}`);




