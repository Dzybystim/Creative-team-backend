async function news(req, res) {
  return res.status(504).json({ message: "news not implemented" });
}

module.exports = {
  news,
};
