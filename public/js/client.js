
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  $('.loading').removeClass('hide');

  $.ajax({
    url: 'auth/line',
    type: 'post',
    success: function(res) {
      console.log('res = '+ res);
    },
    error: function(err) {
      console.log('err = '+ JSON.stringify(err));
    },
    complete: function() {
      $('.loading').addClass('hide');
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


