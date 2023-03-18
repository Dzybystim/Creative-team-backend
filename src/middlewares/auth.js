const authMiddleware = async (req, res, next) => {
  next();
};

module.exports = {
  authMiddleware,
};
