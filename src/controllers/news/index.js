const fs = require("fs/promises");
const path = require("path");
const newPath = path.resolve("src/data/news.json");

async function news(req, res, next) {
  try {
    const data = await fs.readFile(newPath);
    const result = JSON.parse(data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  news,
};
