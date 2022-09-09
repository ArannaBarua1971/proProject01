$(function(){

  $(window).scroll(function(){
    var scrollPostion=$(window).scrollTop()

    
    if(scrollPostion >600){
      $('#menu').addClass('fixed')
      $('#go_to_top').removeClass('display_none')
    }
    else{
      $('#menu').removeClass('fixed')
      $('#go_to_top').addClass('display_none')
    }
  })

  // for peloader
  $(window).on('load',function(){
    $("#preloader").fadeOut(500)
  })

  // slick slider part in banner
    $('.slider').slick({
        prevArrow:"<i class='icon fa-2xl fas fa-chevron-left'></i>",
        nextArrow:'<i class="icon fa-2xl fas fa-chevron-right"></i>',
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
                  'Show OFF Design', 
                  'Futureistic Electronic Item'],
        smartBackspace: false,
        loop:true,
        typeSpeed:70,
        backSpeed:70,
        startDelay:2000,
      });

      // for featured part
      $('#01').click(function(){
        $('#01').addClass('font_color')
        $('#02').removeClass('font_color')
        $('#03').removeClass('font_color')
        $('#04').removeClass('font_color')
        $('#05').removeClass('font_color')
      })
      $('#02').click(function(){
        $('#02').addClass('font_color')
        $('#01').removeClass('font_color')
        $('#03').removeClass('font_color')
        $('#04').removeClass('font_color')
        $('#05').removeClass('font_color')
      })
      $('#03').click(function(){
        $('#03').addClass('font_color')
        $('#02').removeClass('font_color')
        $('#01').removeClass('font_color')
        $('#04').removeClass('font_color')
        $('#05').removeClass('font_color')
      })
      $('#04').click(function(){
        $('#04').addClass('font_color')
        $('#02').removeClass('font_color')
        $('#03').removeClass('font_color')
        $('#01').removeClass('font_color')
        $('#05').removeClass('font_color')
      })
      $('#05').click(function(){
        $('#05').addClass('font_color')
        $('#02').removeClass('font_color')
        $('#03').removeClass('font_color')
        $('#04').removeClass('font_color')
        $('#01').removeClass('font_color')
      })

      // filterizer Activator
      $('.products_item_part').filterizr();

      // cloack for upComing Products
      $('#clock').countdown('2022/10/10', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="time dif"><p>%D</p><p>Days</p></div> '
          + '<div class="time"><p>%H</p><p>Hours</p></div>'
          + '<div class="time"><p>%M</p><p>Mins</p></div>'
          + '<div class="time dif"><p>%S</p><p>Sec</p></div>'));
      });


      // slider for latest Products
      $('.latest_products_item').slick({
        inFinite:false,
        speed:700,
        slidesToShow:4,
        slidesToScroll:2,
        autoplay:true,
        prevArrow:'<i class="icon fa-2xl newicon fas fa-chevron-left"></i>',
        nextArrow:'<i class="icon fa-2xl newicon fas fa-chevron-right"></i>',
        
      });
      
      // slider for testimonial
      $('.testimonial_item_part').slick({
        inFinite:true,
        speed:700,
        slidesToShow:2,
        slidessToScroll:2,
        autoplay:true,
        prevArrow:'<i class="icon  fa-2xl fas fa-chevron-left"></i>',
        nextArrow:'<i class="icon  fa-2xl fas fa-chevron-right"></i>',
      })


     
})

// venobox for blog
new VenoBox({
  selector: ".showInBigPage"
});

// smoth animation for everything
AOS.init();