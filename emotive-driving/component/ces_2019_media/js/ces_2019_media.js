var cesScrollEffect = function() {
  var stBottom = $(window).outerHeight() + $(window).scrollTop();
  $('.ces-onScreen').each(function() {
    if ($(this).offset().top < stBottom) {
      $(this).addClass('js-animated');
    }
  });

  $('.ces-onScreen').scrollex({
    // 2018.12.18 bottom 삭제 및 mode 값 middle 로 변경
    mode: 'middle',
    enter: function() {
      $(this).addClass('js-animated');
    }
  });
};

var cesMediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
};

$(document).ready(function() {
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
  $('.ces_2019_media .btn-play').each(function() {
    $(this).on('click', cesMediaPlay);
  });
});