-- Pre Populate department table with data
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- Pre Populate role table with data
-- Here, department_id references what id that role is part of in the department table
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

-- Pre Populate employee table with data
-- Here, role_id references what id that depaertment is part of in the role table
-- Here, manager_id references what the id of the manager is in the department they are in
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodrigues', 3, NULL),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5, NULL),
       ('Malia', 'Brown', 6, 5),
       ('Sarah', 'Lourd', 7, NULL),
       ('Tom', 'Allen', 8, 7);