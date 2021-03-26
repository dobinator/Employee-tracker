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
    database: ' ',
  });
  ​

// connection.connect((err) => {
//     if (err) throw err;
//     console.log(`connected as id ${connection.threadId}`);
//   ​
//     init();
//   });
//   ​
//   function init(){
//     inquirer.prompt([{
//       type: "list",
//       name: "whatToDo",
//       message: "What would you like to do?",
//       choices: [
//         "View All Flavors",
//         "Add A Flavor",
//         "Exit"
//       ]
//     }]).then(function(response){
//       switch(response.whatToDo){
//         case "View All Flavors":
//           viewFlavors();
//           break;
//         case "Add A Flavor":
//           addFlavor();
//           break;
//         default:
//           connection.end();
//       }
//     })
//   }
//   ​
//   ​
//   function viewFlavors(){
//     connection.query("SELECT * FROM products", function(err, data){
//       console.table(data);
//       init();
//     })
//   }
//   ​
//   function addFlavor(){
//     inquirer.prompt([{
//       type: "input",
//       name: "flavor",
//       message: "What flavor would you like to add?"
//     },
//     {
//       type: "input",
//       name: "price",
//       message: "How much does it cost?"
//     },{
//       type: "input",
//       name: "quantity",
//       message: "How many do you have?"
//     }]).then(function(response){
//       console.log(response);
//       const query = "INSERT INTO products (flavor, price, quantity) VALUES (?, ?, ?);";
//   ​
//       const foo = connection.query(query, [response.flavor, response.price, response.quantity], function(err, data){
//         console.log("Added flavor", response.flavor);
//         console.log(foo.sql);
//         init();
//       })
//     })
//   }
//   ​
//   ​
//   Collapse
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  