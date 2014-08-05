(function($) {
  $(document).ready(function() {
    $('.event-target').on('click', function(e) {
      e.preventDefault();

      var $self = $(this);
      var $target = $($self.attr('href'));
      var $image = $target.find('.event-image img');
      var doSlide = true;

      $('.event-target').each(function() {
        var $self = $(this);
        var $target = $($self.attr('href'));

        $self.removeClass('targeted').addClass('untargeted');
        if ($target.is(':visible')) {
          $target.hide();
          doSlide = false;
        }
      });

      $self.removeClass('untargeted').addClass('targeted');
      $image.addClass('animated bounceInLeft');

      if (doSlide) {
        $target.slideDown(300);
      } else {
        $target.show();
      }
    });

    $('.event-close').on('click', function(e) {
      e.preventDefault();

      $('.event-target').removeClass('targeted').removeClass('untargeted');
      $('.event-image').removeClass('animated').removeClass('bounceInLeft');
      $('.event').slideUp(100);
    });
  });
})(jQuery);
