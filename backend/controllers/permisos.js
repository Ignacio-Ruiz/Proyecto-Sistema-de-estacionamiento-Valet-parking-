'use strict';
var jwt = require("jsonwebtoken")
var Users = require('../models/User2')

const authorize = (role) =>
 function(req, res, next) {
  const token =

    req.body.token || req.query.token || req.headers["x-access-token"];

  console.log(req.body.token);


  if (!token) {
    return res.status(403).send("Se necesita un token para autentificar");
  }
  try {
    const decoded = jwt.verify(token,'secret', process.env.JWT_KEY);
    console.log(decoded)
    if(role.length > 0){
      
      Users.findOne({Username: decoded.Username})
        .then((user) => {
          let allowed = false 
          console.log(user.role, user.Username)
          for (const r of user.role){
            if (role.includes(r))
              allowed = true
          }
          if (allowed){
            return next()
          }else{
            return res.status(401).send('Usuario no tiene permisos para realizar la operación')
          }
        })
    }else{
      return next()
      }
  } catch (err) {
    return res.status(401).send("Token invalido");
  }
};


module.exports = authorize