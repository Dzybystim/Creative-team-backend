const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.get("/title", noticeController.searchByTitle);
router.get("/category", noticeController.getNoticesByCategory);
router.get("/:noticeId", noticeController.getNotice);
router.post("/selected", authMiddleware, noticeController.addSelected);
router.get("/selected", authMiddleware, noticeController.getSelected);
router.delete(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.deleteSelected
);
router.post("/user", authMiddleware, noticeController.addUserNotice);
router.get("/user", authMiddleware, noticeController.getUserNotices);
router.delete(
  "/user/:noticeId",
  authMiddleware,
  noticeController.deleteUserNotice
);

module.exports = router;
