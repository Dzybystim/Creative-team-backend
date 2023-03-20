const { User } = require("../../schemas/user");
const { authSchema } = require("../../schemas/joiValidation");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

async function signup(req, res) {
  // joi validation
  const { error } = authSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

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

  // generate token
  const payload = { id: newUser.id };
  const token = jwt.sign(payload, SECRET, { expiresIn: "12h" });

  // write token to user
  newUser.accessToken = token;

  const updated = await newUser.save();
  if (!updated) {
    res.status(400);
    throw new Error("Unable create user");
  }

  return res.status(201).json({
    token: newUser.accessToken,
    user: newUser.email,
  });
}

module.exports = signup;
