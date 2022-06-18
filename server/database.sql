CREATE DATABASE TODOLIST;

CREATE TABLE todo(
	todo_id SERIAL PRIMARY KEY, title VARCHAR(100) NOT NULL,
	description VARCHAR(255), time_created TIMESTAMP, time_due TIMESTAMP,
	completed boolean DEFAULT false
);
