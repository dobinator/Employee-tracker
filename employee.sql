
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
SELECT * department
SELECT * roles
SELECT * employee


SELECT employees.id, first_name, last_name, title, department_name, department_manager, salary 
FROM employees JOIN roles 
ON employees.role_id = roles.id JOIN department ON roles.department_id= department.id;