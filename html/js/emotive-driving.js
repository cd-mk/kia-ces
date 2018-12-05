var layoutHeight = function() {
  $('.layout-background').each(function() {
    var imgHeight = $(this).find('img').outerHeight();

    $(this).find('picture').height(imgHeight);
  });
}


var cesMediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
}

var cesScrollEffect = function() {
  var winH = $(window).outerHeight();

  $('.ces-onScreen').each(function() {
    var isFirst = $(this).eq(0).offset().top < winH;

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
    }
  });
}

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
    .slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: false,
      focusOnSelect: false,
      infinite: false,
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
}

$(document).ready(function() {
  if ($('.layout-background').length) {
    layoutHeight();
  }
  if ($('.ces-onScreen').length) {
    cesScrollEffect();
  }
  if ($('.ces_2019_films').length) {
    cesSlideInit();
  }
  $('.ces_2019_media .btn-play').each(function() {
    $(this).on('click', cesMediaPlay);
  });
  $('.ces_2019_films .btn-play').on('click', cesMediaPlay);
});