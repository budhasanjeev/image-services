
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  $('.fa-sync').removeClass('hide');

  $.ajax({
    url: 'auth',
    type: 'post',

    success: function(res) {
      console.log('res = '+ res);
    },
    error: function(err) {
      console.log('err = '+ err);
    },
    complete: function() {
      $('.fa-sync').addClass('hide');
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


