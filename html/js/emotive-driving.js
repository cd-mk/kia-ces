var mediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
}

$(document).ready(function() {
  $('.ces-onScreen').each(function() {
    var winH = $(window).outerHeight(),
        isFirst = $(this).eq(0).offset().top < winH;

    if (isFirst) {
      if (!$(this).eq(0).hasClass('js-animated')) {
        $(this).eq(0).addClass('js-animated');
      }
    }
  });
  
  $('.ces-onScreen').scrollex({
    bottom: '-10%',
    mode: 'bottom',
    enter: function() {
      $(this).addClass('js-animated');
    },
  });

  $('.btn-play').on('click', mediaPlay);
});