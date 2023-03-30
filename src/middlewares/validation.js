const validation = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };

  return func;
};

module.exports = validation;
