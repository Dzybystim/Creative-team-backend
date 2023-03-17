async function userAndPets(req, res) {
  return res.status(504).json({ message: "user + pets not implemented" });
}

module.exports = {
  userAndPets,
};
