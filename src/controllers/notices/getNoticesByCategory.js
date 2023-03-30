const { Notice } = require("../../schemas/notice");

async function getNoticesByCategory(req, res) {
  const query = req.query.category;

  const result = await Notice.find({ category: query }).sort({ updatedAt: -1 });

  return res.status(200).json(result);
}

module.exports = getNoticesByCategory;
