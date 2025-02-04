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
            message: 'Enter the name of the Department:',
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
async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the Role Title:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department ID for this role:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid Department ID',
        },
    ]);

    try {
        await pool.query(
            'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
            [title, salary, department_id]
        );
        console.log(`Role "${title}" added successfully!`);
    } catch (error) {
        console.error('Error adding Role', error);
    }
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
async function addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter the Employee's First Name:",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter the Employee's Last Name:",
        },
        {
            type: 'input',
            name: 'role_id',
            message: "Enter the Employee's Role ID:",
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid Role ID',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "Enter the employee's manager ID (leave blank if none):",
            default: null,
            validate: (value) => value === '' || !isNaN(Number(value)) || 'Please enter a valid Manager ID',
        },
    ]);

    try {
        await pool.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
            [first_name, last_name, role_id, manager_id || null]
        );
        console.log(`Employee "${first_name} ${last_name}" added successfully!`);
    } catch (error) {
        console.error('Error adding Employee', error);
    }
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
async function updateEmployeeRole() {
    const { employee_id, new_role_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter the ID of the Employee you wish to update:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid Employee ID',
        },
        {
            type: 'input',
            name: 'new_role_id',
            message: "Enter the employee's new role ID:",
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid Role ID',
        },
    ]);

    try {
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [
            new_role_id,
            employee_id,
        ]);
        console.log(`Employee ID ${employee_id} updated to Role ID ${new_role_id}.`);
    } catch (error) {
        console.error('Error updating employee role', error);
    }
}

// Start the prompt
mainMenu();