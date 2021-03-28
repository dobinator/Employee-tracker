--departments

INSERT INTO department (id, name)
VALUES (1, Legal);

INSERT INTO department (id, name)
VALUES (2, Engineering);

INSERT INTO department (id, name)
VALUES (3, Finance);

INSERT INTO department (id, name)
VALUES (4, Sales);

--role 

INSERT INTO role (id, title, salary, departmentId)
VALUES (1, "Sales Lead", 100000, 4)

INSERT INTO role (id, title, salary, departmentId)
VALUES (2, "Salesperson", 80000, 4)

INSERT INTO role (id, title, salary, departmentId)
VALUES(3,"Lead Engineering", 150000, 2)

INSERT INTO role (id, title, salary, departmentId)
VALUES (4, "Software Engineer", 120000, 2)

INSERT INTO role (id, title, salary, departmentId)
VALUES(5, "Accountant", 125000, 3)

INSERT INTO role (id, title, salary, departmentId)
VALUES(6, "Legal Team Lead", 250000, 1)

INSERT INTO role (id, title, salary, departmentId)
VALUES(7, "Lawyer", 190000, 1)



--employee seeds

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (11,"Frida","Gist", 1, 3);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (12,"Steve","Johnson", 2, 11);

INSERT INTO employee (id, firstName,lastName,roleId, managerId )
VALUES (13,"Jason","Wong", 3, NULL);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (14,"Patricia","Underwood",4, 13);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (15,"Manuel","Rodiquez",5, NULL);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (16,"DeAndre","Washington", 6, NULL);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (17,"Claire","McDonald", 7, 16);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (18,"Gretchen","Jacobs", 3, 11);

INSERT INTO employee (id, firstName,lastName,roleId, managerId)
VALUES (19,"Todd", "Hughes", 4, 11);


