const { User } = require("../schemas/user");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const authMiddleware = async (req, res, next) => {
  // read auth headers in req
  try {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(" ");

    // check for auth token
    if (!token || bearer !== "Bearer") {
      res.status(404);
      throw new Error("Please, provide all required fields");
    }

    // verify token
    const { id } = jwt.verify(token, SECRET);

    // find user
    const user = await User.findById(id);

    // if user's token doesn't match bearer token return error
    if (user.accessToken !== token) {
      res.status(401);
      throw new Error("Unauthorized");
    }

    // send data next()
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  authMiddleware,
};
