'use strict';

// pg pool config
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'dockeruser',
  host: 'db',
  database: 'api',
  password: 'docker',
  max: 10,
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// execute sql query
const executeQuery = (sql, param, cb) => {
    pool.connect((err, client, release) => {
      if (err) { 
        console.error('Error acquiring client', err.stack);
        cb(false);
        return;
      }
      client.query(sql, param, (error, result) => {
         release();
         if (error) {
            console.error('Error executing a query', error.stack);
            cb(false);
            return;
         }
         cb(result);
      });
  });
};

module.exports = {
  executeQuery
};

