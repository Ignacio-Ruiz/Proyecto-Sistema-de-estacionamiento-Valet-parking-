const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    rut: { type: String },
  nombre: { type: String },
  apellido: { type: String },
  patente: { type: String },
 
  
 
});

module.exports = User = mongoose.model('User', UserSchema);