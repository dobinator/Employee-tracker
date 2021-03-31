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
          "Add a Role",
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
        case "Add a Role":
          addARole();
          break;
        case "Update Employee Roles":
          updateEmployeeRoles();
          break;
        case "Remove An Employee":
          removeEmployee();
          break;
        case "Delete Roles":
          deleteRoles();
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
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, data) {
    console.table(data);
    init();
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    init();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function (err, data) {
    console.table(data);
    init();
  });
}

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
        choices: [1, 2, 3, 4],
      },
    ])
    .then(function (response) {
      console.log(response);
      connection.query('INSERT INTO employees SET ?', {
        first_name: response.first_name,
        last_name: response.last_name,
        role_id: response.role_id,
        manager_id: response.manager_id,
      }),
        (err, data) => {
          if (err) throw err;
          console.log
          (` ${response.first_name,response.last_name} successfully added to database ` );
          init();
        };
    });
}

function addADepartment() {
  inquirer.prompt([
      {
        type: "input",
        name: "department_name",
        message: "Please add a name of the department you would like to add",
      },
      
    ])
    .then(function (response) {
      console.log(response);
      connection.query("INSERT INTO department SET ?", {
        department_name: response.department_name,
      
      }),
        (err, data) => {
          if (err) throw err;
          console.log(` ${response.department_name} successfully added to database.`);
          init();
        };
    
    });
};

function addARole() {
  connection.query ("SELECT * FROM department;", (err, res)=> {
    if (err) throw err;
    let departments = res.map(department => ({name: department.department_name, value: department.department_id  })); 
  inquirer .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the title you would like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary amount?",
      },
      {
        type: "list",
        name: "department_id",
        message: "What is the number that corresponds to the department id?",
        choices: [1, 2, 3, 4, 5],
      },
    ])
    .then(function (response) {
      console.log(response);
      connection.query("INSERT INTO roles SET ?", {
        title: response.title,
        salary: response.salary,
        department_id: response.department_id,
      },
        (err, data) => {
          if (err) throw err;
          console.log( ` ${response.title} successfully added to database.` );
          init();
    })
  })
})};

function updateEmployeeRoles(){
  connection.query("SELECT * FROM roles;", (err, res)=> {

    
  })
}

