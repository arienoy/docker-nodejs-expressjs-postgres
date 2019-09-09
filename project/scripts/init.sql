CREATE TABLE persons (
  name VARCHAR(30),
  age int CHECK (age > 0),
  PRIMARY KEY (name, age)
);