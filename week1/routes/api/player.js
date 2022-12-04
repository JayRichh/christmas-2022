const { Router } = require("express");
const Player = require("../../models/Player");

const router = Router();

// @route   GET api/player
// @desc    Get all players
// @access  Public
router.get("/player", async (req, res) => {
  try {
    const player = await Player.find();
    if (!player) throw Error("No players");
    res.status(200).json(player);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   POST api/player
// @desc    Create a player
// @access  Public
router.post("/player", async (req, res) => {
  const newPlayer = new Player(req.body);
  try {
    const player = await newPlayer.save();
    if (!player) throw Error("Something went wrong saving the player");
    res.status(200).json(player);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   UPDATE api/player/:id
// @desc    Update player score
// @access  Public
router.patch("/player/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body);
    if (!player) throw Error("Something went wrong updating the player");
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
