const express = require('express');
var cors = require('cors')
const app = express();
const passport = require('passport');
const LineStrategy =  require('passport-line');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/index.html');
});

app.use(passport.initialize());
app.use(cors())

passport.use(new LineStrategy(
  {
    channelID: '1622665154',
    channelSecret: '25827f9a4dc09d5f27be48a54202acca',
    useAutoLogin: true,
    callbackURL: 'https://oauth-services-app.herokuapp.com/auth/line/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

app.post('/auth/line/callback', passport.authenticate('line', { failureRedirect: '/', successRedirect : '/' }));

app.post('/auth/line', passport.authenticate('line'));

app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});
