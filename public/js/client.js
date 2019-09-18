
console.log('Client-side code running');

const lineButton = document.getElementById('btn-line');
const facebookButton = document.getElementById('btn-facebook');
const instagramButton = document.getElementById('btn-instagram');
const wechatButton = document.getElementById('btn-wechat');

lineButton.addEventListener('click', function(e) {
  console.log('"Logging using line .....');
});

facebookButton.addEventListener('click', function(e) {
  console.log('"Logging using facebook .....');
});

instagramButton.addEventListener('click', function(e) {
  console.log('"Logging using instagram .....');
});

wechatButton.addEventListener('click', function(e) {
  console.log('"Logging using wechat .....');
});


