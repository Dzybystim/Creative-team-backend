const { Pet } = require("../../schemas/pet");
const { petSchema } = require("../../schemas/joiValidation");

async function addPet(req, res) {
  // joi validation
  const { error } = petSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const { id } = req.user;
  const usersPet = await Pet.create({ ...req.body, owner: id });

  const { _id, name, date, breed, comments, photoURL } = usersPet;
  return res.status(201).json({
    pet: { _id, name, date, breed, comments, photoURL },
  });
}

module.exports = addPet;
