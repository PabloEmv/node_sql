CREATE DATABASE if NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11)NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO  companydb.employee (  ) VALUES
(1, 'Juan', 1000),
(2, 'John', 2000),
(3, 'pedro', 50000);

SELECT * FROM companydb.employee;