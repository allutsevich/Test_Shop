$(function(){

    $('.menuToggle').on('click', function() {
       $('.nav-list').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});

/*-----------------------------------------------------------------------------------------------------------------*/

(function($) {
$(function() {

  $('ul.showcase__nav-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.showcase').find('div.bags').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);