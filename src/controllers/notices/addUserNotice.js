const { noticeSchema } = require("../../schemas/joiValidation");
const { Notice } = require("../../schemas/notice");

async function addUserNotice(req, res) {
  // joi validation
  const { error } = noticeSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const { _id: owner } = req.user;
  const createNotice = await Notice.create({ ...req.body, owner });

  return res.status(201).json(createNotice);
}

module.exports = addUserNotice;
