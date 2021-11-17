const argv = require('yargs').argv;
const beacon = require('@ibmdotcom/beacon');
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

const port = process.env.PORT || argv.port || 3000;

app.get('/', async(req, res) => {
  // get Beacon params
  const params = req.query;

  // launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-san dbox',
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://www.ibm.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'ibm.com.pdf', format: 'A4'});
  res.send(pdf);
  page.once('load', async () => {
    console.log('Page loaded!');
  });
  await browser.close();

  // beacon(params).then(results => {
  //   res.send(results);
  // });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
