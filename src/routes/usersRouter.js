const express = require("express");
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.post("/signup", asyncHandler(userController.signup));
router.post("/login", asyncHandler(userController.login));
router.patch("/edit", authMiddleware, asyncHandler(userController.edit));
router.post("/logout", authMiddleware, asyncHandler(userController.logout));

module.exports = router;
