const { Notice } = require("../../schemas/notice");

async function addUserNotice(req, res) {
  const { _id: owner } = req.user;
  const createNotice = await Notice.create({ ...req.body, owner });

  return res.status(201).json(createNotice);
}

module.exports = addUserNotice;
