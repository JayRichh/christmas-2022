const { Schema, model } = require("mongoose");

// Create Schema for the player to store data for scoring and tracking clicks
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  timeTaken: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    required: false,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Player = model("Player", PlayerSchema);

module.exports = Player;
