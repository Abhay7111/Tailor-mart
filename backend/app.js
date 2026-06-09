require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./utils/Database");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// api endpoints
app.use("/api/user", require("./routes/user.route"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});