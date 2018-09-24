// Main dependencies
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

// Local constants
const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || `localhost:${PORT}`;

// Serve up front end
app.use(serveStatic(__dirname + '/dist'));

// Start server
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
