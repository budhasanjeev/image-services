$(document.body).on('click', '[action-convert]', function() {
  alert("Convert");
});

$(document.body).on('click', '[action-download]', function() {
  alert("Download");
});

$('#image-file').live('change', function() {
  alert('change in file');
});