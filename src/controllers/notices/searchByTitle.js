const { Notice } = require("../../schemas/notice");

async function searchByTitle(req, res) {
  try {
    const query = req.query.title;

    const searchResult = await Notice.find({
      title: { $regex: query, $options: "i" },
    });

    if (searchResult.length === 0) {
      return res.json({
        message: "We did not find any notices for your request",
      });
    }

    res.json(searchResult);
  } catch (error) {
    res.status(500).json({ message: error.codeName });
  }
}

module.exports = searchByTitle;
