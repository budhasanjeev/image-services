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

// serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

passport.use(new LineStrategy(
  {
    channelID: '1622665154',
    channelSecret: '25827f9a4dc09d5f27be48a54202acca',
    useAutoLogin: true,
    callbackURL: 'https://oauth-services-app.herokuapp.com/auth/line/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

app.use(passport.initialize());

app.get('/auth/line/callback', passport.authenticate(LineStrategy.NAME), function(req, res) {
    res.redirect('/');
  }
);

app.post('/auth/line', passport.authenticate(LineStrategy.NAME));

app.listen(port, function() {
  console.log(`The app is listening at localhost:${port}`);
});



/*
1. https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1622665154&redirect_uri=https://oauth-services-app.herokuapp.com/&state=sanjeev1234&scope=openid%20profile&nonce=09876xyz


  response from server https://oauth-services-app.herokuapp.com/?code=4HYeXO4ZrkgdN3kqTyh2&state=sanjeev1234

2. https://api.line.me/oauth2/v2.1/4HYeXO4ZrkgdN3kqTyh2
 */
