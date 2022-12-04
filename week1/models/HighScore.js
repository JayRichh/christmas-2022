const { Schema, model } = require("mongoose");

// Create Schema for the HighScore to store data for fastest times
const HighScoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  timeTaken: {
    type: Number,
    required: true,
  },
});

const HighScore = model("HighScore", HighScoreSchema);

module.exports = HighScore;