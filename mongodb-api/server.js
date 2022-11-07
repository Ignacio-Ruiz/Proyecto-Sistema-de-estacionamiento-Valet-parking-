
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require('cors')
const Users= require("./api/users");
const mongoose = require('mongoose');

var app = express();

mongoose.connect(
  "mongodb://localhost/usuarios",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log(`ERROR: Connecting to DB ${err}`);
    app.listen(3000, () =>
      console.log("Node server running on http://localhost:3000")
    );
  }
);

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', Users);

module.exports = app;
