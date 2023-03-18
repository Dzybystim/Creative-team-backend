const express = require("express");
const { servicesSidebarController } = require("../controllers");
const { newsController } = require("../controllers");
const { userAndPetsController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.get("/servicesSidebar", servicesSidebarController.servicesSidebar);
router.get("/news", newsController.news);
router.get("/userAndPets", authMiddleware, userAndPetsController.userAndPets);

module.exports = router;
