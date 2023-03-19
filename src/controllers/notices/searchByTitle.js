const { Notice } = require("../../schemas/notice");

async function searchByTitle(req, res) {
  try {
    const query = req.query.title;

    const searchResult = await Notice.find({
      title: { $regex: query, $options: "i" },
    });

    if (searchResult.length === 0) {
      res.status(404);
      throw new Error("We did not find any notices for your request");
    }

    res.json(searchResult);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = searchByTitle;
