const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { PORT, mongoURI } = require("./config.js");
// routes
const Player = require("./routes/api/player");
const Elf = require("./routes/api/elf");
const HighScore = require("./routes/api/highScore");
// cors is a middleware that allows us to make requests from our frontend to our backend
const cors = require("cors");
// morgan is a middleware that logs all requests to the console
const morgan = require("morgan");
// body-parser is a middleware that allows us to access the body of a request
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());

// use tiny to log only the request method and the status code
app.use(morgan("tiny"));
app.use(bodyParser.json());

// check if we are in production mode
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });

// test if server is running and connected to mongoDB
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// use routes
app.use("/api/", Player);
app.use("/api/", Elf);
app.use("/api/", HighScore);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .then(() => {
    // log uri to console
    console.log(`MongoDB connected to ${mongoURI}`);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
