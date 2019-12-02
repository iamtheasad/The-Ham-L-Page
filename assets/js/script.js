jQuery(document).ready(function(){
   $('.header_slider').owlCarousel({
      nav: true,
      items: 1,
      autoplay: false,
      loop: true,
      navText: ["<i class='fas fa-long-arrow-left'></i>", "<i class='fab fa-long-arrow-right'></i>"],
   })
})