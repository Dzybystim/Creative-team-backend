const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().alphanum().min(7).max(32),
  name: Joi.string(),
  cityRegion: Joi.string(),
  mobilePhone: Joi.string(),
  birthdate: Joi.date(),
  photoURL: Joi.string(),
  selected: Joi.array(),
  pets: Joi.array(),
  notices: Joi.array(),
  accessToken: Joi.string(),
});

module.exports = {
  authSchema,
};
