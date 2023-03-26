const { New } = require("../../schemas/news");

async function news(req, res) {
  const query = req.query.search;

  if (query) {
    const searchResult = await New.find({
      title: { $regex: query, $options: "i" },
    });
    return res
      .status(200)
      .json(
        Object.values(searchResult).sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
      );
  }

  const result = await New.find({});

  return res
    .status(200)
    .json(
      Object.values(result).sort((a, b) => new Date(b.date) - new Date(a.date))
    );
}

module.exports = {
  news,
};
