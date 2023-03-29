const { User } = require("../../schemas/user");

async function deleteSelected(req, res) {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;

  await User.updateOne({ _id: owner }, { $pull: { selected: noticeId } });

  return res.status(204).json({});
}

module.exports = deleteSelected;
