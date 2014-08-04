(function($) {
  $(document).ready(function() {
    var resizeIntroduction = function() {
      var height = $(window).height();
      $('#introduction').css({height: height + 'px'});
    };

    resizeIntroduction();
    $(window).resize(resizeIntroduction);
  });
})(jQuery);
