const { authSchema } = require("../schemas/joiValidation");

const userJoiValidation = (data) => {
  const { error } = authSchema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
  
};

module.exports = userJoiValidation;
