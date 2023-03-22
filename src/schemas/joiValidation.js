const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
    .min(5),
  password: Joi.string().alphanum().min(7).max(32),
  name: Joi.string().pattern(/^[\p{L}\p{M}_-]+$/u),
  cityRegion: Joi.string(),
  mobilePhone: Joi.string().pattern(/^\+380\d{9}$/),
  birthdate: Joi.date(),
  photoURL: Joi.string(),
  selected: Joi.array(),
  pets: Joi.array(),
  notices: Joi.array(),
  accessToken: Joi.string(),
});

// Notices
const searchByTitleSchema = Joi.object({
  title: Joi.string().min(2).max(48),
});

// Pets
const petsSchema = Joi.object({
  name: Joi.string(),
  date: Joi.date(),
  breed: Joi.string(),
  comments: Joi.string(),
  photoURL: Joi.string(),
  owner: Joi.string(),
});

module.exports = {
  authSchema,
  searchByTitleSchema,
  petsSchema,
};
