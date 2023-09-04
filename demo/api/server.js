// This will create a new logger in the namespace of your choosing...
// 'API: logging' is the namespace in this example.
// Switching the name space enables/disables logging —> i.e. update nodemon.json
const log = require('debug')('API:logging'); 
// get the express application
const app = require('./app');
// set the port to environment variable or 4000
// Changing from port 3000, because that's the default for React!
const port = process.env.PORT || 4000;
// spin up server and log what port it is running on
app.listen(port, () => log(`API listening on port ${port}!`));
