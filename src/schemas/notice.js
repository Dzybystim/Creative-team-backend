const mongoose = require("mongoose");

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
      type: String,
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
