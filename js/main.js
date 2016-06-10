// Changes which link in the navbar is active
function changeActive(section) {
  var sectionList = ['n_about', 'n_writing', 'n_coding', 'n_contact']
  for (var i = 0; i < sectionList.length; i++) {
    var sec = $("#" + sectionList[i]);
    if (sec.hasClass("active")) {
      sec.removeClass("active")
    }
  }
  $("#" + section).addClass('active');
}

// Handle all changes with scrolling
var active_section;
$(document).scroll(function() {
  var position = $(document).scrollTop();
  var $header = $("#header");
  var $navbar = $("#navbar");
  var sections = [
    $("#about"), $("#coding"), $("#writing"), $("#contact")
  ]
  if (position >= $header.position().top + $header.outerHeight(true)) {
    $navbar.addClass("fixed");
  }
  else {
    if ($navbar.hasClass("fixed")) {
      $navbar.removeClass("fixed");
    }
  }
  for (var i = 0; i < sections.length; i++) {
    var sec = sections[i];
    if (position + ($(window).height() * .5) >= sec.position().top && position < sec.position().top + sec.outerHeight(true) && sec.attr('id') != active_section) {
      active_section = sec.attr('id');
      changeActive("n_" + sec.attr('id'));
    }
  }
})

// Smoothly animate links
$(".button").click(function() {
  var h = $(this).attr('href');
  var t = $(h);
  var g = t.position().top;
  console.log("g = " + g);
  console.log("window at " + $(document).scrollTop());
  $('html, body').animate({
    scrollTop: g
  }, 1000);
  return false;
})
