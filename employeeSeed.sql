
DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30),
department_manager VARCHAR (50),
PRIMARY KEY (id)
); 

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL, 
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR (30) NULL,
role_id INT,
manager_id INT,
PRIMARY KEY (id)
); 

--add seeds here
--departments:

INSERT INTO department (id, department_name, department_manager)
VALUES (1, "Legal","DeAndre Washington");

INSERT INTO department (id, department_name, department_manager)
VALUES (2, "Engineering","Jason Wong");

INSERT INTO department (id, department_name,department_manager)
VALUES (3, "Finance", "Manuel Rodiquez");

INSERT INTO department (id, department_name, department_manager)
VALUES (4, "Sales", "Tevin Hughes" );

--role:

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 4)

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Salesperson", 80000, 4)

INSERT INTO role (id, title, salary, department_id)
VALUES(3,"Lead Engineering", 150000, 2)

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Software Engineer", 120000, 2)

INSERT INTO role (id, title, salary, department_id)
VALUES(5, "Accountant", 125000, 3)

INSERT INTO role (id, title, salary, department_id)
VALUES(6, "Legal Team Lead", 250000, 1)

INSERT INTO role (id, title, salary, department_id)
VALUES(7, "Lawyer", 190000, 1)

INSERT INTO role (id, title, salary, department_id)
VALUES(7, "Senior Sales", 190000, 4)


--employee seeds

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Frida","Gist", 1);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Steve","Johnson", 2);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Jason","Wong", 3, NULL);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Patricia","Underwood", 4);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Manuel","Rodiquez", 5, NULL);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("DeAndre","Washington", 6, NULL);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Satish","Kapu", 7);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Gretchen","Song", 3);

INSERT INTO employee (id, first_name,last_name,role_id, manager_id)
VALUES ("Tevin", "Hughes", 4,  NULL);





SELECT * department
SELECT * roles
SELECT * employee


SELECT employees.id, first_name, last_name, title, department_name, department_manager, salary 
FROM employees JOIN roles 
ON employees.role_id = roles.id JOIN department ON roles.department_id= department.id;