const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/resumes", resumeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
