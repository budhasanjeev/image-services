
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  ajaxCall('/auth/line', 'post');
});

$('#btn-facebook').click(function(e) {
  console.log('facebook .....');

  // ajaxCall('/auth/facebook', 'post');

});

$('btn-instagram').click(function(e) {
  console.log('instagram .....');
});

$('#btn-wechat').click(function(e) {
  console.log('wechat .....');
});


function ajaxCall(urlString, methodType) {

  $('.loading').removeClass('hide');

  $.ajax({
    url: urlString,
    type: methodType,
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

}


