CREATE DATABASE ToDo;
USE ToDo;
CREATE TABLE personas(
	PersonaID int NOT NULL AUTO_INCREMENT,
	Nombre varchar(255) NOT NULL,
	Apellido varchar(255) NOT NULL,
	Correo varchar(255) NOT NULL,
	Usuario varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	PRIMARY KEY (PersonaID)
	);
CREATE TABLE todos(
	todoID int NOT NULL AUTO_INCREMENT,
	PersonaID int NOT NULL,
	Titulo varchar(255) NOT NULL,
	Descripcion text,
	Completada TINYINT(1) DEFAULT 0,
	Fecha TIMESTAMP,
	PRIMARY KEY(todoID),
	FOREIGN KEY(PersonaID) REFERENCES personas(PersonaID)
	);

-- DATOS DE PRUEBA DE LA BASE DE DATOS CON LA API

-- PERSONAS

INSERT INTO personas(
	Nombre,
	Apellido,
	Correo,
	Usuario,
	Password) VALUES (
	"Juan",
	"Negrin",
	"juancnegrin73@gmail.com",
	"Caphyr",
	"juan73");

INSERT INTO personas(
	Nombre,
	Apellido,
	Correo,
	Usuario,
	Password) VALUES (
	"Emanuel",
	"Di Cristofaro",
	"emanuel@gmail.com",
	"Emanuel",
	"test123");

INSERT INTO personas(
	Nombre,
	Apellido,
	Correo,
	Usuario,
	Password) VALUES (
	"Pedro",
	"De Leon",
	"pedri@gmail.com",
	"Pedrin",
	"testpedrin");

-- TO-DO's

INSERT INTO todos(
	PersonaID,
	Titulo,
	Descripcion,
	Completada) VALUES(
	1,
	"Comprar carbon y chorizo.",
	"Ir al supermercado por carbon para parrilla",
	0);
INSERT INTO todos(
	PersonaID,
	Titulo,
	Descripcion,
	Completada) VALUES(
	1,
	"Lavar el carro",
	"",
	0);
INSERT INTO todos(
	PersonaID,
	Titulo,
	Descripcion,
	Completada) VALUES(
	2,
	"Proyecto de Sistemas",
	"",
	0);
INSERT INTO todos(
	PersonaID,
	Titulo,
	Descripcion,
	Completada) VALUES(
	2,
	"Comprar pan",
	"",
	0);
INSERT INTO todos(
	PersonaID,
	Titulo,
	Descripcion,
	Completada) VALUES(
	3,
	"Ver partido",
	"",
	0);
