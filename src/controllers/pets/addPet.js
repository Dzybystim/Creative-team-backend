const { Pet } = require("../../schemas/pet");

async function addPet(req, res) {
  const { id } = req.user;
  const usersPet = await Pet.create({ ...req.body, owner: id });

  const { _id, name, date, breed, comments, photoURL } = usersPet;
  return res.status(201).json({
    pet: { _id, name, date, breed, comments, photoURL },
  });
}

module.exports = addPet;
