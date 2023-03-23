const { servicesSideBar } = require("../../schemas/sideBar");

async function servicesSidebar(req, res) {
  const searchResult = await servicesSideBar.find({});
  return res.status(200).json(searchResult);
}

module.exports = {
  servicesSidebar,
};
