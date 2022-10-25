var express = require('express');
var router = express.Router();
 
router.post('/', function(req, res, _) {
  let system = req.body.system
  let rut = req.body.rut
  let nombre = req.body.nombre
  let apellido = req.body.apellido
  let patente = req.body.patente
  res.status(200).json(rut, nombre, apellido, patente)
});
module.exports = router;