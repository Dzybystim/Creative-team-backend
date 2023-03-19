const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
      default: null,
    },
    cityRegion: {
      type: String,
      default: null,
    },
    mobilePhone: {
      type: String,
      default: null,
    },
    birthdate: {
      type: Date,
      default: null,
    },
    photoURL: {
      type: String,
      default: null,
    },
    selected: [{ type: mongoose.Schema.Types.ObjectId, ref: "notice" }],
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "pet" }],
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "notice" }],
    accessToken: {
      type: String,
      default: null,
    },
    // refreshToken: {
    //   type: String,
    //   default: null,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, 5);
};

userSchema.methods.getValid = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("users", userSchema);

module.exports = {
  User,
};
