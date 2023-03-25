const Joi = require("joi").extend(require("@joi/date"));

const authSchema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
    .min(5)
    .required(),
  password: Joi.string().alphanum().min(7).max(32).required(),
});

// Users
const userSchema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2 })
    .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
    .min(5),
  password: Joi.string().alphanum().min(7).max(32),
  name: Joi.string().pattern(/^[\p{L}\p{M}_-]+$/u),
  cityRegion: Joi.string(),
  mobilePhone: Joi.string().pattern(/^\+380\d{9}$/),
  birthdate: Joi.date().format("DD.MM.YYYY"),
  photoURL: Joi.string(),
  selected: Joi.array(),
  notices: Joi.array(),
  accessToken: Joi.string(),
});

// Notices
const noticeSchema = Joi.object({
  category: Joi.string().valid("sell", "lost-found", "for-free").required(),
  title: Joi.string().min(2).max(48),
  name: Joi.string().min(2).max(16),
  birthdate: Joi.date().format("DD.MM.YYYY"),
  breed: Joi.string().min(2).max(24),
  sex: Joi.string().valid("male", "female").required(),
  location: Joi.string(),
  comments: Joi.string().min(8).max(120),
  price: Joi.string().pattern(/^[1-9]\d*([,.]\d+)?$/),
  imageURL: Joi.string(),
});

// Pets
const petSchema = Joi.object({
  name: Joi.string().min(2).max(16),
  date: Joi.date().format("DD.MM.YYYY"),
  breed: Joi.string().min(2).max(16),
  comments: Joi.string().min(8).max(120),
  photoURL: Joi.string(),
  owner: Joi.string(),
});

// News
const newsSchema = Joi.object({
  title: Joi.string(),
  url: Joi.string(),
  description: Joi.string(),
  date: Joi.date().format(["DD/MM/YYYY", "DD.MM.YYYY"]),
});

module.exports = {
  authSchema,
  userSchema,
  noticeSchema,
  petSchema,
  newsSchema,
};
