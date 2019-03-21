// top spot recommended for 'dontenv' import (put at top of page anywhere environment (env) values are used)
require('dotenv').config();
const server = require('./api/server.js');

// make the port dynamic #1
// use process.env.PORT otherwise use 4000
// yarn add dotenv  
// .env will only work locally (gitignore will remove .env when deployed)
// heroku.=> settings => config vars => GREETING: hellow from heroku (key:value)
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING
server.listen(port, () => {
  console.log(`\n*** ${greeting} on http://localhost:${port} ***\n`);
});
