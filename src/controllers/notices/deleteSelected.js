const { Notice } = require("../../schemas/notice");
const { User } = require("../../schemas/user");

async function deleteSelected(req, res) {
  try {
    const { selectedId } = req.params;
    const { _id: owner } = req.user;

    await User.updateOne({ _id: owner }, { $pull: { selected: selectedId } });

    await Notice.updateOne({ _id: selectedId }, { $unset: { owner: "" } });

    res.json({
      message: "You have successfully deleted this notice from chosen ones",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = deleteSelected;
