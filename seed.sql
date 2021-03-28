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


