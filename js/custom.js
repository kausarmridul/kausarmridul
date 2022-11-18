$(document).ready(function () {
  // Wow Js
  var wow = new WOW({
    offset: 70,
  });
  wow.init();

  // Venobox

  new VenoBox({
    selector: ".gallery-link",
  });

  // Navmenu
  $("#nav").onePageNav();

  // Auto slider
  $(function () {
    $(".my-feature-list").infiniteslide({
      responsive: true,
      speed: 40,
    });
  });

  // Menu in Mobile & Tab Device

  $(".small-menu").click(function () {
    $(".menu-list").toggleClass("add");
  });
  // Scrolltop  and Sticky menu

  $(window).scroll(function () {
    var scrooling = $(this).scrollTop();
    if (scrooling > 400) {
      $(".scrollTop").slideDown();
    } else {
      $(".scrollTop").slideUp();
    }
    if (scrooling > 300) {
      $("header").addClass("nav-sticky");
    } else {
      $("header").removeClass("nav-sticky");
    }
    $(".menu-list").removeClass("add");
  });

  $(".scrollTop").click(function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });

  function screenClass() {
    if ($(window).innerWidth() > 960) {
      $("header .remove-class").addClass("container");
      $(".menu-list a").removeClass("combtn");
    } else {
      $("header .remove-class").removeClass("container");
      $(".menu-list a").addClass("combtn");
    }
  }
  screenClass();
  $(window).bind("resize", function () {
    screenClass();
  });

  // Preloader

  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
  });

  // Testimonial Slider

  $(".testimonial-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  var typed = new Typed(".typed-js", {
    strings: [
      "Professional Freelancer",
      "Web Designer",
      "Web Developer",
      "Website Coder",
      "Front End Developer",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    smartBackspace: true,
  });
});