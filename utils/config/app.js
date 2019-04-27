const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const prod = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors({
  origin: ['*', /localhost:/, /\.example\.com/],
  credentials: true
}));

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (prod) {
  app.use(require('helmet'));
  app.use(require('compression'));
} else {
  app.use(require('errorhandler')());
  app.use(require('morgan')('dev'));
}

module.exports = app;