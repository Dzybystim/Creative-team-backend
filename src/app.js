const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./data/swagger.json");
const usersRouter = require("./routes/usersRouter");
const noticesRouter = require("./routes/noticesRouter");
const petsRouter = require("./routes/petsRouter");
const otherRouter = require("./routes/otherRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/users", usersRouter);
app.use("/notices", noticesRouter);
app.use("/pets", petsRouter);
app.use("/", otherRouter);
app.use("/data/img_our_friend", express.static("./src/data/img_our_friend"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = res.statusCode || 500;
  res.status(status).json({ message: err.message });
});

module.exports = app;
