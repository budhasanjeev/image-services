const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/index.html');
});

app.get('/calculator', function(req, res) {
  res.sendFile(__dirname+ '/views/calculator.html');
});

app.use(cors());

app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});
