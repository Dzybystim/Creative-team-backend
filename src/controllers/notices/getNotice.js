const { Notice } = require("../../schemas/notice");
const { User } = require("../../schemas/user");

async function getNotice(req, res) {
  const { noticeId } = req.params;

  const resultNotice = await Notice.findById(noticeId);

  if (!resultNotice) {
    res.status(404);
    throw new Error("Not found");
  }

  const { owner } = resultNotice;
  const user = await User.findById(owner).select({
    _id: 0,
    email: 1,
    mobilePhone: 1,
  });
  if (!user) {
    return res
      .status(200)
      .json({ ...resultNotice._doc, email: null, mobilePhone: null });
  }

  return res.status(200).json({ ...resultNotice._doc, ...user._doc });
}

module.exports = getNotice;
