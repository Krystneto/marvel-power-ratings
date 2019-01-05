'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const routes = require('./api/routes');


app.use('/.netlify/functions/server/api', routes);  // path must route to lambda

 
module.exports = app;
module.exports.handler = serverless(app);
