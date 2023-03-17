const express = require("express");
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/edit", authMiddleware, userController.edit);
router.get("/logout", authMiddleware, userController.logout);

module.exports = router;
