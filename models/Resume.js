const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  template: { type: String, required: true },
  data: { type: Object, required: true },
});

module.exports = mongoose.model("Resume", ResumeSchema);
