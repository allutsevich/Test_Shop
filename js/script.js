$(function() {
       $(function(){
        $('.pick-color', $('.color')).click(function() {

  			var elem = $(this).siblings('div.more')
            elem.slideToggle('fast');
            $(this).parent('li').toggleClass('active');
            $('div.more', $('li', $('.color'))).not(elem).slideUp('fast').parent('li').removeClass('active');
        });
      });

});

/*------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, 
                margin:50, 
                nav:true, 
                autoplay:true, 
                smartSpeed:2000, 
                autoplayTimeout:1000, 
                responsive:{ 
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:3
                    }
                }
            });
        });

/*------------------------------------------------------------------------------------------------------------*/

$(function(){

    $('.menuToggle').on('click', function() {
       $('.nav-list').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});