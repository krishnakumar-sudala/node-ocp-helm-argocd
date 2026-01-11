const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || "Hello from Node.js on OpenShift via Helm!";

app.get("/", (req, res) => {
  res.send(message);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
