CREATE DATABASE employee_DB;
USE employee_DB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
); 

CREATE TABLE role (
id INT PRIMARY KEY,
title VARCHAR (30),
salary DECIMAL () NULL, 
departmentId INT 
);

CREATE TABLE employee (
id INT PRIMARY KEY,
firstName VARCHAR(30),
lastName VARCHAR (30),
roleId INT,
managerId INT, 
); 
