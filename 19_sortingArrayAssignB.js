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

const arrayEmployees = [emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi,emp_anil, emp_radha];

console.log(`---------------------------------------------------------------`);
console.log(`=== #1 - Sort the arrayEmployees in ascending order of emp_id and log Employee details ===`);


const sortedEmpId = arrayEmployees.sort((a, b) => {
    return a.emp_id > b.emp_id ? 1 : -1;
});

sortedEmpId.filter(element => {
    console.log(`EMP ID - ${element.emp_id} | Employee Name : ${element.emp_name} | EMP Dept : ${element.emp_dept} `);
})

console.log(`---------------------------------------------------------------`);
console.log(`=== #2 - Sort the arrayEmployees in ascending order of emp_dept and log ID & cmpny details ===`);

const deptSort = arrayEmployees.sort((a, b) => {
    return a.emp_dept > b.emp_dept ? 1 : -1; 
});

deptSort.filter((element) => {
    console.log(`Department - ${element.emp_dept} | EMP ID - ${element.emp_id} | Company - ${element.emp_company}`);
});

console.log(`---------------------------------------------------------------`);
console.log(`=== #3 - Sort the arrayEmployees in descending order of emp_salary and log Name, Salary & cmpny details ===`);

const salarySort = arrayEmployees.sort((a, b) => {
    return a.emp_salary < b.emp_salary ? 1 : -1;
})

salarySort.filter((element) => {
    console.log(`Salary - ${element.emp_salary} | Name - ${element.emp_name} | Company - ${element.emp_company}`);

});
