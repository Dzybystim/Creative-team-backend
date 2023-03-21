const { Notice } = require("../../schemas/notice");

async function getUserNotices(req, res) {
  try {
    const { _id: owner } = req.user;

    const userNotices = await Notice.find({ owner }).select({
      owner: 0,
    });

    res.status(200).json(userNotices);
  } catch (error) {
    res.status(500);
    throw new Error(error); // error.message
  }
}

module.exports = getUserNotices;
