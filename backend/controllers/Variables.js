const mongoose = require("mongoose");
const Var = require('../models/Variables');

const User = require("../models/User");


const GuarVar =(req,res)=>{

    let edit = new Var({
        precioM : req.body.precioM,
        canAutos : req.body.canAutos
    });
 
    edit.save((err, usr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
      });

}
    
module.exports = {GuarVar};