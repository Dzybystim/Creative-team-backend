const { Notice } = require("../../schemas/notice");

async function getUserNotices(req, res) {
  const { _id: owner } = req.user;

  const userNotices = await Notice.find({ owner }).select({
    owner: 0,
  });

  return res.status(200).json(userNotices);
}

module.exports = getUserNotices;
