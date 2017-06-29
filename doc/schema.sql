#SHOW DATABASES; pour voir les bases existantes.
#SHOW TABLE; pour voir les tables. 

CREATE DATABASE Mascotte_db; #creation of database
USE Mascotte_db; #go on database

#create table name students
CREATE TABLE reservation (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    firstname VARCHAR(128), 
    lastname VARCHAR(128),
    jour DATE NOT NULL, 
    heure TIME NOT NULL, 
    nb_couvert INT NOT NULL
);