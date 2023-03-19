const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notice");

async function addSelected(req, res) {
  try {
    const { selectedId } = req.params;
    const { _id: owner } = req.user;

    const findNotice = await Notice.findByIdAndUpdate(
      selectedId,
      { $set: { owner } },
      { new: true }
    );

    await User.findByIdAndUpdate(owner, {
      $addToSet: { selected: findNotice },
    });

    res.json({
      message: `You have successfully added your notice to chosen ones`,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = addSelected;
