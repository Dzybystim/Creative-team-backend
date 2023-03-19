const { Pet } = require("../../schemas/pet");
const { User } = require("../../schemas/user");

async function userAndPets(req, res) {
  const { id } = req.user;

  const user = await User.findById(id).select({
    _id: 0,
    name: 1,
    cityRegion: 1,
    mobilePhone: 1,
    birthdate: 1,
    photoURL: 1,
  });

  const searchParam = { id };
  const pets = await Pet.find(searchParam);

  return res.status(200).json({ user: user, pets: pets });
}

module.exports = {
  userAndPets,
};
