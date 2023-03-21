const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHadler = require("express-async-handler");

const router = express.Router();

router.get("/title", asyncHadler(noticeController.searchByTitle)); // Ready
router.get("/category", asyncHadler(noticeController.getNoticesByCategory)); // Ready
router.get("/:noticeId", asyncHadler(noticeController.getNotice)); // Ready
router.post(
  "/selected/:selectedId",
  authMiddleware,
  asyncHadler(noticeController.addSelected)
); // Ready
router.get(
  "/selected/selected",
  authMiddleware,
  asyncHadler(noticeController.getSelected)
); // Ready
router.delete(
  "/selected/ddd/:selectedId",
  authMiddleware,
  asyncHadler(noticeController.deleteSelected)
); // Ready
router.post("/user", authMiddleware, noticeController.addUserNotice); // TODO
router.get("/user", authMiddleware, noticeController.getUserNotices); // TODO
router.delete(
  "/user/:noticeId",
  authMiddleware,
  noticeController.deleteUserNotice
); // TODO

module.exports = router;
