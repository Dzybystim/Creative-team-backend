const { petsSchema } = require("../schemas/joiValidation");

const petJoiValidation = (data) => {
  const { error } = petsSchema.validate(data);
  if (error) {
    throw new Error(error.message);
  }
};

module.exports = petJoiValidation;
