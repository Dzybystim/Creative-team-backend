const { Notice } = require("../../schemas/notice");

async function getNotice(req, res) {
  try {
    const { noticeId } = req.params;

    const result = await Notice.findById(noticeId);

    if (!result) {
      return res.json({ message: "Not found!" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.codeName });
  }
}

module.exports = getNotice;
