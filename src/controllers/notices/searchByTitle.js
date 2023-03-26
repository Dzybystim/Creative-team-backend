const { Notice } = require("../../schemas/notice");

async function searchByTitle(req, res) {
  const query = req.query.title;
  const category = req.query.category;

  if (category) {
    const searchResult = await Notice.find({
      title: { $regex: query, $options: "i" },
      category,
    });
    return res.status(200).json(searchResult);
  } else {
    const searchResult = await Notice.find({
      title: { $regex: query, $options: "i" },
    });
    return res.status(200).json(searchResult);
  }
}

module.exports = searchByTitle;
