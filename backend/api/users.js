const UserController = require("../controllers/users");
const express = require("express");

// API routes
const router = express.Router();



router.get("/all", UserController.findAllUsers);

router.get("/:id", UserController.findById);

router.post("/add",UserController.addUser);

router.delete("/:id", UserController.deleteUser);



module.exports = router;