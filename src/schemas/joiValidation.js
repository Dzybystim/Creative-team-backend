const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32).required(),
});

module.exports = {
  authSchema,
};