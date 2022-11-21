require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const taskRoute = require("./routes/main");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

app.use(express.json());
app.use("/api/v1", taskRoute);

app.use(errorHandlerMiddleware);
app.use(notFound);

const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
