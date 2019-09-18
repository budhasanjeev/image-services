const express = require('express');
var webclient = require("request");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/index.html');
});

app.get('/auth', function(req, res) {

  webclient.get({
    url: 'https://access.line.me/oauth2/v2.1/authorize',
    qs: {
      response_type: 'string',
      client_id: '1622665154',
      redirect_uri: 'https://secure-beach-84908.herokuapp.com/',
      state: '1234',
      scope: 'profile'
    }
  }, function (error, response, body) {
    console.log(body);
  });
});


app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});