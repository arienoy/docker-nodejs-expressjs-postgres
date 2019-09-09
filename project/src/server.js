'use strict';

// config constants 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const port = 4000;

// setting the json parsing
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// routing
router.route(app);

// start app
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});


