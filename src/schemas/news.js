const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: { type: String, default: null },
    url: { type: String, default: null },
    description: { type: String, default: null },
    date: { type: String, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const New = mongoose.model("news", newsSchema);

module.exports = {
  New,
};
