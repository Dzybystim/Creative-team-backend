const express = require("express");
const { petController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.post("/", authMiddleware, asyncHandler(petController.addPet));
router.delete("/:petId", authMiddleware, asyncHandler(petController.deletePet));

module.exports = router;
