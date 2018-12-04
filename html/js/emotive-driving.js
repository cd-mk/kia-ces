var mediaPlay = function() {
  var iframeSrc = $(this).closest('.img-wrap').data('src');

  $(this).closest('.img-wrap').next('iframe').attr('src', iframeSrc + '?autoplay=1');
  $(this).closest('.img-wrap').addClass('video-play');
}

// var exScrollMotionInit = function() {
//   var b = 800,
//       a = 800;
//   $(window).resize(function() {
//       if ($(window).height() != b || $(window).width() != a) {
//           b = $(window).height();
//           a = $(window).width();
//           $(window).scroll()
//       }
//   });
//   $(window).scroll(function(f) {
//       var e = $(window).scrollTop();
//       var d = $(window).height();
//       var c = $(window).width();
//       $(".ces-onScreen").each(function(k, n) {
//           if ($(this).hasClass("js-onSceen-animateend")) {
//               return
//           }
//           var m = $(this).offset().top - d;
//           var j = m + $(this).outerHeight();
//           var h = e - d;
//           var l = (m <= e && j >= h);
//           var g = false;
//           if (c <= 767) {
//               g = true
//           }
//           $(this).css({
//               position: "relative",
//               opacity: 0,
//               bottom: 150
//           });
//           if (l) {
//               if (!$(this).hasClass("js-onSceen-animateend")) {
//                   var p = $(this);

//                   function o() {
//                       p.css({
//                         position: "",
//                         opacity: "",
//                         bottom: "",
//                         transform: ""
//                       })
//                   }
//                   TweenMax.to($(this), 0.8, {
//                     bottom: 0,
//                     force3D: g,
//                     opacity: 1,
//                     onComplete: o
//                   });

//                   $(this).addClass("js-onSceen-animateend animated");
//               }
//           }
//       })
//   }).scroll()
// };
// $(document).ready(function() {
//   $('.ces-onScreen').each(function() {
//     if($(this).eq(0).offset().top < $(window).outerHeight()) {
//       $(this).eq(0).addClass("js-onSceen-animateend animated");
//     }
//   });
// });
// exScrollMotionInit();

$(document).ready(function() {
  $('.ces-onScreen').scrollex({
    enter: function() {
      $(this).addClass('js-animated');
    }
  })
});