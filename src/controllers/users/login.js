const { User } = require("../../schemas/user");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { userJoiValidation } = require("../../services");

async function login(req, res) {
  // joi validation
  userJoiValidation(req.body);

  // get and verify data
  const { email, password } = req.body;
  if (!password || !email) {
    res.status(400);
    throw new Error("Please, provide all required fields");
  }
  // look for a contact and verify password
  const user = await User.findOne({ email });

  if (!user || !user.getValid(password)) {
    res.status(401);
    throw new Error("Email or password is wrong");
  }

  // generate token
  const payload = { id: user.id };
  const token = jwt.sign(payload, SECRET, { expiresIn: "12h" });

  // write token to user
  user.accessToken = token;
  const updated = await user.save();
  if (!updated) {
    res.status(400);
    throw new Error("Unable to set token");
  }

  // return token
  res.json({
    data: {
      token: user.accessToken,
      user: user.email,
    },
  });
}

module.exports = login;
