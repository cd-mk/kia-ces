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

var cesDetailsSlide = function() {
  $('.details-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: 'unslick'
      }
    ]
  });

  $(window).on('resize', function() {
    $('.details-list').slick('resize');
  });
};

var cesDetailSlide = function() {
  var $target = $('.details-list');
  var slideSetting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
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
  }
});