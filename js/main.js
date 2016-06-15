import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import Blurb from './blurb.jsx';
import About from './about.jsx';
import Coding from './coding.jsx';
import Writing from './writing.jsx';
import Contact from './contact.jsx';

var about = function() {
  render(
    <About />,
    document.getElementById('about')
  );
}
about();

var coding = function() {
  render(
    <Coding />,
    document.getElementById("coding")
  );
}
coding();

var writing = function() {
  render(
    <Writing />,
    document.getElementById("writing")
  );
}
writing();

var contact = function() {
  render(
    <Contact />,
    document.getElementById("contact")
  );
}
contact();


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
  var $buttons = $("#button-container");
  var $navbar = $("#navbar");
  var sections = [
    $("#about"), $("#coding"), $("#writing"), $("#contact")
  ]
  if (position >= $buttons.position().top + $buttons.outerHeight(true) - $navbar.outerHeight(true)) {
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
  var g = t.position().top - $("#navbar").outerHeight(true);
  $('html, body').animate({
    scrollTop: g
  }, 1000);
  return false;
});
