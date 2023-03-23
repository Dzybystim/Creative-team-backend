const { Notice } = require("../../schemas/notice");

async function searchByTitle(req, res) {
  const query = req.query.title;

  const searchResult = await Notice.find({
    title: { $regex: query, $options: "i" },
  });

  if (searchResult.length === 0) {
    res.status(404);
    throw new Error("We did not find any notices for your request");
  }

  return res.status(200).json(searchResult);
}

module.exports = searchByTitle;
