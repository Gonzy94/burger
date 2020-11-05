// Hides mysql password in .env file
require('dotenv').config()

const express = require('express');
const connection = require('./config/connection');

const app = express();

var PORT = process.env.PORT || 8080;

const expbs = require('express-handlebars');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use(routes);


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log(connection.threadId);
  });
  
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  