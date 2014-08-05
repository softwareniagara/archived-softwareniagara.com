(function($) {
  $(document).ready(function() {
    $('.event-target').on('click', function(e) {
      e.preventDefault();

      var $self = $(this);
      var $target = $($self.attr('href'));
      var $image = $target.find('.event-image img');
      var doSlide = true;
      var pos = $target.scrollTop();

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

      if ($image.hasClass('animated zoomIn')) {
        $image.removeClass('animated zoomIn');
      } else {
        $image.addClass('animated zoomIn');
      }

      if (doSlide) {
        $target.slideDown(300);
      } else {
        $target.show();
      }

      $target.scrollTop(pos);
    });

    $('.event-close').on('click', function(e) {
      e.preventDefault();

      $('.event-target').removeClass('targeted').removeClass('untargeted');
      $('.event-image').removeClass('animated').removeClass('bounceInLeft');
      $('.event').slideUp(100);
    });
  });
})(jQuery);
