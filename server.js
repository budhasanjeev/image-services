const express = require('express');
const app = express();
const passport = require('passport');
const LineStrategy =  require('passport-line2');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/index.html');
});

app.use(passport.initialize());

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

// serialize user 
passport.serializeUser(function(user, done) {
  done(null, user)
});

// deserialize user
passport.deserializeUser(function(obj, done) {
  done(null, obj)
});

app.get('/auth/line/callback', passport.authenticate('line', { failureRedirect: '/login', successRedirect : '/' }), function(req, res) {
    res.redirect('/');
  }
);

app.get('/auth/line', passport.authenticate('line'));

app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});
