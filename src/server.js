const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

mongoose.set("strictQuery", false);

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

async function server() {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, (err) => {
      if (err) console.error("Error start server:", err);
    });
  } catch (error) {
    console.error("Error connect to MONGODB", error.message);
    process.exit(1);
  }
}

server();
