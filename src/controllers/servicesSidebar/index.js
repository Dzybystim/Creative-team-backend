const fs = require("fs/promises");
const path = require("path");
const newPath = path.resolve("src/data/sponsors.json");

async function servicesSidebar(req, res, next) {
  try {
    const data = await fs.readFile(newPath);
    const result = JSON.parse(data);
    return res.status(200).json({ code: 200, status: "success", result });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  servicesSidebar,
};
