create app/local_config.js 

$ brew install postgres
$ brew install psql
$ createdb

$ psql
frankbowers=# create user frank;
CREATE ROLE
frankbowers=# alter user frank with password '123';
ALTER ROLE
frankbowers=# create database headcountdb owner frank;
CREATE DATABASE
frankbowers-# \q
headcount $ nodemon bin/www