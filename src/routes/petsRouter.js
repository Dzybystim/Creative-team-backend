const express = require("express");
const { petController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");
const { petSchema } = require("../schemas/joiValidation");
const validation = require("../middlewares/validation");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validation(petSchema),
  asyncHandler(petController.addPet)
);
router.delete("/:petId", authMiddleware, asyncHandler(petController.deletePet));

module.exports = router;
