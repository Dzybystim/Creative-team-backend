const { Notice } = require("../../schemas/notice");

async function getSelected(req, res) {
  try {
    const { _id: owner } = req.user;

    const result = await Notice.find({ owner });

    if (!result) {
      res.status(404);
      throw new Error("Not found");
    }

    res.json(result);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
}

module.exports = getSelected;
