const { Router } = require("express");
const HighScore = require("../../models/HighScore");

const router = Router();

// @route   GET api/highScore
// @desc    Get all high scores
// @access  Public
router.get("/highScore", async (req, res) => {
  // sort the high scores by time taken and only return the top 10
  try {
    const highScores = await HighScore.find().sort({ timeTaken: 1 }).limit(12);
    res.json(highScores);
  } catch (err) {
    res.status(404).json({ nohighscoresfound: "No high scores found" });
  }
});

// @route   POST api/highScore
// @desc    Create a high score
// @access  Public
router.post("/highScore", async (req, res) => {
  const newHighScore = new HighScore(req.body);
  try {
    const highScore = await newHighScore.save();
    if (!highScore) throw Error("Something went wrong saving the high score");
    res.status(200).json(highScore);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// @route   UPDATE api/highScore/:id
// @desc    Update high score
// @access  Public
router.patch("/highScore/:id", async (req, res) => {
  try {
    const highScore = await HighScore.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!highScore) throw Error("Something went wrong updating the high score");
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
