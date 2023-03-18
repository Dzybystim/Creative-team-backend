const mongoose = require("mongoose");

// email	      поле повинно містити валідний email
// password	    будь-які літери та символи окрім пробілів. мін 7 символів максимум 32
// name	        будь які літери
// city/region	строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy
// mobile phone	строка в форматі +380671234567
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: {
      type: String,
    },
    cityRegion: {
      type: String,
    },
    mobilePhone: {
      type: String,
    },
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "pet" }],
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "notice" }],
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("users", userSchema);

module.exports = {
  User,
};
