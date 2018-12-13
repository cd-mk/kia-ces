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
    bottom: '-5%',
    mode: 'bottom',
    enter: function() {
      $(this).addClass('js-animated');
    }
  });
};

var cesSlideInit = function() {
  var slideNavSetting = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: false,
    infinite: false,
    variableWidth: true,
    rtl: true,
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
    infinite: false,
    rtl: true
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
      dots: true,
      rtl: true
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
  }
  $('.ces_2019_media .btn-play').each(function() {
    $(this).on('click', cesMediaPlay);
  });
  $('.ces_2019_films .btn-play').on('click', cesMediaPlay);
});