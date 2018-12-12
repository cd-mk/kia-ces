var cesScrollEffect = function() {
  var stBottom = $(window).outerHeight() + $(window).scrollTop();
  $('.ces-onScreen').each(function() {
    if ($(this).offset().top < stBottom) {
      $(this).addClass('js-animated');
    }
  });

  $('.ces-onScreen').scrollex({
    bottom: '-5%',
    mode: 'bottom',
    enter: function() {
      $(this).addClass('js-animated');
    }
  });
};
// 2018.12.12 수정 시작
var cesDetailSlide = function() {
  var $target = $('.details-list');
  var slideSetting = {
      slidesToShow:1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      focusOnSelect: true,
      variableWidth: true,
      centerMode:true,
      dots: true
      };
// 2018.12.12 수정 끝
  $(window).on('load resize', function() {
    if ($(window).width() > 768) {
      if ($target.hasClass('slick-initialized')) {
        $target.slick('unslick');
      }
      return;
    }
    if (!$target.hasClass('slick-initialized')) {
      return $target.slick(slideSetting);
    }
  });
};

$(document).ready(function() {
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
  if ($('.ces_2019_details').length) {
    cesDetailSlide();
  }
});