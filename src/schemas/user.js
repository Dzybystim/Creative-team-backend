const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
      type: String,
      default: null,
    },
    photoURL: {
      type: String,
      default: null,
    },
    selected: [{ type: mongoose.Schema.Types.ObjectId, ref: "notice" }],
    notices: [{ type: mongoose.Schema.Types.ObjectId, ref: "notice" }],
    accessToken: {
      type: String,
      default: null,
    },
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
