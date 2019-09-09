'use strict';

const handlers = require('./rest_handlers');

const route = (app) => {

  // index of main app - for example
  app.get('/', (request, response) => {
     response.json({ info: 'Node.js, Express, and Postgres REST API' })
  });

  // REST api routing
  app.route('/api/v1/persons')
    .get(handlers.getPerson)
    .post(handlers.postPerson);
};

module.exports = {
  route
};