const { Notice } = require("../../schemas/notice");

async function getSelected(req, res) {
  const { selected } = req.user;

  const result = await Notice.find({})
    .where("_id")
    .in(selected)
    .select({
      category: 1,
      title: 1,
      breed: 1,
      location: 1,
      birthdate: 1,
      imageURL: 1,
      price: 1,
      owner: 1,
    })
    .sort({ updatedAt: -1 });

  return res.status(200).json(result);
}

module.exports = getSelected;
