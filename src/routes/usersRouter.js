const express = require("express");
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");
const { authSchema, userSchema } = require("../schemas/joiValidation");
const validation = require("../middlewares/validation");

const router = express.Router();

router.post(
  "/signup",
  validation(userSchema),
  asyncHandler(userController.signup)
);
router.post(
  "/login",
  validation(authSchema),
  asyncHandler(userController.login)
);
router.patch(
  "/edit",
  authMiddleware,
  validation(userSchema),
  asyncHandler(userController.edit)
);
router.get("/logout", authMiddleware, asyncHandler(userController.logout));

module.exports = router;
