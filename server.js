const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/index.html');
});

app.get('/auth', function(req, res) {

  var appName = req.query.appName;

  
});


app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});