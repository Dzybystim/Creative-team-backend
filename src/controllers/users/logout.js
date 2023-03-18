const { User } = require("../../schemas/user");

async function logout(req, res) {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { accessToken: null });
  res.status(204).json({
    message: "logout success",
  });
}

module.exports = logout;
