const { User } = require("../../schemas/user");

async function addAvatar(req, res) {
  const { id, urlUploaded } = req.user;

  await User.findByIdAndUpdate(id, { photoURL: urlUploaded });

  return res.status(200).json({ photoURL: urlUploaded });
}

module.exports = addAvatar;
