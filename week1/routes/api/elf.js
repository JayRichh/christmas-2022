const express = require("express");
const router = express.Router();
const Elf = require("../../models/Elf");

// @route   GET api/elf
// @desc    Get all elf items
// @access  Public
router.get("/elf", (req, res) => {
  Elf.find()
    .then((elves) => res.json(elves))
    .catch((err) => res.status(404).json({ noelvesfound: "No elves found" }));
});

// @route   GET api/elf/:id
// @desc    Get single elf item by id
// @access  Public
router.get("/elf:id", (req, res) => {
  Elf.findById(req.params.id)
    .then((elf) => res.json(elf))
    .catch((err) => res.status(404).json({ noelffound: "No elf found" }));
});

module.exports = router;
