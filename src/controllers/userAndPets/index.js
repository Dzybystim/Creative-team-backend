const { Pet } = require("../../schemas/pet");
const { User } = require("../../schemas/user");

async function userAndPets(req, res) {
  const { id } = req.user;

  const user = await User.findById(id).select({
    _id: 0,
    email: 1,
    name: 1,
    cityRegion: 1,
    mobilePhone: 1,
    birthdate: 1,
    photoURL: 1,
  });

  const searchParam = { owner: id };
  const pets = await Pet.find(searchParam).select({
    name: 1,
    date: 1,
    breed: 1,
    comments: 1,
    photoURL: 1,
  });

  return res.status(200).json({ user: user, pets: pets });
}

module.exports = {
  userAndPets,
};
