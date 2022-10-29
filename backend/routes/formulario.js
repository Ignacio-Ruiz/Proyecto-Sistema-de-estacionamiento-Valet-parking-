var express = require('express');
var router = express.Router();
 
router.post('/', function(req, res, _) {
  let system = req.body.system
  let rut = req.body.rut
  let nombre = req.body.nombre
  let apellido = req.body.apellido
  let patente = req.body.patente
  let autos =10
  if (autos != 0) {
    autos-1
  }
  res.status(200).json({rut:rut,nombre:nombre,apellido:apellido,patente:patente, autos:autos})

});

module.exports = router;