const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
    _id: { type: String },
  nombre: { type: String },
  apellido: { type: String },
  patente: { type: String },
  time: { type: String },
  time1: { type: String },
  precio:{type:String},
  date3:{type:String}
 
  
 
});

module.exports = User = mongoose.model('User', UserSchema);