const { Pet } = require("../../schemas/pet");
const { petsSchema } = require("../../schemas/joiValidation");

async function addPet(req, res) {
  // joi validation
  const { error } = petsSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const { id } = req.user;
  const usersPet = await Pet.create({ ...req.body, owner: id });

  return res.status(201).json({
    pet: usersPet,
  });
}

module.exports = addPet;
