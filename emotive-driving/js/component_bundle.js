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

var cesMediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
};

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
  var topArr = [],
      $target = $('.ces_2019_details');

  for (var i = 0; i < $target.length; i++) {
    topArr.push($target.eq(i).offset().top);
  }

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
var cesSlideInit = function() {
  var slideNavSetting = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        }
      }
    ]
  };
  var slideLength = $('.slider-nav > div').length;
  
  function setVariableSlide() {
    var isVariable = true;

    if (slideLength < 6) {
      isVariable = false;
    }

    return isVariable;
  }

  slideNavSetting.variableWidth = setVariableSlide();

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false
  });

  $('.slider-nav')
    .on('init', function(event, slick) {
      var title = $('.slider-nav .slick-slide.slick-current').find('.thumb-title').text();

      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      $('.nav-title').text(title);
    })
    .slick(slideNavSetting);

  $('.slider-for').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    var title = $(currrentNavSlideElem).find('.thumb-title').text();
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');

    $('.slider-for .img-wrap').removeClass('video-play');
    $('.slider-for iframe').attr('src', '');
    $('.nav-title').text(title);
  });

  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-for').slick('slickGoTo', goToSingleSlide);
  });
};

var cesDetailSlide = function () {
  var $target = $('.details-list');
  var slideSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
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
  if ($('.layout-background').length) {
    isLayoutMobile();
  }
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
  if ($('.ces_2019_films').length) {
    cesSlideInit();
  }
  if ($('.ces_2019_details').length) {
    cesDetailSlide();
    // S : 2018.12.18 조건 및 함수 실행 추가
    if ($(window).width() > $(window).outerHeight()) {
      leaveScroll();
    }
    // E : 2018.12.18 조건 및 함수 실행 추가
  }
  $('.ces_2019_media .btn-play').each(function() {
    $(this).on('click', cesMediaPlay);
  });
  $('.ces_2019_films .btn-play').on('click', cesMediaPlay);
});