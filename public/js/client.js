
console.log('client side code running.... ');


const lineButton = document.getElementById('btn-line');
const facebookButton = document.getElementById('btn-facebook');
const instagramButton = document.getElementById('btn-instagram');
const wechatButton = document.getElementById('btn-wechat');

lineButton.addEventListener('click', function(e) {
  console.log('LINE .....');
  
  $.ajax({
    url: 'auth',
    type: 'post',

    success: function(res) {
      console.log('res = '+ res);
    },
    error: function(err) {
      console.log('err = '+ err);
    }
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


