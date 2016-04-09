function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#nav-sections a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (refElement.position() && refElement.position().top <= scrollPos &&
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
    $('#logo_green').show();
  } else {
    $('#nav').removeClass('active');
    $('#logo_white').show();
    $('#logo_green').hide();
  }
};

var switchNavMobile = function () {
  if ($(window).scrollTop() > 15) {
    $('#nav').addClass('active-mobile');
    $('#logo_white').hide();
    $('#logo_green').show();
  } else {
    $('#nav').removeClass('active-mobile');
    $('#logo_white').show();
    $('#logo_green').hide();
  }
};

var activateSection = function (section) {
  current = $('.nav-section.active');
  current.removeClass('active');
  $(section).addClass('active');
};


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
    //$('body').backstretch('assets/img/background.png');
    $(document).on('scroll', onScroll);
    $('.faq-card').click(function (e) {e.stopPropagation();});
  } else {
    //$('#nav').addClass('active-mobile');
    $(window).scroll(switchNavMobile);
    $('#logo_white').hide();
    $('#logo_green').show();
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
