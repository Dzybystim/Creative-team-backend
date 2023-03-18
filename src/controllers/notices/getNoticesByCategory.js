const { Notice } = require("../../schemas/notice");

async function getNoticesByCategory(req, res) {
  try {
    const { category } = req.params;

    const result = await Notice.find({ category });

    if (!result || result.length === 0) {
      return res.json({ message: "Not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.codeName });
  }
}

module.exports = getNoticesByCategory;
