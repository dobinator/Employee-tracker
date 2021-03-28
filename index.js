const inquirer = require ("inquirer");
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  ​
 // Your port, if not 3306
    port: 3306,
  ​
// Your username
    user: 'root',
  ​
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
      viewEmployeeDept();
      break;
      case "Add An Employee ":
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

function viewEmployeeDept(){


};

function addEmployee(){
  inquirer.prompt([
{
  type: "input",
  name: "id",
  message: "What is the id number of the Employee?"
},
{
  type: "input",
  name: "firstName ",
  message: "What is the first name of the Employee?"
},
{
  type: "input",
  name: "lastName ",
  message: "What is the last name of the Employee?"
},
{
type: "input",
name: "role",
message: "What is the name of the Employee's role?"
},

]).then(function(response){
  console.log(response);
  const query = "INSERT INTO employee (id, firstName, lastName) VALUES (?, ?, ?);";


  const addEmp = connection.query(
    query, [response.addFirstName, response.addLastName, 
    response.employeeRole, response.employeeManager], function(err, data){
      console.log("Added Employee", response.addFirstName, response.addLastName);
      console.table(addedEmp.sql);
 init();
 })
})
};






function removeEmployee(){


};

function  updateEmployeeRole(){


};

function updateEmployeeManager(){


}; 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  