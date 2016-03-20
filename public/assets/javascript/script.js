function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#nav-sections a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos) {
      $('#nav-sections .nav-section').removeClass('active');
      currLink.parent().addClass('active');
    } else {
      currLink.parent().removeClass('active');
    }
  });
}

function loadImg(selector) {
  $(selector).each(function (index, sponsor) {
    var $sponsor = $(sponsor);
    var src = $sponsor.attr('data-src');
    $sponsor.attr('src', src);
  });
}

var switchNav = function () {
  if ($(window).scrollTop() > 15) {
    $('#nav').addClass('active');
    $('#logo_white').hide();
    $('#logo_orange').show();
  } else {
    $('#nav').removeClass('active');
    $('#logo_white').show();
    $('#logo_orange').hide();
  }
};

var switchNavMobile = function () {
  if ($(window).scrollTop() > 15) {
    $('#nav').addClass('active-mobile');
    $('#logo_white').hide();
    $('#logo_orange').show();
  } else {
    $('#nav').removeClass('active-mobile');
    $('#logo_white').show();
    $('#logo_orange').hide();
  }
};

var activateSection = function (section) {
  current = $('.nav-section.active');
  current.removeClass('active');
  $(section).addClass('active');
};

var poem = '%cCal Hacks, a poem %c\n\n' +

  '%cThere once was a wee young lad,\n' +
  'whose brain had gone all sad,\n' +
  "for he didn't ignite his thoughts or his bytes,\n" +
  "and now his friends laugh cause his life isn't rad.\n" +
  'So one dark, stormy night,\n he found, to his delight,\n' +
  'a hackathon so, extravagant, bold,\n' +
  'that he giggled with glee as he hit apply.\n' +
  'And now with his acceptance,\n his friends are filled with reverence,\n' +
  'they pleaded and pleaded, for a chance to compete with,\n' +
  'this lad in Cal Hacks and go undefeated.\n\n' +

  'There once was a bored little lass,\n who wanted to try out SASS,\n' +
  'so she hit apply and overnight,\n' +
  'she found her life filled with delight.\n' +
  'Now everywhere she go,\n she radiates a glow,\n' +
  "cause she's full of ideas of uses and features,\n" +
  'for all types of users and all types of creatures.\n\n' +

  'And now for the final guest,\n a hacker with wonder and zest,\n' +
  "who doesn't deplore a chance to explore,\n" +
  'come join us for 2 days of hacking galore!';

$(document).ready(function () {

  // var window_height = $(window).height();
  // adjust section height

  $('.nav-menu').click(function () {
    $('#nav-sections').show();
    setTimeout(function () {
      $('#nav-sections').addClass('active');
    }, 50);
  });

  if ($(window).width() > 480) {
    $(window).scroll(switchNav);
    $('body').backstretch('assets/img/hackathon_background.jpg');
    $(document).on('scroll', onScroll);
    $('.faq-card').click(function (e) {e.stopPropagation();});
  } else {
    $('#nav').addClass('active-mobile');
    $('#logo_white').hide();
    $('#logo_orange').show();
    $('#nav-close, .nav-section').click(function () {
      $('#nav-sections').removeClass('active');
      setTimeout(function () {
        $('#nav-sections').hide();
      }, 300);
    });
  }

  // smoothscroll
  $("a[href^='#']").on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).parent().removeClass('active');
    });
    $(this).parent().addClass('active');

    var target = this.hash;
    var menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on('scroll', onScroll);
    });
  });

  $('#instructions').click(function () {
    $('#instructions').hide();
  });
});

loadImg('.partner');
loadImg('.sponsor');
