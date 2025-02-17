const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("ec2 backend running");
});

app.listen(port, () => {
  console.log(`backend running on port ${port}`);
});
