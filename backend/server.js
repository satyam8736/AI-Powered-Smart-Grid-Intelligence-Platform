const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Smart Grid Backend Running"
  });
});
app.get("/api/dashboard", (req, res) => {
  res.json({
    revenueLoss: "₹2.5 Cr",
    collection: "78%",
    defaulters: 1240,
    theftCases: 45
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});