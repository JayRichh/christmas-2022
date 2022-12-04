const mongoose = require("mongoose");
// const Elf = require("./models/Elf.js");
const HighScore = require("./models/HighScore.js");
const { mongoURI } = require("./config.js");
// connect to mongoDB

// const elfItems = [
//   { name: "rudolph", elfId: "1" },
//   { name: "elf", elfId: "2" },
//   { name: "snowman", elfId: "3" },
//   { name: "santa", elfId: "4" },
//   { name: "snowflake", elfId: "5" },
//   { name: "candy cane", elfId: "6" },
//   { name: "tree", elfId: "7" },
//   { name: "reindeer", elfId: "8" },
//   { name: "snow globe", elfId: "9" },
//   { name: "frank", elfId: "10" },
// ];

const highscores = [
  { name: "Frank", timeTaken: 1000 },
  { name: "Frank", timeTaken: 2000 },
  { name: "Frank", timeTaken: 3000 },
  { name: "Frank", timeTaken: 4000 },
  { name: "Frank", timeTaken: 5000 },
  { name: "Frank", timeTaken: 6000 },
  { name: "Frank", timeTaken: 7000 },
  { name: "Frank", timeTaken: 8000 },
  { name: "Frank", timeTaken: 9000 },
  { name: "Frank", timeTaken: 10000 },
  { name: "Frank", timeTaken: 11000 },
  { name: "Frank", timeTaken: 12000 },
  { name: "Frank", timeTaken: 13000 },
  { name: "Frank", timeTaken: 14000 },
];

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    HighScore.deleteMany({})
      .then(() => {
        HighScore.insertMany(highscores)
          .then(() => {
            console.log("highscores added");
            mongoose.disconnect();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
