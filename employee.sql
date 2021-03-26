CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
); 

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR (30),
salary DECIMAL () NULL, 
department_id INT 
);

CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR (30),
role_id INT,
manager_id INT, 
); 
