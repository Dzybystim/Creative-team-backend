const { Pet } = require("../../schemas/pet");
const { petJoiValidation } = require("../../services");

async function addPet(req, res) {
  // joi validation
  petJoiValidation(req.body);

  const { id } = req.user;
  const usersPet = await Pet.create({ ...req.body, owner: id });

  return res.status(201).json({
    pet: { name: usersPet.name, owner: usersPet.owner },
  });
}

module.exports = addPet;
