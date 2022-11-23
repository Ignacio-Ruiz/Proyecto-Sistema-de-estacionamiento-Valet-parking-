
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VarSchema = new Schema({
 
  precioM: { type: String },
  cantidadAutos: { type: String },
});

module.exports = Var = mongoose.model('Variables', VarSchema);