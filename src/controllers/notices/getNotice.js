const { Notice } = require("../../schemas/notice");

async function getNotice(req, res) {
  const { noticeId } = req.params;

  const result = await Notice.findById(noticeId);

  if (!result) {
    res.status(404);
    throw new Error("Not found");
  }

  return res.status(200).json(result);
}

module.exports = getNotice;
