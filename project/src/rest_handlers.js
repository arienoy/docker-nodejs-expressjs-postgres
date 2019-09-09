'use strict';

// config constant
const sqlQuery = require('./pg_pool');

// get (expected format: http://<host>:<port>/api/v1/persons/?age=<value> )
const getPerson = (request, response) => {
  
  const age = parseInt(request.query.age);

  sqlQuery.executeQuery('SELECT * FROM persons WHERE age= $1', [age], (queryResult) => {
     if(queryResult)
        response.status(200).send(queryResult.rows);
     else
        response.status(404).send('request failed');
  });
};

// post (expected format: http://<host>:<port>/api/v1/persons  , content-type: application/json, request: post, data: {'name':'<name>', 'age':<age>'} )
const postPerson = (request, response) => {

  const { name, age } = request.body;

  sqlQuery.executeQuery('INSERT INTO persons (name, age) VALUES ($1, $2)', [name, age], (queryResult) => {
    if(queryResult)
        response.status(201).send( `Person added with name: ${name} & age: ${age}`);
     else
        response.status(500).send('request failed');
  });
};

module.exports = {
  getPerson,
  postPerson
};
