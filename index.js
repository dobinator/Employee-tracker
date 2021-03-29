const inquirer = require ("inquirer");
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
 // Your port, if not 3306
    port: 3306,
// Your username
    user: 'root',
// Be sure to update with your own MySQL password!
    password: 'rootroot',
    database: 'employee_DB',
  });
  ​

connection.connect((err) => {
  if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    init();
 });

 function init(){
inquirer.prompt([
  {     
    type: "list",
  name: "action",
  message: "What would you like to do?", 
  choices: [
  "View All Employees ", 
  "View All Employees By Department", 
  "View ALL Roles",
  "Add An Employee",
  "Remove Employee",
  "Update Employee Role",
  "Update Employee Manager",
  "EXIT"]
  },   
]).then(function(response){
  switch(response.whatToDo){
    case "View All Employees":
      viewAllEmployees();
      break;
      case "View All Employees By Department":
      viewDepartments();
      break;
      case "View All Roles":
      viewRoles();
      break;
      case "Add An Employee":
      addAnEmployee();
      break;
      case "Remove An Employee":
      removeEmployee();
      break;
      case "Update Employee Role":
      updateEmployeeRole();
      break;
      case "Update Employee Manager":
      updateEmployeeManager();
      break;
      default:
      connection.end();
  }
})
};  ​


 function viewAllEmployees(){
connection.query("SELECT * FROM employee", function(err, data){
console.table(data);
 init();
 })
 } ​;

function viewDepartments(){
 connection.query("SELECT* FROM department", function(err, data){
 console.table(data);
 init(); 
 })
};

function viewRoles(){
connection.query("SELECT* FROM roles", function (err, data){
  connection.table(data);
  init();
});
}

function addAnEmployee(){
  inquirer.prompt([
{
  type: "input",
  name: "first_name ",
  message: "What is the first name of the Employee?"
},
{
  type: "input",
  name: "last_name ",
  message: "What is the last name of the Employee?"
},
{
type: "input",
name: "role",
message: "What is the name of the Employee's role?"
},
{
  type: "List",
  name: "manager",
  message: "Who is the Employee's manager?"
},


]).then(function(response){
  console.log(response);
  const query = "INSERT INTO employee (first_name, last_name, role, manager) VALUES (?, ?, ?, ?);";


  const addEmp = connection.query(
    query, [response.addFirstName, response.addLastName, 
    response.employeeRole, response.employeeManager], function(err, data){
      console.log("Added Employee", response.addFirstName, response.addLastName);
   
 init();
 });
})};

function removeEmployee (){


};

function updateEmployeeRole (){


};

function updateEmployeeManager(){


}; 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  