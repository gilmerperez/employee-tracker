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

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
app.get('/api/department', (_req, res) => {
    const sql = `SELECT * FROM department`;
  
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const { rows } = result;
      res.json({
        message: 'Success!',
        data: rows
      });
    });
  });

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
app.get('/api/role', (_req, res) => {
    const sql = `SELECT * FROM role`;
  
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const { rows } = result;
      res.json({
        message: 'Success!',
        data: rows
      });
    });
  });

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
app.get('/api/employee', (_req, res) => {
    const sql = `SELECT * FROM employee`;
  
    pool.query(sql, (err: Error, result: QueryResult) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const { rows } = result;
      res.json({
        message: 'Success!',
        data: rows
      });
    });
  });

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// Default response for any other request (Not Found)
app.use((_req, res) => {
    res.status(404).end();
});

// Starts server and listes for requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});