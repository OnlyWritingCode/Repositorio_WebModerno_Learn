$(document).ready(function () {
  var miarray = ["n1", "n2", "n3", "n4"];

  $.each(miarray, function (i, val) {
    $("usuarios").append("<li>" + val + "</li>");
  });
});
