const express = require("express");
const { petController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.post("/pet/", authMiddleware, petController.addPet);
router.delete("/pet/:petId", authMiddleware, petController.deletePet);

module.exports = router;
