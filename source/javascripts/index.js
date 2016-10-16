(function($) {  
  $(document).ready(function() {
    $('.js-open-beacon').on('click', function(e) {
      e.preventDefault();
      HS && HS.beacon && HS.beacon.open();
    });
  });
})(jQuery);