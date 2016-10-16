(function($) {  
  $(document).ready(function() {
    $('[href="mailto:info@softwareniagara.com"]').on('click', function(e) {
      e.preventDefault();
      HS && HS.beacon && HS.beacon.open();
    });
  });
})(jQuery);