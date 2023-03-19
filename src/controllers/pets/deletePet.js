const { Pet } = require("../../schemas/pet");

async function deletePet(req, res) {
  const { petId } = req.params;
  const removeResult = await Pet.findByIdAndRemove(petId);

  if (!removeResult) {
    res.status(404);
    throw new Error("Not found");
  }
  res.json({
    message: "pet was removed",
  });
}

module.exports = deletePet;
