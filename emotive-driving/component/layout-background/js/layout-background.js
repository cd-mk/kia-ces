var isLayoutMobile = function() {
  var winW = $(window).outerWidth();

  if (winW > 768) {
    $('.layout-background').addClass('not-mobile');
  }

  $(window).resize(function() {
    winW = $(window).outerWidth();
    if (winW < 768) {
      $('.layout-background').removeClass('not-mobile');
    } else if (winW > 768) {
      $('.layout-background').addClass('not-mobile');
    }
  });
};

$(document).ready(function() {
  if ($('.layout-background').length) {
    isLayoutMobile();
  }
});