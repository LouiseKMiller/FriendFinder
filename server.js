// HOMEWORK WEEK 13 - FRIEND FINDER
// UT BOOT CAMP
// LOUISE K MILLER

// ==============================================================================
// DEPENDENCIES
// Node Package Modules
// ==============================================================================

// import Node File System module express - a fast, unopinionated, minimalist web framework
var express = require('express');
// import Node File System module body-parser - body parsing middleware.  It parses
//    incoming request bodies in a middleware before your handlers
var bodyParser = require('body-parser');
// import Node File System module path - provides utilities for working with file and directory paths
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express(); // Call the express function to create an application instance
var PORT = process.env.PORT || 3000; // Sets an initial port to whatever is in the
     // environment variable PORT (e.g., in Heroku, Nodejitsu, and AWS), or 3000 if this variable
     // is not set. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.

app.use(bodyParser.json());  // middleware that only parses JSON
app.use(bodyParser.urlencoded({extended: true})); // middleware that only parses urlencoded bodies.
     // extended set true so parsing with qs library.  Allows for rich objects and arrays to be
     // encoded into the URL-encoded format.
app.use(bodyParser.text());  // middleware that parses all bodies as string
app.use(bodyParser.json({type:'application/vnd.api+json'})); // the type option is used to determine
	// what media type the middleware will parse.


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});