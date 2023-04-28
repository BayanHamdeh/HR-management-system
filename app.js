'use strict';
let employees = [];

function Employee(EmpID, fullName, department, level, imagrUrl, salary) {
    this.EmpID = EmpID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagrUrl = imagrUrl;
    this.salary = 0;
    employees.push(this);
}
Employee.prototype.calculateSalary = function () {
    let min = 0;
    let max = 0;

    if (this.level === "Junior") {
        min = 500;
        max = 1000;
    }
    else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    }
    else if (this.level === "Senior") {
        min = 1500;
        max = 2000;
    }

    this.salary = Math.floor(Math.random() * (max - min)) + min;
    return this.salary;
};

function netSalary(salary) {
    console.log(salary);
    let netSalary = salary - salary * 0.075
    return netSalary;
}

Employee.prototype.render = function () {
    document.write(`<h2>employee name : ${this.fullName}</h2> 
    <h3>the Salary is : ${netSalary(this.salary)} </h3>`);
}

let GhaziSamer = new Employee(1000, 'GhaziSamer', 'Administration', 'Senior', '/employee.jpg');
let LanaAli = new Employee(1001, 'LanaAli', 'Finance', 'Senior', '/employee2.jpg');
let TamaraAyoub = new Employee(1002, 'TamaraAyoub', 'Marketing', 'Senior', '/employee.jpg');
let SafiWalid = new Employee(1003, 'SafiWalid', 'Administration', 'Mid-Senior', '/employee.jpg');
let OmarZaid = new Employee(1004, 'OmarZaid', 'Development', 'Senior', '/employee.jpg');
let RanaSaleh = new Employee(1005, 'RanaSaleh', 'Administration', 'Junior', '/employee2.jpg');
let HadiAhmad = new Employee(1006, 'HadiAhmad', 'Finance', 'Mid-Senior', '/employee.jpg');

console.log(employees);
for (let i = 0; i < employees.length; i++) {
    employees[i].calculateSalary();
    employees[i].render();
}