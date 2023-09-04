// Pull in the express package
const express = require('express');
// Add Loggers... To enable/disable, update DEBUG env variable (nodemon.json)
const log = require('debug')('API:App Logging - Example debug Output'); // For general logs
const logErrors = require('debug')('API: Error Logging - Another Example debug Output'); // For error logs
const path = require('path'); // We'll use this to be sure of our paths
// Log all requests made to server...
const morganDebug = require('morgan-debug');
const cors = require('cors');
const { error } = require('console');
// Pull in EXAMPLE routers
const decisionRouter = require('./routes/decisions');
const optionRouter = require('./routes/options');

// Create an Express app
const app = express();

// Checks to see if the content-type is json and parses it into req.body
app.use(express.json());
// Log all requests
// morganDebeg will log all requests
app.use(morganDebug('API:request - this printout from morganDebug', 'dev'));
app.use(cors()); // Basic setup of cors for cross origin resource sharing

// USE ROUTERS **********************
// Routers are useful for organizing/grouping end points
app.use('/decisions', decisionRouter);
app.use('/options', optionRouter);

// ROUTING **************************
// This example shows handling incoming traffic immediately
// which is slightly different than pointing to a router (shown above)
app.use('/about', (req, res, next) => {
  log('RUNS WHEN incoming req for "about" page endpoint');
  res.status('200').send('Ok!');
  next(new Error('Not Authorized!'));
});

// STATIC FILES **********************
// Initially when setting up an API, we may want to point to a static HTML page
// Eventually we will want to incorporates REACT's build folder (see below)
// The path to public is relative to the directory where the node process was run
// app.use(express.static('public'));
// You can always specify an exact location...
// app.use('/', express.static(path.join(__dirname, 'public')));
// Below, is an example of explicitly pointing to a
// static build folder directory, instead of using 'public'

// Pointing to REACT STATIC FILES  *************************************
// When ready to incorporate React...
// Include React's Default Build Directory!
// We use express.static to let express know where to find static assets.
// The React front-end has a build folder for static assets.
// To inform our API, we can point to that location
app.use(express.static(path.join(__dirname, '../../reactjs/build')));

// ***********************Testing a route that will fail - i.e. produce an error.
app.get('/test', () => {
  // Example...
  // You could use the error method of the
  // Console class to print out to Terminal.
  const code = '05'; // Just demonstrating - the code could be anything you wish.
  error('  Example console.error printout to stderr with newline and code: ', code);
  throw new Error('BROKEN'); // Express will catch this on its own.
});

// REACT ROUTING
// Since we are using React Router's browser router, when a user goes to a page in our react app,
// the URL is rewritten to match that route. This means that if a user refreshes the page on any of
// our react routes, we need to respond with the index.html page of our react app so that react can
// load the JS files and handle routing on the front-end. This code tells express, that for any
// GET requests that come in, serve up the index.html file in the React build folder.
//
// You must put this code below all your other routes so that only GET requests that
// don't match your API are sent to the index.html file. Think of this as your default page.
// This same approach could be used to setup a page not found error with a redirect link.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../reactjs/build', 'index.html'));
});

// DEFAULT ERROR HANDLER ****************************
// Four params indicate an error handler...
// Using eslint to disable no unused params error...
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  logErrors('ERROR FOUND: ', err.message);
  log('Example of using another logger for general messages');
  // res.sendStatus(500); // Careful! ——> 'sendStatus' will END the request / response cycle
  res.status(err.code || 500).json({
    message: err.message,
    err,
  });
});

// Export the Express app
module.exports = app;
