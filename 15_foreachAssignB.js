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

const arrayOfEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=== #1 - Find out TCS employees details and log only name & company on console ===`);
arrayOfEmployees.forEach(employee => {
    if(employee.emp_company == "TCS"){
        console.log(`${employee.emp_name} is working in TCS`);
    }
});
console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=== #2 - Find out employees with salary >= 50000 log emp details on console ===`);

arrayOfEmployees.forEach( (employee) => {
    if(employee.emp_salary >= 50000){
        console.log(`EMP_ID - ${employee.emp_id} | DEPT - ${employee.emp_dept} | SALARY - ${employee.emp_salary} | COMPANY - ${employee.emp_company} | NAME - ${employee.emp_name}`);
    }
});

console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=== #3 - Find the sum of all employees salary and log on console ===`);

let sumSalary = 0;
arrayOfEmployees.forEach(employee => sumSalary = sumSalary + employee.emp_salary );
console.log(`Sum of all employees salary : ${sumSalary}`);


console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=== #4 - Find the average salary and log on console ===`);


let averageSalary = sumSalary / arrayOfEmployees.length;
console.log(`Average of all employees salary : ${averageSalary}`);


console.log(`--------------------------------------------------------------------------------------------`);
console.log(`=== #5 - Find the "IT" or "HR" dept employees whose salary is >= 75000 log emp details on console ===`);

arrayOfEmployees.forEach( (employee) => {
    if(employee.emp_dept == "IT" || employee.emp_dept == "HR"){
        if(employee.emp_salary >= 75000)
        console.log(`EMP_ID - ${employee.emp_id} | DEPT - ${employee.emp_dept} | SALARY - ${employee.emp_salary} | COMPANY - ${employee.emp_company} | NAME - ${employee.emp_name}`);
    }
});