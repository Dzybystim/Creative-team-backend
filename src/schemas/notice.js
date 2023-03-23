const mongoose = require("mongoose");

// category	    обовʼязково обрано 1 з 3 категорій (sell, lost-found, for-free)
// title	    будь які літери.мін 2 макс 48,
// name	        будь які літери.мін 2 макс 16
// birthdate	дата в форматі 22.10.2022
// breed	    будь які літери.мін 2 макс 24
// sex	        обовʼязково обрано 1 тип з 2 (male, female)
// location	    строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy
// comments	    будь які літери та символи. мін 8, макс 120
// price	    число, не повинно починатися 0
const noticeSchema = mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["sell", "lost-found", "for-free"],
      required: [true, "Category is required"],
    },
    title: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    birthdate: {
      type: Date,
      default: null,
    },
    breed: {
      type: String,
      default: null,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Sex is required"],
    },
    location: {
      type: String,
      default: null,
    },
    comments: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    imageURL: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Notice = mongoose.model("notices", noticeSchema);

module.exports = {
  Notice,
};
