const { Notice } = require("../../schemas/notice");

async function getNotice(req, res) {
  try {
    const { noticeId } = req.params;

    const result = await Notice.findById(noticeId);

    if (!result) {
      res.status(404);
      throw new Error("Not found!");
    }

    res.json(result);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = getNotice;
