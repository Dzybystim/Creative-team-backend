const { User } = require("../../schemas/user");

async function deleteSelected(req, res) {
  try {
    const { noticeId } = req.params;
    const { _id: owner } = req.user;

    await User.updateOne({ _id: owner }, { $pull: { selected: noticeId } });

    res.json({
      message: "You have successfully deleted this notice from chosen ones",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = deleteSelected;
