
console.log('client side code running.... ');
var webclient = require("request");

const lineButton = document.getElementById('btn-line');
const facebookButton = document.getElementById('btn-facebook');
const instagramButton = document.getElementById('btn-instagram');
const wechatButton = document.getElementById('btn-wechat');

lineButton.addEventListener('click', function(e) {
  console.log('LINE .....');

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

facebookButton.addEventListener('click', function(e) {
  console.log('facebook .....');
});

instagramButton.addEventListener('click', function(e) {
  console.log('instagram .....');
});

wechatButton.addEventListener('click', function(e) {
  console.log('wechat .....');
});


