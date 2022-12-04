const { Schema, model } = require("mongoose");

// Create Schema for the Elf to store data for checking valid clicks
const ElfSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  elfId: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 1,
  },
});

const Elf = model("Elf", ElfSchema);

module.exports = Elf;
