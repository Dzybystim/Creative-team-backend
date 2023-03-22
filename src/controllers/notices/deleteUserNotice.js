const { Notice } = require("../../schemas/notice");
const { User } = require("../../schemas/user");

async function deleteUserNotice(req, res) {
  try {
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

    await User.updateOne({ _id: owner }, { $pull: { notices: noticeId } });

    res.json({ message: "Notice successfully deleted!" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = deleteUserNotice;
