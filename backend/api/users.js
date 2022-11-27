const UserController = require("../controllers/users");
const express = require("express");
const UserController2 = require("../controllers/users2");
var authorize = require('../controllers/permisos')


// API routes
const router = express.Router();

//llamar a todos los usuarios
router.get("/all", UserController.findAllUsers);

//llamar usuario por id
router.get("/:id", UserController.findById);

//aderir usuarios estacionamiento
router.post("/add",UserController.addUser);

//eliminar usuarios estacionamiento
router.delete("/:id",authorize(['OPERADOR','ADMIN']), UserController.deleteUser);
//solo agregar operarios o admin para postman
router.post('/nuevo-usuario',UserController2.addUser2);
//autenticar login 
router.post('/autenticate',UserController2.autUser2)




module.exports = router;