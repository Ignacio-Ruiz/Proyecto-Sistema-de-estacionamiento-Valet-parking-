
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require('cors')
const Users= require("./api/users");
const Vars = require("./api/var")
const mongoose = require('mongoose');


var app = express();

mongoose.connect(
  "mongodb://localhost/usuarios",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log(`ERROR: Connecting to DB ${err}`);
    app.listen(3000, () =>
      console.log("mongodb conected!!")
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


//rutas
app.use('/api/users', Users);
app.use('/api/vars', Vars);

module.exports = app;
