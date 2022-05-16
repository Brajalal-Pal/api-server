const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.status(200).json({
    env: process.env,
  });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
