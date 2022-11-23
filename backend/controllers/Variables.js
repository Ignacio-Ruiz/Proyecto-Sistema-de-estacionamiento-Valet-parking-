const mongoose = require("mongoose");
const Vars = require('../models/Var');

const findAllVars = (req, res) => {
    Vars.find((err, users) => {
    err && res.status(500).send(err.message);
    res.status(200).json(users);
    });
};


const addVar= (req, res) => {

    console.log(req.body)

    let Var = new Vars({

    precioM: req.body.precioM,
    cantidadAutos: req.body.cantidadAutos,

    });

    console.log("este es var"+Var)
 
    Var.save((err, usr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
      });

    }

    const editVar= (req, res) =>{
        let id =req.params.id;
        try {

            let usuarioDB = Vars.findByIdAndUpdate(id, req.body);
            res.status(200).send(usuarioDB);
            
        } catch (error) {

            res.status(500).send(usuarioDB);
         
            
        }

    }


  
module.exports = { addVar,findAllVars,editVar};
