const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  precioM: { type: String },
  canAutos: { type: String }
});

module.exports = Var = mongoose.model('Var', UserSchema);