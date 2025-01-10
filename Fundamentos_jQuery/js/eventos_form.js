$(function () {
  $("input").focus(function () {
    $(this).css("background", "red");
    $(this).css("color", "white");
  });

  $("input").blur(function () {
    $(this).css("background", "white");
    // $(this).css("color", "white");
  });

  $("input").keyup(function (e) {
    // console.log("keyup");
    console.log(e.target.value);
  });
});
