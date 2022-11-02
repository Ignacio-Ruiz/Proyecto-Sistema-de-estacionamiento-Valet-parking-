const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users= require("./api/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", Users);

mongoose.connect(
  "mongodb://localhost/usuarios",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log(`ERROR: Connecting to DB ${err}`);
    app.listen(27017, () =>
      console.log("Node server running on http://localhost:3000")
    );
  }
);