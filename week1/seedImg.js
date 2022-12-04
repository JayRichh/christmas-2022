const mongoose = require("mongoose");
const Elf = require("./models/Elf.js");
const { mongoURI } = require("./config.js");

const elfUrl = "https://iili.io/HBRLz37.png";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // clear the database
    Elf.deleteMany({})
      .then(() => {
        // create the elves
        const elfNames = [
          "Dasher",
          "Dancer",
          "Prancer",
          "Vixen",
          "Comet",
          "Cupid",
          "Donner",
          "Blitzen",
          "Rudolph",
          "Richard",
        ];
        const elfIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const elves = [];
        for (let i = 0; i < elfNames.length; i++) {
          const elf = new Elf({
            name: elfNames[i],
            elfId: elfIds[i],
            url: elfUrl,
          });
          elves.push(elf);
        }
        // save the elves to the database
        Elf.insertMany(elves)
          .then(() => {
            console.log("elves added");
            mongoose.disconnect();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
