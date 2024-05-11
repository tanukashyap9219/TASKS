const express = require("express");
const app = express();
const PORT = 5000;
const route = require("./route/route");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(route);

// app.get("/", (req, res) => {
//      res.send("I am from aap.js")
//  })

app.listen(PORT, () => {
  console.log("server is running....");
});
