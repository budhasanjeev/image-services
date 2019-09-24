
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  firebase.auth().signInWithRedirect(provider).then(function(result) {
    return firebase.auth().getRedirectResult();
  }).then(function() {
    var token = result.credential.accessToken;
    var user = result.user;
    alert("token = "+ token);
  }).catch(function(error) {
    console.log("error = "+ error);
  });

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


