$(function(){

  // for peloader
  $(window).on('load',function(){
    $("#preloader").fadeOut(500)
  })

  // slick slider part in banner
    $('.slider').slick({
        prevArrow:"<i class='icon fas fa-chevron-left'></i>",
        nextArrow:'<i class="icon fas fa-chevron-right"></i>',
        autoplay:true,
        speed:700,
        fade:true,
        cssEase: 'linear'
    });

    // typed.js use for banner
    var typed = new Typed('.change01', {
        strings: ['Trendy Design',
        '          Show OFF Design', 
                  'Futureistic Electronic Item'],
        smartBackspace: false,
        loop:true,
        typeSpeed:70,
        backSpeed:70,
      });
    var typed = new Typed('.change02', {
        strings: ['Trendy Design',
        '          Show OFF Design', 
                  'Futureistic Electronic Item'],
        smartBackspace: false,
        loop:true,
        typeSpeed:70,
        backSpeed:70,
      });
    var typed = new Typed('.change03', {
        strings: ['Trendy Design',
        '          Show OFF Design', 
                  'Futureistic Electronic Item'],
        smartBackspace: false,
        loop:true,
        typeSpeed:70,
        backSpeed:70,
      });
})