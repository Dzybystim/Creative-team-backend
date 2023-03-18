const { User } = require("../../schemas/user");

async function signup(req, res) {
  const { email, password } = req.body;
  console.log(email);
  // get and verify data
  if (!email || !password) {
    res.status(400);
    throw new Error("Please, provide all required fiields");
  }

  // look for dublicate email
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("Email in use");
  }

  // if not - hash password and create user
  const newUser = await User.create({ ...req.body });
  newUser.setPassword(password);
  await newUser.save();

  return res.status(201).json({
    user: { email: newUser.email },
  });
}

module.exports = signup;
