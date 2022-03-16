const inquirer = require("inquirer");
const db = require("./db/connection.js");
const cTable = require("console.table");
async function toDo() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "toDo",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Delete an employee",
          "Want to exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.toDo) {
        case "View all departments":
          selectAllDepartments().then(([rows, fields]) => {
            console.table(rows);
            wantToExit();
          });
          break;
        case "View all roles":
          selectAllRoles().then(([rows, fields]) => {
            console.table(rows);
            wantToExit();
          });
          break;
        case "View all employees":
          selectAllEmployees().then(([rows, fields]) => {
            console.table(rows);
            wantToExit();
          });
          break;
        case "Add a department":
          addDepartment();

          break;
        case "Add a role":
          addRole();

          break;
        case "Add an employee":
          addEmployee();

          break;
        case "Update an employee role":
          updateEmployee();

          break;
        case "Delete an employee":
          deleteEmployee();

          break;
        default:
      }
    });
}
// view all departments
const selectAllDepartments = () => {
  return db.promise().execute("SELECT * FROM departments;");
};

// view all roles
const selectAllRoles = () => {
  return db.promise().execute("SELECT * FROM roles;");
};

//view all employees
const selectAllEmployees = () => {
  return db.promise().execute("SELECT * FROM employees;");
};
