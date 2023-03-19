const express = require("express");
const asyncHandler = require("express-async-handler");
const { servicesSidebarController } = require("../controllers");
const { newsController } = require("../controllers");
const { userAndPetsController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const { uploadMiddleware, urlToAvatar } = require("../middlewares/upload");

const router = express.Router();

router.get("/servicesSidebar", servicesSidebarController.servicesSidebar);
router.get("/news", newsController.news);
router.get(
  "/userAndPets",
  authMiddleware,
  asyncHandler(userAndPetsController.userAndPets)
);
router.post(
  "/uploadAvatar",
  authMiddleware,
  uploadMiddleware.single("avatar"),
  urlToAvatar
);

module.exports = router;
