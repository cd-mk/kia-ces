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

// S : 2018.12.18 leaveScroll 함수 추가
var leaveScroll = function() {
  var $target = $('.ces_2019_details');

  $(window).scroll(function() {
    var st = $(this).scrollTop();

    for (var j = 0; j < $target.length; j++) {
      if (st > $target.eq(j).offset().top + $target.eq(j).outerHeight()) {
        $target.eq(j).removeClass('js-animated');
      } else if (st + $(this).outerHeight() < $target.eq(j).offset().top) {
        $target.eq(j).removeClass('js-animated');
      }
    }
  });
};
// E : 2018.12.18 leaveScroll 함수 추가
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
    // S : 2018.12.18 조건 및 함수 실행 추가
    if ($(window).width() > $(window).outerHeight()) {
      leaveScroll();
    }
    // E : 2018.12.18 조건 및 함수 실행 추가
  }
});