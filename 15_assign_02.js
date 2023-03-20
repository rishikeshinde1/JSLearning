class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 7400, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 47000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny,emp_mahi];
console.log(`---------------------------------------------------------------------------`);
console.log('');
console.log(`=== #1 - Find all employees working in TCS and log Emp name and Company Name ===`);
for (const key of array_employees) {
    
    if(key.emp_company == "TCS"){
        console.log(`${key.emp_name} Working in Company ${key.emp_company}`);
    }
}
console.log(`---------------------------------------------------------------------------`);
console.log('');
console.log(`=== #2 - Find all employees working in Finance Department and log Emp name and department ===`);

for (const key of array_employees) {
    
    if(key.emp_dept == "Finance"){
        console.log(`${key.emp_name} Working in Department ${key.emp_dept}`);
    }
}

console.log(`---------------------------------------------------------------------------`);
console.log('');

console.log(`=== #3 - Find all employees whose name start with "R" ===`);

for (const key of array_employees) {
    
    if(key.emp_name.startsWith("R")){
        console.log(`Employee name "${key.emp_name}" Starts with word "R"`);
    }
}

console.log(`---------------------------------------------------------------------------`);
console.log('');

console.log(`=== #4 - Find all employees whose salary is greater than 75000 ===`);

for (const key of array_employees) {
    
    if(key.emp_salary > 75000){
        console.log(`Employee ${key.emp_name}'s salary ${key.emp_salary} is greater than 75000`);
    }
}

console.log(`---------------------------------------------------------------------------`);
console.log('');

console.log(`=== #5 - Find all employees whose salary is greater than or equal to 50000 and dept is "IT" ===`);

for (const key of array_employees) {
    
    if(key.emp_salary >= 50000 && key.emp_dept == "IT"){
        console.log(`Employee ${key.emp_name}'s salary ${key.emp_salary} is greater than 50000 and working in "${key.emp_dept}" Department`);
    }
}

console.log(`---------------------------------------------------------------------------`);
console.log('');

console.log(`=== #5 - Find all employees working in company "Infosys" ===`);

for (const key of array_employees) {
    
    if(key.emp_company == "Infy"){
        console.log(`Employee ID : ${key.emp_id}`);
        console.log(`Employee Name : ${key.emp_name}`);
        console.log(`Employee Department Name : ${key.emp_dept}`);
        console.log(`Employee Salary : ${key.emp_salary}`);
        console.log(`Employee Company : ${key.emp_company}`);
    }
}
