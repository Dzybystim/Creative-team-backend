const { User } = require("../../schemas/user");

async function edit(req, res) {
  const newData = req.body;
  const { id } = req.user;
  await User.findByIdAndUpdate(id, newData);

  res.status(200).json({ message: "Updated successfully" });
}

module.exports = edit;
