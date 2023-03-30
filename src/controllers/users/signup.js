const { User } = require("../../schemas/user");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function signup(req, res) {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

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
  const newUser = await User.create({ ...req.body, email, password });
  newUser.setPassword(password);

  // generate token
  const payload = { id: newUser.id };
  const token = jwt.sign(payload, SECRET);

  // write token to user
  newUser.accessToken = token;

  const updated = await newUser.save();
  if (!updated) {
    res.status(400);
    throw new Error("Unable create user");
  }

  const { _id, name, cityRegion, mobilePhone, accessToken, selected } = newUser;
  return res.status(201).json({
    user: {
      id: _id,
      email: newUser.email,
      name,
      cityRegion,
      mobilePhone,
      accessToken,
      selected,
    },
  });
}

module.exports = signup;
