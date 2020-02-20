(function iamStrict() {
  "use strict";


  $(document).ready(function () {

    /* Bootstrap Menu Hover Added */
    $('.menu ul li.dropdown').hover(function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(.35).fadeIn(500);
    }, function () {
      $(this).find('.dropdown-menu').stop(true, true).delay(.35).fadeOut(500);
    });
    /* Header Reponsive Menu Start*/


    /* Scroll to Top Button Start */

    // https://codepen.io/karencho/pen/KIgur
    // declare variable
    var topBottomButton = $(".top_bottom_button");

    $(window).scroll(function () {

      // Declare Variable
      var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

      // if user scrolls down - show scroll to top button
      if (topPosition > 900) {
        $(topBottomButton).css({
          "opacity": "1",
        })

      } else {
        $(topBottomButton).css({
          "opacity": "0",
        })
      }
    }); // Scroll End

    //Click event to scroll to top
    $(topBottomButton).on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;

    }); // click() scroll top end
    /* Scroll to Top Button End */


    /* Header Slider With Picture Thumbnail Start */

    var bigimage = $(".header_slider");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
        ]
      })
      .on("changed.owl.carousel", syncPosition);

    thumbs
      .on("initialized.owl.carousel", function () {
        thumbs
          .find(".owl-item")
          .eq(0)
          .addClass("current");
      })
      .owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: [
          '<i class="fas fa-arrow-left"></i>',
          '<i class="fas fa-arrow-right"></i>'
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100
      })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
      var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
    /* Header Slider With Picture Thumbnail -/ */


    /* Portfolio Isotope Start */

    // For Isotope card or image auto height 
    var $portfolioIsotope = $('.portfolio_list').isotope({
      itemSelector: '.portfolio_item',
      percentPosition: true,
      masonry: {
        columnWidth: '.portfolio_item'
      }
    })

    // Connected items between button and isotope item
    $('.portfolio_isotope_menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $portfolioIsotope.isotope({
        filter: filterValue
      });
    });

    // Button active class added for isotope
    $('.portfolio_isotope_menu').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.active_portfolio').removeClass('active_portfolio');
        $(this).addClass('active_portfolio');
      });
    });
    /* Portfolio Isotope End */


    /* Opinion Slick Slider Start */

    $('.opinion_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: true,
      asNavFor: '.opinion_nav',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
    $('.opinion_nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.opinion_slider',
      centerMode: true,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      responsive: [{
        breakpoint: 1024,
        slidesToShow: 1,
      }]
    });
    /* Opinion Slick Slider End */


    /* Flicker Image Show Start */

    $(function () {
      $('.flike_img').flickrush({
        limit: 20,
        id: '152854341@N05',
      });
    });
    /* Flicker Image Show End */

  }); // ready function end
})(); // use strict method end


