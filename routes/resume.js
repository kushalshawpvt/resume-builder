const express = require("express");
const auth = require("../middleware/auth");
const Resume = require("../models/Resume");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { template, data } = req.body;

  try {
    const newResume = new Resume({ user: req.user.id, template, data });
    const resume = await newResume.save();
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
