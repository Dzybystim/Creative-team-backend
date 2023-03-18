const { User } = require("../../schemas/user");

async function logout(req, res) {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { accessToken: null });
  res.status(200).json({
    code: 200,
    message: "logout success",
  });
}

module.exports = logout;
