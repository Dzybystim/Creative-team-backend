const searchByTitle = require("./searchByTitle");
const getNoticesByCategory = require("./getNoticesByCategory");
const getNotice = require("./getNotice");
const addSelected = require("./addSelected");
const getSelected = require("./getSelected");
const deleteSelected = require("./deleteSelected");
const addUserNotice = require("./addUserNotice");
const getUserNotices = require("./getUserNotices");
const deleteUserNotice = require("./deleteUserNotice");

module.exports = {
  searchByTitle,
  getNoticesByCategory,
  getNotice,
  addSelected,
  getSelected,
  deleteSelected,
  addUserNotice,
  getUserNotices,
  deleteUserNotice,
};
