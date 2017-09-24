$(document).ready(function(){
$('.slider-active').owlCarousel({

    rtl:true,
    loop:true,
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
     nav:true,

     autoplay:true,
    autoplayTimeout:4000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});