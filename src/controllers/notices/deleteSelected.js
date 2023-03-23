const { User } = require("../../schemas/user");

async function deleteSelected(req, res) {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;

  await User.updateOne({ _id: owner }, { $pull: { selected: noticeId } });

  return res.status(200).json({
    message: "You have successfully deleted this notice from chosen ones",
  });
}

module.exports = deleteSelected;
