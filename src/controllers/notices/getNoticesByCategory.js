const { Notice } = require("../../schemas/notice");

async function getNoticesByCategory(req, res) {
  try {
    const query = req.query.category;

    const result = await Notice.find({ category: query });

    res.json(result);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = getNoticesByCategory;
