// Import necessary modules and exports 
import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

// Establishes connection to Database before doing anything else
await connectToDb();

// Set up server environment variables and Express instance
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API ROUTES

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
export async function viewAllDepartments(): Promise<void> {
  try {
    const sql = 'SELECT * FROM department';
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error fetching departments:', error);
  }
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
export async function viewAllRoles(): Promise<void> {
  try {
    const sql = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      JOIN department ON role.department_id = department.id
    `;
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
export async function viewAllEmployees(): Promise<void> {
  try {
    const sql = `
      SELECT e.id, e.first_name, e.last_name, role.title AS job_title, department.name AS department,
             role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      JOIN role ON e.role_id = role.id
      JOIN department ON role.department_id = department.id
      LEFT JOIN employee m ON e.manager_id = m.id
    `;
    const result: QueryResult = await pool.query(sql);
    console.table(result.rows);
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Default response for any other request (Not Found)
app.use((_req, res) => {
  res.status(404).end();
});

// Starts server and listes for requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});