const { Notice } = require("../../schemas/notice");
const { User } = require("../../schemas/user");

async function addUserNotice(req, res) {
  try {
    const query = req.query.category;
    const { _id: owner } = req.user;

    const createNotice = await Notice.create({
      category: query,
      ...req.body,
      owner,
    });

    await User.findByIdAndUpdate(owner, {
      $addToSet: { notices: createNotice._id },
    });

    res.json(createNotice);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = addUserNotice;
