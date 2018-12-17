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

$(document).ready(function() {
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
});