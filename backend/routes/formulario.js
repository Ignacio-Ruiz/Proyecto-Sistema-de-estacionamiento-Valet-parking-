var express = require('express');
var router = express.Router();
 
router.post('/formulario', function(req, res, _) {
  let system = req.body.system
  let rut = req.body.rut
  res.status(200).json(rut)
});

router.post('/formulario', function(req, res, _) {
  let system = req.body.system
  let nombre = req.body.nombre
  res.status(200).json(nombre)
});

router.post('/formulario', function(req, res, _) {
  let system = req.body.system
  let apellido = req.body.apellido
  res.status(200).json(apellido)
});

router.post('/formulario', function(req, res, _) {
  let system = req.body.system
  let patente = req.body.patente
  res.status(200).json(patente)
});

module.exports = router;