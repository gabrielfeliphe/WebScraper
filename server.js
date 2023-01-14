const express = require('express')
const app = express()

const data  = require('./data.js');


app.get('/', async function (req, res) {
    const items = await data.main();
    res.json(items);
});

app.get('/highCost', async function (req, res) {
    const item = (await data.main()).pop();
    res.json(item);
});

app.get('/lowCost', async function (req, res) {
    const item = (await data.main()).shift();
    res.json(item);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor subiu na porta %d", this.address().port);
  });