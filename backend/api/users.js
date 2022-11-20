const UserController = require("../controllers/users");
const express = require("express");
const UserController2 = require("../controllers/users2");
var authorize = require('../controllers/permisos')
//const {verificarAuth} = require('../middlewares/autenticacion.js');

// API routes
const router = express.Router();

//llamar a todos los usuarios
router.get("/all", UserController.findAllUsers);

//llamar usuario por id
router.get("/:id",authorize(['OPERADOR','ADMIN']), UserController.findById);

//aderir usuarios estacionamiento
router.post("/add",UserController.addUser);

//eliminar usuarios estacionamiento
router.delete("/:id",authorize(['OPERADOR','ADMIN']), UserController.deleteUser);


// crear nuevos operadores o admins
router.post('/nuevo-usuario',UserController2.addUser2);
//autenticar login 
router.post('/autenticate',UserController2.autUser2)
//router.get('/', UserController2.verUser3);
//autenticar usuario
//router.post('/autenticar',UserController2.autUser2);



module.exports = router;