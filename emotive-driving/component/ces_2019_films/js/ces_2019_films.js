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

var cesMediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
};

var cesSlideInit = function() {
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
    // 2018.12.12 수정 시작
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
      // 2018.12.12 수정 끝

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

$(document).ready(function() {
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
  if ($('.ces_2019_films').length) {
    cesSlideInit();
  }
  $('.ces_2019_films .btn-play').on('click', cesMediaPlay);
});