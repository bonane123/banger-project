const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.get("/", cors(), async (req, res) => {
  res.status(200).send("<h1>EXPRESS</h1><p>Welcome to express</p>");
});
app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});
app.get("/home", cors(), async (req, res) => {
  res.send("this is the data for home page");
});
// Listening

app.listen(5000, () => {
  console.log("server is listening to port 5000...");
});
