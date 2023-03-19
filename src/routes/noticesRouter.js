const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHadler = require("express-async-handler");

const router = express.Router();

router.get("/title", asyncHadler(noticeController.searchByTitle)); // Ready
router.get("/category", asyncHadler(noticeController.getNoticesByCategory)); // Ready
router.get("/:noticeId", asyncHadler(noticeController.getNotice)); // Ready
router.post(
  "/:selectedId",
  authMiddleware,
  asyncHadler(noticeController.addSelected)
); // Ready
router.get("/selected", authMiddleware, noticeController.getSelected); // TODO
router.delete(
  "/selected/:noticeId",
  authMiddleware,
  noticeController.deleteSelected
); // TODO
router.post("/user", authMiddleware, noticeController.addUserNotice); // TODO
router.get("/user", authMiddleware, noticeController.getUserNotices); // TODO
router.delete(
  "/user/:noticeId",
  authMiddleware,
  noticeController.deleteUserNotice
); // TODO

module.exports = router;
