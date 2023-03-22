const mongoose = require("mongoose");

const sideBarSchema = mongoose.Schema(
  {
    title: { type: String, default: null },
    url: { type: String, default: null },
    addressUrl: { type: String, default: null },
    imageUrl: { type: String, default: null },
    address: { type: String, default: null },
    workDays: { type: Array, default: [] },
    phone: { type: String, default: null },
    email: { type: String, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const servicesSideBar = mongoose.model("sidebars", sideBarSchema);

module.exports = {
  servicesSideBar,
};
