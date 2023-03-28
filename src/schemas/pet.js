const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    breed: {
      type: String,
      default: null,
    },
    comments: {
      type: String,
      default: null,
    },
    photoURL: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Pet = mongoose.model("pets", petSchema);

module.exports = {
  Pet,
};
