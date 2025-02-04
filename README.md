# Employee Tracker Using PostgreSQL

## Description

The Employee Tracker is a command-line application designed to manage a company's employee database. It allows users to interact with the database and perform CRUD (Create, Read, Update, Delete) operations related to employees, roles, and departments. This tool is aimed at business owners and managers who need an efficient and organized way to track employees, their roles, and their respective departments within the company.

The application utilizes a PostgreSQL database to store and retrieve information on employees, roles, and departments. The Inquirer package is used for creating an interactive CLI (Command-Line Interface), allowing users to select various options such as adding a new department, updating employee roles, or viewing all employees.

The project meets all the acceptance criteria outlined in the user story, ensuring that the business owner can easily manage the business's workforce through a structured and user-friendly command-line interface. This application enhances productivity by providing quick access to essential employee-related data, enabling better business planning and organization.

## Table of Contents

- [Usage](#usage)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Usage

To start the application, run the following command in your terminal:

```bash
npm install
npm run start
```

## Instructions 

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
cd <repository_folder>
```

2. Install dependencies

```bash
npm install
```

3. Create a PostgreSQL database and configure your .env file with your PostgreSQL credentials.

4. Populate the database using the seeds.sql file or manually insert initial data as per the schema.

5. Start the application:

```bash
npm run start
```

6. Use the interactive menu to:

* View all Departments

* View all Roles

* View all Employees

* Add a Department

* Add a Role

* Add an Employee

* Update an Employee's Role

## Key Features

* View all departments and their IDs.

* View all roles with job titles, department, and salary information.

* View a list of all employees, their roles, and manager information.

* Add new departments, roles, and employees to the database.

* Update employee roles based on their ID.

* The application allows non-developers to manage their workforce easily through a CLI interface.

## Technology Stack

This project relies on the following tools and technologies:

* **Node.js:** A JavaScript runtime used to build the command-line application and handle asynchronous database queries.

* **Inquirer (v8.2.4):** A package for creating interactive prompts in the command line to gather user input.

* **PostgreSQL:** A powerful relational database management system used to store employee, role, and department data.

* **pg:** The PostgreSQL client for Node.js, used to connect and query the PostgreSQL database asynchronously.

## Additional Resources

* A Walkthrough Video that demonstrates the functionality of the application: [Walkthrough Video Link](https://drive.google.com/file/d/15Icov362B976wsK14DfhUPXOGE5zEZHp/view?usp=drive_link)

* The URL of the GitHub repository: [GitHub Repository](https://github.com/gilmerperez/employee-tracker)

* Inquirer Documentation: [Inquirer.js](https://www.npmjs.com/package/inquirer)

* pg Package Documentation: [pg](https://www.npmjs.com/package/pg)

* PostgreSQL Documentation: [PostgreSQL](https://www.postgresql.org/docs/)

* Video Submission Guide: Video [Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)