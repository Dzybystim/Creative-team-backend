const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(32).required(),
});

// Notices
const searchByTitleSchema = Joi.object({
  title: Joi.string().min(2).max(48),
});

module.exports = {
  authSchema,
  searchByTitleSchema,
};
