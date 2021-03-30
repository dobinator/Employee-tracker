const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "employee_DB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  init();
});

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add An Employee",
          "Add a Department",
          "Add a Roles",
          "Remove Employee",
          "Delete Roles",
          "Update Employee Roles",
          "Update Employee Manager",
          "View Employee By Manager",
          "EXIT",
        ],
      },
    ])
    .then(function (response) {
      switch (response.action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add An Employee":
          addAnEmployee();
          break;
        case "Add a Department":
          addADepartment();
          break;
          case "Add Roles":
            addRoles();
            break;
        case "Remove An Employee":
          removeEmployee();
          break;
        case "Delete Roles":
            deleteRoles();
            break;
        case "Update Employee Roles":
          updateEmployeeRoles();
          break;
        case "Update Employee Manager":
          updateEmployeeManager();
          break;
        case "View Employee by Department":
          viewEmployeeByDepartment();
          break;
        default:
          connection.end();
      }
    });
};

function viewAllEmployees() {
  connection.query(
    "SELECT * FROM employees", function (err, data) {
    console.table(data);
    init();
  });
};

function viewDepartments() {
  connection.query(
    "SELECT * FROM department", function (err, data) {
    console.table(data);
    init();
  });
};

function viewAllRoles() {
  connection.query(
    "SELECT * FROM roles", function (err, data) {
    console.table(data);
    init();
  });
};

function addAnEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name ",
        message: "What is the first name of the Employee?",
      },
      {
        type: "input",
        name: "last_name ",
        message: "What is the last name of the Employee?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the number that corresponds to the Employee's role?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      {
        type: "list",
        name: "manager_id",
        message: "What is the Employee Manager's id?",
        choices: [1, 2, 2, 4], 
      },
    ])
    .then(function (response) {
      console.log(response);
      const query = connection.query(
        "INSERT INTO employees ( first_name,last_name,role_id, manager_id) VALUES (?, ?, ?, ?);", 
       
        [
          response.addFirstName,
          response.addLastName,
          response.employeeRole,
          response.employeeManager,
        ],
        (err, data) => {
          if (err) throw err;
          console.log(
            "Added Employee",
            response.addFirstName,
            response.addLastName

          );

          init();
        }
      );
    });
    
}

function addADepartment(){
  inquirer.prompt([
    {
    type: "input",
    name: "department",
    message: "Please add a department name:"
  }
  ]).then (function (response){
    console.log (response);
    const query= 
    "INSERT INTO department(department_name, department_manager) VALUES (?,?):";
    const addDept = connection.query(
      query,
      [
        response.adddepartmentname,
        response.adddepartmentmanager,
       
      ],
      function (err, data) {
        console.log(
          "Added department",
          response.adddepartmentname,
          response.adddepartmentmanager
        );

        init();
        }
  
  )})}; 

