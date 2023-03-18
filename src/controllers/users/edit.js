const { User } = require("../../schemas/user");
const { userJoiValidation } = require("../../services");

async function edit(req, res) {
  // joi validation
  userJoiValidation(req.body);

  const newData = req.body;
  const { id } = req.user;
  await User.findByIdAndUpdate(id, newData);

  res.status(200).json({ message: "Updated successfully" });
}

module.exports = edit;
