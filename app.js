const express = require('express');
const app = express();
require('./src/models');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//rotas

//middleware
const errorHandler = require('./src/middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;