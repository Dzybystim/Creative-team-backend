const { Notice } = require("../../schemas/notice");

async function deleteUserNotice(req, res) {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;

  const deleteNotice = await Notice.findOneAndDelete({
    _id: noticeId,
    owner,
  });

  if (!deleteNotice) {
    res.status(404);
    throw new Error("Not found");
  }

  return res.status(200).json({ message: "Notice successfully deleted!" });
}

module.exports = deleteUserNotice;
