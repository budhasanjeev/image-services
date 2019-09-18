
console.log('client side code running.... ');


const lineButton = document.getElementById('btn-line');
const facebookButton = document.getElementById('btn-facebook');
const instagramButton = document.getElementById('btn-instagram');
const wechatButton = document.getElementById('btn-wechat');

lineButton.addEventListener('click', function(e) {
  console.log('LINE .....');
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


