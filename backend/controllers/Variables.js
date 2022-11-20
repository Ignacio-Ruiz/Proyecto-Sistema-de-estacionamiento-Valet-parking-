const mongoose = require("mongoose");
const Var = require('../models/Variables');

const editVar =(req,res)=>{

    let precioM = req.body.precioM
    let canAutos = req.body.canAutos

    console.log(precioM, canAutos);
    

}

module.exports = {editVar};