// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const favicon = require('serve-favicon');
// const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Setup Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
