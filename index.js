const argv = require('yargs').argv;
const beacon = require('@ibmdotcom/beacon');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || argv.port || 8080;

app.get('/', cors(), async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // get Beacon params
  const params = req.query;
  params.raw = true;

  beacon(params).then(results => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
