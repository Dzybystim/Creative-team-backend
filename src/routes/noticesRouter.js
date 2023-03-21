const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.get("/user", authMiddleware, noticeController.getUserNotices);
router.get("/title", noticeController.searchByTitle);
router.get("/category", noticeController.getNoticesByCategory);
router.get("/:noticeId", noticeController.getNotice);
router.post(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.addSelected
);
router.get("/selected/notice", authMiddleware, noticeController.getSelected);
router.delete(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.deleteSelected
);
router.post("/user", authMiddleware, noticeController.addUserNotice);
router.delete(
  "/user/:noticeId",
  authMiddleware,
  noticeController.deleteUserNotice
); // TODO

module.exports = router;
