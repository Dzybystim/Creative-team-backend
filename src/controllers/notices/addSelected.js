const { User } = require("../../schemas/user");
const { Notice } = require("../../schemas/notice");

async function addSelected(req, res) {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;

  const findNotice = await Notice.findById(noticeId);

  if (!findNotice) {
    res.status(404);
    throw new Error("Not found notice");
  }

  const retSelected = await User.findByIdAndUpdate(
    owner,
    { $addToSet: { selected: findNotice } },
    { new: true }
  ).select({ selected: 1 });

  return res.status(200).json({ selected: retSelected.selected });
}

module.exports = addSelected;
