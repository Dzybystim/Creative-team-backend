const mongoose = require("mongoose");

// name	будь які літери.мін 2 макс 16
// date	дата в форматі 22.10.2022
// breed	будь які літери.мін 2 макс 16
// comments	будь які літери та символи. мін 8, макс 120
const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: Date,
    },
    breed: {
      type: String,
    },
    comments: {
      type: String,
    },
    photoURL: String,
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
