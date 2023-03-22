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

const objEmployeeAray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`------------------------------------------------------------------------`);
console.log(`=== #1. Get the list of all employee Array ===`);

empNameArr = []
objEmployeeAray.map(employee => {
    empNameArr.push(employee.emp_name);
});
console.log(`List of Employees : [${empNameArr.join(', ')}] `);

console.log(`------------------------------------------------------------------------`);
console.log(`=== #2. Get the list of department and log on ===`);

deptList = [];
objEmployeeAray.map(employee => {
    if (!deptList.includes(employee.emp_dept)) {
        deptList.push(employee.emp_dept);
    }
   // deptList.push();
});
console.log("List of departments : ", deptList);

console.log(`------------------------------------------------------------------------`);
console.log(`=== #3. Get the list of employee ID's and log on ===`);
objEmployeeAray.map(employee => console.log(employee.emp_id));

console.log(`------------------------------------------------------------------------`);
console.log(`=== #3. Get the list of employee working in TCS ===`);
objEmployeeAray.map(employee => {
    if(employee.emp_company == "TCS"){
        console.log(`${employee.emp_name} is working in ${employee.emp_company}`);
    }
});
