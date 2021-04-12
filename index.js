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
          "View All Employees By Department",
          "View All Roles",
          "Add An Employee",
          "Add A Department",
          "Add A Role",
          "Update An Employee",
          "Remove An Employee",
          "Update Employee Manager",
          "Remove Manager",
          "View Budget",
          "EXIT",
        ],
      },
    ])
    .then(function (response) {
      switch (response.action) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Employees By Department":
          viewDepartments();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add An Employee":
          addAnEmployee();
          break;
        case "Add A Department":
          addADepartment();
          break;
        case "Add A Role":
          addARole();
          break;
        case "Update An Employee":
          updateEmployeeRoles();
          break;
        case "Remove An Employee":
          removeEmployee();
          break;
        case "Update Employee Manager":
          updateEmployeeManager();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "View Budget":
          viewBudget();
          break;

        default:
          connection.end();
      }
    });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees;", (err, data) => {
    console.table(data);
    init();
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department;", (err, data) => {
    console.table(data);
    init();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles;", (err, data) => {
    console.table(data);
    init();
  });
}

function addAnEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the Employee?",
      },
      {
        type: "input",
        name: "last_name",
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
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: response.first_name,
          last_name: response.last_name,
          role_id: response.role_id,
          manager_id: response.manager_id,
        },
        (err, data) => {
          if (err) throw err;
          console.log(
            ` ${
              (response.first_name, response.last_name)
            } successfully added to database `
          );
          init();
        }
      );
    });
}

function addADepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "Please add a name of the department you would like to add",
      },
    ])
    .then(function (response) {
      console.log(response);
      connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: response.department_name,
        },
        (err, data) => {
          if (err) throw err;
          console.log(
            `${response.department_name} successfully added to database.`
          );
          init();
        }
      );
    });
}

function addARole() {
  inquirer
    .prompt([
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
        choices: [1, 2, 3, 4],
      },
    ])
    .then(function (response) {
      console.log(response);
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: response.title,
          salary: response.salary,
          department_id: response.department_id,
        },
        (err, data) => {
          if (err) throw err;
          console.log(` ${response.title} successfully added to database.`);
          init();
        }
      );
    });
}

function updateEmployeeRoles() {
  console.log("hit----------")
// const employeeRoles = await connection.query ("SELECT id, first_name, last_name,role_id, manager_id FROM roles")

    // let roles = res.map(role => ({name:role.title, value: role.role_id}));
    //const employee = await connection.query("SELECT id, first_name, last_name, role_id, manager_id, FROM employees")
   

 connection.query("SELECT id, first_name, last_name, role_id, manager_id FROM employees;", (err, data) => {
    //get all of the employee data
    //inquire.prompt with employee data to decide which employee to change,, NAME
    //when we select the employee, we ask what do you want to change thier role_id to, ROLEID
    //then we run a MYSQL update query where first_name = NAME, set role_id=ROLEId
    
    console.log(data);
    //so data is everything
    let employees = []
    for(let obj of data){
      console.log(obj.first_name)
      employees.push(obj.first_name)
    }
    console.log("employees: ", employees)

   inquirer.prompt ([
       {
         type: "rawlist", 
         name: "employee",
         message: "Which employee would you like to update their role?",
         choices: employees 
       },
       {
        type: "rawlist",
        name: "newRole",
        message: "what should the employee's new role be?", 
        choices: [1,2,3,4]
       },
     ]).then ((response)=> {
       connection.query ("UPDATE employees SET ? WHERE ?",
       [

         {
          
          role_id:response.newRole,
         },
         {
          
          first_name: response.employee,
         },

       ],
       (err, res)=> {
         if(err) throw err;
         console.log (`Successfully updated employee's role into the database`);

         init()
       });
  
     });
    
  })
  
  

    }




// function updateEmployeeManager() {
//   connection.query ("SELECT * FROM employees", (err, data) => {
//   if (err) throw err; 
//   let employeesArr = res.map(employees => ({name: employee.first_name + ' ' + employee.last_name, value: employee_id}))
//   inquirer
//     .prompt([
//       {
//         type: "rawlist",
//         name: "employee",
//         message: "Which employee would you like to update?",
//         choices: employeeArr
//       },
//       {
//         type: "rawlist",
//         name: "NewManager",
//         message: "Who is the employee's new manager?",
//         choices: employeeArr
//       },
//     ])
//     .then((response) => {
//       connection.query(
//         "UPDATE employees set ? WHERE ?  ",
//         [
//           {
//             manager_id: response.NewManager,
//           },
//           {
//             employee_id: response.employee_id,
//           },
//         ],
//         (err, res) => {
//           if (err) throw err;
//           console.log(
//             `Successfully updated ${response.employee_id} successfully added in the database.`
//           );
//           init();
//         }
//       );
//     });
//   })
// };


// function removeEmployee() {
// connection.query ("SELECT * FROM employees",(err, res)=>{
//  if (err) throw err;
//  let employeesRem = res.map(employees => ({name: employee.first_name + ' ' + employee.last_name, value: employees_id })); 
// inquirer.prompt ([
//  {
//   type: "rawlist",
//   name: "employee",
//   messages: "Which employee would you like to remove?",
//   choices: employeesRem
//  },
// ]). then ((response)=> {
// connection.query ("DELETE FROM employee WHERE ?",
// [
//   { 
//     employee_id: response.employee,
//   },
// ],
// (err, res) => {

//   if(err) throw err;
//   console.log (`Successfully removed the employee from the database`);
//   init();
// });
// });
// });
// }

// function viewBudget(){
// connection.query ("SELECT * FROM department")
//  if (err) throw err; 
//  let departments= res.map(department => ({name: department.departments_name, value: department.department_id }));
// inquirer.prompt([
// {
// type: "rawlist",
// name: "deptName",
// message: "Which department salaries would you like to view?",
// choices: departments
// },
// ]).then ((response)=> {
// connection.query ("SELECT department_id, SUM(role.salary) AS total_salary FROM role WHERE ?",
// [
//   {
// department_id: response.deptName,

//   },

// ],
//  (err, res) => {
//   if (err) throw err;
//   console.log (`The total utilized salary budget of the ${response.deptName} department is $  `);
//     init(); 
//  })
// })
// }