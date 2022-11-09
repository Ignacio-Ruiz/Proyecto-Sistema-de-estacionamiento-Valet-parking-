const mongoose = require("mongoose");
const User = require("../models/User");


    const findAllUsers = (req, res) => {
        User.find((err, users) => {
        err && res.status(500).send(err.message);
    
        
        res.status(200).json(users);
        });
    };

  const findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);
      
  
      res.status(200).json(user);
    });
  };
  
  const addUser= (req, res) => {
  
    let user = new User({

    
        _id: req.body._id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      patente: req.body.patente,
      time: req.body.time,
      time1: req.body.time1,

    });
 
    user.save((err, usr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
      });

    }


    const deleteUser = (req, res) => {
      User.findById(req.params.id, (err, user) => {
        user.remove((err) => {
          if (err) return res.status(500).send(err.message);
          res.status(200).send();
        });
      });
    };

    
module.exports = { findAllUsers, findById,addUser,deleteUser};