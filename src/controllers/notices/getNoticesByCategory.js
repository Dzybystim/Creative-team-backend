const { Notice } = require("../../schemas/notice");

async function getNoticesByCategory(req, res) {
  const query = req.query.category;

  const result = await Notice.find({ category: query });

  return res.status(200).json(result);
}

module.exports = getNoticesByCategory;
