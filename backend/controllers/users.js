const mongoose = require("mongoose");
const User = require("../models/User");

//funcion para llamar a todos los usuarios
    const findAllUsers = (req, res) => {
        User.find((err, users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
        });
    };

//funcion para llamar a un solo usuario por la id 
  const findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);
      
  
      res.status(200).json(user);
    });
  };
  //funcion para guardar usuarios
  const addUser= (req, res) => {
  
    let user = new User({

        _id: req.body._id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      time: req.body.time,
      date3:req.body.date3,

    });
 
    user.save((err, usr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
      });

    }

//funcion para eliminar usuarios si el id es igual
    const deleteUser = (req, res) => {
      User.findById(req.params.id, (err, user) => {
        user.remove((err) => {
          if (err) return res.status(500).send(err.message);
          res.status(200).send();
        });
      });
    };



    
module.exports = { findAllUsers, findById,addUser,deleteUser};