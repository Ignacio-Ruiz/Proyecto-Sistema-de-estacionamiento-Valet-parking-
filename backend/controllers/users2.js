
const mongoose = require("mongoose");
const User2 = require("../models/User2");
var jwt = require('jsonwebtoken')
;


//adherir nuevo usuario admin u operario
const addUser2= (req, res) => {
  
    let user2 = new User2({

      Username: req.body.Username,
      role: req.body.role,
      password: req.body.password


    });
    user2.save((err, usr) => {
        err && res.status(500).send(err.message);
        res.status(200).json(usr);
      });

    }

//autenticar y crear token 
          const autUser2= (req, res) => {

            console.log(req.body)
            User2.findOne({Username: req.body.Username})
           .then((user => {
             if (!user || !user.comparePassword(req.body.password)) {
                 return res.status(401).json({ message: 'Usuario o contraseña erroneos' });
             }


              const token = jwt.sign({
                Username: user.Username, user_id: user._id, role: user.role,
              }, 'secret',process.env.JWT_KEY, { expiresIn: "7d"}) // Expira en 7 d�as
              user.token = token
              return res.status(200).json({
                Username: user.Username, user_id: user._id, role: user.role,
                token: token,
                message:"ok"
                
              })
             
              
             
           }))
           .catch ((error) => {
            console.log(error) 
          })

          }
          
          
        
/* GET users listing. */
const verUser2=  function(req, res, next) {
  res.send('respond with a resource');
};






module.exports = {addUser2, autUser2,verUser2};