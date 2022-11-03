$("header").css("width", $("header").outerWidth());

$(window).scroll(function () {
  if ($(window).scrollTop() > 3) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
