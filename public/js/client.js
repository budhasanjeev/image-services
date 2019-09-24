
console.log('client side code running.... ');

$('#btn-line').click(function(e) {
  console.log('LINE .....');

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
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


