const { User } = require("../../schemas/user");
const { userSchema } = require("../../schemas/joiValidation");

async function edit(req, res) {
  // joi validation
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const newData = req.body;
  const { id } = req.user;
  await User.findByIdAndUpdate(id, newData);

  res.status(200).json({ message: "Updated successfully" });
}

module.exports = edit;
