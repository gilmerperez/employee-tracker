// Import necessary modules and exports 
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

// Establishes connection to Database before doing anything else
async function initDb() {
  try {
    await connectToDb();
    console.log('Success! Connected to the database');
  } catch (error) {
    console.error('Error! Database connection failed', error);
    process.exit(1);
  }
}

await initDb(); // Ensures the database is connected before proceeding

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
export async function viewAllDepartments(): Promise<void> {
  try {
    const sql = 'SELECT id, name FROM department';
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error displaying Departments', error);
  }
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
export async function viewAllRoles(): Promise<void> {
  try {
    const sql = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      JOIN department ON role.department_id = department.id;
    `;
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error displaying Roles', error);
  }
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
export async function viewAllEmployees(): Promise<void> {
  try {
    const sql = `
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager
      FROM employee
      JOIN role ON employee.role_id = role.id
      JOIN department ON role.department_id = department.id;
    `;
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error displaying Employees', error);
  }
}