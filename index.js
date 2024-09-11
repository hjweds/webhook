const express = require("express");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/:type/:pin", (req, res) => {
  let pause = {teams: 25, google: 4};
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Pause length="3" />
    <Play digits="${req.params.pin}#" />
    <Pause length="${pause[req.params.type]}" />
    <Say>This meeting is being recorded.</Say>
    <Record timeout="300" />
</Response>`;

  res.header('Content-Type', 'text/xml');
  res.status(200).send(xml);
});

app.post("/", (req, res) => {
  let body = req.body;
  console.log(body);
  res.status(200).send(body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));