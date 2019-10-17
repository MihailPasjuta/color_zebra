jQuery(document).ready(function($) {
  var g_top = 0;
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    
    if ( top > g_top ) {
      $("#head_menu_block").slideUp(700);
    } else {
      $("#head_menu_block").slideDown(700);
    }
    g_top = top;    
  });
});