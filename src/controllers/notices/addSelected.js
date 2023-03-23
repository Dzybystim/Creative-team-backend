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

  await User.findByIdAndUpdate(owner, {
    $addToSet: { selected: findNotice },
  });

  return res.status(200).json({
    message: `You have successfully added your notice to chosen ones`,
  });
}

module.exports = addSelected;
