const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send("Hello world")
})

app.get("/deploy", (_req, res) =>  {
    res.status(200).send("Deployed On heroku")
  })
  
module.exports = app;