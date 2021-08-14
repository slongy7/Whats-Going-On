DROP DATABASE IF EXISTS WGO_DB;

CREATE DATABASE WGO_DB;

USE WGO_DB;


-- CREATE TABLE USER(
--     id INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(30) NOT NULL,
--     first_name VARCHAR(100) NOT NULL,
--     last_name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     pw VARCHAR(30) NOT NULL,
--     PRIMARY KEY (id)
-- );


-- CREATE TABLE BUSINESS(
--     id VARCHAR(100) NOT NULL,
--     name VARCHAR(100) NOT NULL,
--     address VARCHAR(100),
--     city VARCHAR(100) NOT NULL,
--     zip VARCHAR(100),
--     category VARCHAR(100) NOT NULL,
--     phone VARCHAR(12),
--     isOpen BOOLEAN NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE POSTS(
--     id INT NOT NULL AUTO_INCREMENT,
--     crowded BOOLEAN,
--     masks BOOLEAN,
--     entertainment BOOLEAN,
--     specials VARCHAR(100),
--     quality INT,
--     cleanliness INT,
--     addComment VARCHAR,
--     busId VARCHAR NOT NULL,
--     FOREIGN KEY (busId),
--     REFERENCES BUSINESS(id),
--     userId INT NOT NULL,
--     FOREIGN KEY (userId),
--     REFERENCES USER(id),
--     PRIMARY KEY (id)
-- );
