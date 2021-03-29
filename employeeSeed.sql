
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



INSERT INTO department ( department_name, department_manager)
VALUES ( "Legal","DeAndre Washington");

INSERT INTO department ( department_name, department_manager)
VALUES ( "Engineering","Jason Wong");

INSERT INTO department ( department_name,department_manager)
VALUES ( "Finance", "Manuel Rodiquez");

INSERT INTO department ( department_name, department_manager)
VALUES ( "Sales", "Tevin Hughes" );

INSERT INTO roles ( title, salary, department_id)
VALUES ( "Sales Lead", 100000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES("Lead Engineering", 150000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ( "Software Engineer", 120000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES( "Accountant", 125000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES( "Legal Team Lead", 250000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES( "Lawyer", 190000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES( "Senior Sales", 190000, 4);

INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES ("Frida","Gist", 1, 8);

INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES ("Steve","Johnson", 2, 5);

INSERT INTO employees ( first_name,last_name,role_id, manager_id)
VALUES ("Jason","Wong", 3, NULL);

INSERT INTO employees ( first_name,last_name,role_id, manager_id)
VALUES ( "Patricia","Underwood", 4, 2);

INSERT INTO employees ( first_name,last_name,role_id, manager_id)
VALUES ("Manuel","Rodiquez", 5, NULL);

INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES ("DeAndre","Washington", 6, NULL);

INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES ("Satish","Kapu", 7, 6);

INSERT INTO employees (first_name,last_name,role_id, manager_id)
VALUES ("Gretchen","Song", 4, 3);

INSERT INTO employees ( first_name,last_name,role_id, manager_id)
VALUES ("Tevin", "Hughes", 4,  NULL);



SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employees;


SELECT employees.id, first_name, last_name, title, department_name, department_manager, salary 
FROM employees JOIN roles 
ON employees.role_id = roles.id JOIN department ON roles.department_id= department.id;