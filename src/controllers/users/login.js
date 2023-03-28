const { User } = require("../../schemas/user");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { authSchema } = require("../../schemas/joiValidation");

async function login(req, res) {
  // joi validation
  const { error } = authSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  // get and verify data
  const email = req.body.email.trim();
  const password = req.body.password.trim();

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
  const token = jwt.sign(payload, SECRET);

  // write token to user
  user.accessToken = token;
  const updated = await user.save();
  if (!updated) {
    res.status(400);
    throw new Error("Unable to set token");
  }

  // return token
  const { _id, name, cityRegion, mobilePhone, accessToken, selected } = user;
  return res.status(200).json({
    user: {
      id: _id,
      email: user.email,
      name,
      cityRegion,
      mobilePhone,
      accessToken,
      selected,
    },
  });
}

module.exports = login;
