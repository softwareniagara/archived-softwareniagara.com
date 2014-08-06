(function($) {
  $(document).ready(function(e) {
    var $toggle = $('#header .toggle');
    var $navigation = $('.navigation-overlay');
    var $link = $('.navigation-overlay li a');

    $toggle.on('click', function(e) {
      e.preventDefault();
      $toggle.toggleClass('toggled');
      $navigation.toggleClass('open');
    });

    $link.on('click', function(e) {
      e.preventDefault();

      var $target = $($(this).attr('href'));

      $toggle.removeClass('toggled');
      $navigation.removeClass('open');

      $('html, body').animate({
        scrollTop: $target.offset().top - '89'
      }, 300);
    });
  });
})(jQuery);

