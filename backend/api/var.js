const ProfileController3 = require("../controllers/variables");
const express = require("express");

// API routes
const router = express.Router();


router.get("/all", ProfileController3.findAllVars);
router.post("/add",ProfileController3.addVar);
router.patch("/:id",ProfileController3.editVar)

module.exports = router;
