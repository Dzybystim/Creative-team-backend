const { User } = require("../../schemas/user");

async function deleteSelected(req, res) {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;

  await User.updateOne({ _id: owner }, { $pull: { selected: noticeId } });

  const retUser = await User.findById(owner).select({
    selected: 1,
  });

  return res.status(200).json({ selected: retUser.selected });
}

module.exports = deleteSelected;
