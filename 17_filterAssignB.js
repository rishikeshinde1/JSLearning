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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 47000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const empArray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`-------------------------------------------------------`);
console.log(`=====#1. Find all employees from TCS and log emp name and company ====`);

const tcsEmp = empArray.filter(employee => employee.emp_company == "TCS");

tcsEmp.filter( (emp) => {
    console.log(`Employee ${emp.emp_name} is working at ${emp.emp_company}`);
});


console.log(`-------------------------------------------------------`);
console.log(`=====#2. Find average salary of employees from Wipro ====`);

const wiproEmp = empArray.filter(emp => emp.emp_company == "Wipro");
let totalSalary = 0; 
wiproEmp.filter(e => totalSalary = totalSalary + e.emp_salary);
let avgSal = totalSalary / wiproEmp.length;
console.log(`Average salary of Wipro employee is : ${avgSal}`);

console.log(`-------------------------------------------------------`);
console.log(`=====#3. Find average salary of employees from Wipro and Infy ====`);
let wiproInfyEmp = empArray.filter((emp) => {
    if(emp.emp_company == "Wipro" || emp.emp_company == "Infy"){
        return emp.emp_salary;
    }
});
empSal = 0;
wiproInfyEmp.filter((emp) => {
    empSal = empSal + emp.emp_salary;
});
console.log(`Average salary of Wipro employee is : ${empSal/wiproInfyEmp.length}`);



