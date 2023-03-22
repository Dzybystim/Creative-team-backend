const { servicesSideBar } = require("../../schemas/sideBar");

async function servicesSidebar(req, res, next) {
  try {
    const searchResult = await servicesSideBar.find({});
    return res.status(200).json(searchResult);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  servicesSidebar,
};
