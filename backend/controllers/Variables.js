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

    function editVar (req, res){
        let id = req.params.id;
        let body = req.body;
        console.log(id)
      
       
          // {new:true} nos devuelve el usuario actualizado
        Vars.findOneAndUpdate(id, body, function(err,vari){

            if(err){
                res.status(500).send({message: 'Error 500'});
            }else{
                res.status(200).send(vari);	
            }
        });
    }
    

  
module.exports = { addVar,findAllVars,editVar};
