// Import necessary modules and exports
import inquirer from 'inquirer'; 
import { QueryResult } from 'pg';
import { pool } from './db/index.js';
import { viewAllDepartments, viewAllRoles, viewAllEmployees } from './db/index.js';

// Main Menu
async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ],
        },
    ]);

    switch (action) {
        case 'View all Departments':
          await viewAllDepartments();
          break;
        case 'View all Roles':
          await viewAllRoles();
          break;
        case 'View all Employees':
          await viewAllEmployees();
          break;
        case 'Add a Department':
          await addDepartment();
          break;
        case 'Add a Role':
          await addRole();
          break;
        case 'Add an Employee':
          await addEmployee();
          break;
        case 'Update an Employee Role':
          await updateEmployeeRole();
          break;
        case 'Exit':
          console.log('See you next time!');
          process.exit();
      }
      mainMenu();
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
async function addDepartment() {
    const { name } = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      },
    ]);
  
    try {
      await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
      console.log(`Department "${name}" added successfully!`);
    } catch (error) {
      console.error('Error adding Department', error);
    }
  }

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database