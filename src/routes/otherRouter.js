const express = require("express");
const asyncHandler = require("express-async-handler");
const {
  servicesSidebarController,
  newsController,
  userAndPetsController,
  userController,
} = require("../controllers");

const { authMiddleware } = require("../middlewares/auth");
const { uploadMiddleware, urlToAvatar } = require("../middlewares/upload");

const router = express.Router();

router.get(
  "/servicesSidebar",
  asyncHandler(servicesSidebarController.servicesSidebar)
);
router.get("/news", asyncHandler(newsController.news));
router.get(
  "/userAndPets",
  authMiddleware,
  asyncHandler(userAndPetsController.userAndPets)
);
router.post(
  "/uploadAvatar",
  authMiddleware,
  uploadMiddleware.single("avatar"),
  urlToAvatar,
  asyncHandler(userController.addAvatar)
);

module.exports = router;
