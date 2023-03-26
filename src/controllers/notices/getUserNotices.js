const { Notice } = require("../../schemas/notice");

async function getUserNotices(req, res) {
  const { _id: owner } = req.user;

  const userNotices = await Notice.find({ owner });

  return res.status(200).json(userNotices);
}

module.exports = getUserNotices;
