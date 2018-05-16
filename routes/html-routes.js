// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// const path = require('path');

// Routes
// =============================================================
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Render home page
  app.get('/', (req, res) => {
    res.render('home');
  });
};
