-- Pre Populate department table with data
INSERT INTO department (name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

-- Pre Populate role table with data
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
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1),
       ('Mike', 'Chan', 2, 1),
       ('Ashley', 'Rodrigues', 3),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5),
       ('Malia', 'Brown', 6, 5),
       ('Sarah', 'Lourd', 7),
       ('Tom', 'Allen', 8, 7);