(function($) {

  new WOW().init();

  jQuery(window).load(function() {
    jQuery('.doc-loader').fadeOut('slow');
  });
// Hide loading image

var menu = document.querySelector('.nav-list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();

var openMenu = function() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
};

// reveal content of first panel by default
panel.eq(0).find('.panel-content').addClass('panel-contentactive');

var scrollFx = function() {
  var ds = doc.scrollTop();
  var of = vh / 4;
  
  // if the panel is in the viewport, reveal the content, if not, hide it.
  for (var i = 0; i < panel.length; i++) {
    if (panel.eq(i).offset().top < ds+of) {
     panel
       .eq(i)
       .find('.panel-content')
       .addClass('panel-contentactive');
    } else {
      panel
        .eq(i)
        .find('.panel-content')
        .removeClass('panel-contentactive')
    }
  }
};

var scrolly = function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 300, 'swing', function () {
      window.location.hash = target;
  });
}

var init = function() {
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

doc.on('ready', init);

  
})(jQuery);
