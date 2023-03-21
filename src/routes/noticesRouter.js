const express = require("express");
const { noticeController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.get(
  "/user",
  authMiddleware,
  asyncHandler(noticeController.getUserNotices)
);
router.get(
  "/selected",
  authMiddleware,
  asyncHandler(noticeController.getSelected)
);
router.get("/title", asyncHandler(noticeController.searchByTitle));
router.get("/category", asyncHandler(noticeController.getNoticesByCategory));
router.get("/:noticeId", asyncHandler(noticeController.getNotice));
router.post(
  "/user",
  authMiddleware,
  asyncHandler(noticeController.addUserNotice)
);
router.post(
  "/selected/:noticeId",
  authMiddleware,
  asyncHandler(noticeController.addSelected)
);
router.delete(
  "/selected/:noticeId",
  authMiddleware,
  asyncHandler(noticeController.deleteSelected)
);
router.delete(
  "/user/:noticeId",
  authMiddleware,
  asyncHandler(noticeController.deleteUserNotice)
);

module.exports = router;
