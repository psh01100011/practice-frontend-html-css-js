const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/component/pages/basic.html');
});

app.get('/basic.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(__dirname + '/component/pages/basic.js');
});

app.get('/header.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(__dirname + '/component/header/header.js');
});

app.get('/header.css', (req, res) => {
  res.type('text/css');
  res.sendFile(__dirname+'/component/header/header.css');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});