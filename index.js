const express = require("express");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let xml = process.env.xml;
  res.header('Content-Type', 'text/xml');
  res.status(200).send(xml);
});

app.post("/", (req, res) => {
  let body = req.body;
  console.log(body);
  res.status(200).send(body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));