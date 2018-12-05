var mediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
}

$(document).ready(function() {
  $('.ces-onScreen').scrollex({
    enter: function() {
      $(this).addClass('js-animated');
    }
  });

  $('.btn-play').on('click', mediaPlay);
});