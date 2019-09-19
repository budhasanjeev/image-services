
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  $.ajax({
    url: 'auth',
    type: 'post',

    success: function(res) {
      document.open();
      document.write(res);
      document.close();
    },
    error: function(err) {
      console.log('err = '+ err);
    }
  });

});

$('#btn-facebook').click(function(e) {
  console.log('facebook .....');
});

$('btn-instagram').click(function(e) {
  console.log('instagram .....');
});

$('#btn-wechat').click(function(e) {
  console.log('wechat .....');
});


