/*
 **  menu
*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("header");
// var linksSide = document.getElementsByClassName("linsSide");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 15;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyScroll");
  } else {
    navbar.classList.remove("stickyScroll");
  }
}
/*
================================== End ================================= 
*/

/*
 ** banner slider video and image
 */
$(function () {
  var mySwiper02 = new Swiper(".swiper-container-banner", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: ".swiper-pagination",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',

    autoplay: 3000,
  });

  // var v = document.getElementsByTagName("video")[0];

  // v.addEventListener("canplay", function () {
  //   mySwiper02.stopAutoplay();
  // }, true);

  // v.addEventListener("ended", function () {
  //   mySwiper02.startAutoplay();
  // }, true);
});
/*
================================== End ================================= 
*/
/*
  side links navigator
*/
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 60,
    },
    500
  );
});
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if( $('.aboutUs').length ) {
     var showFromHere = $(".aboutUs").offset().top - 300;
  if (y > showFromHere) {
    $(".linsSide").fadeIn();
  } else {
    $(".linsSide").fadeOut();
  }
  }

});
/*
================================== End ================================= 
*/
/*
 ** banner slider solutions
 */
const swiper99 = new Swiper(".swiper-solutions", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  // spaceBetween: -30,
  breakpoints: {
    1250: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(".boxHover").hover(function () {
  // $(this).toggleClass('fireMove')
  $(this)
  .toggleClass("s")
  .parents(".swiper-wrapper")
  .toggleClass("forTranslate");
  // return false
});
// $(".closeBtnMin").click(function(){
//   $(this).parents('.s').removeClass('s')
// })

/*
================================== End ================================= 
*/

/*
 ** banner slider Social-media
 */
$("document").ready(function () {
  const swiper002 = new Swiper(".swiper-Social-media", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/*
================================== End ================================= 
*/

/*
 ** Map 
*/

$(".btns a").click(function () {
  let test = $(this).attr("class");
  $(this)
    .addClass("activeMap")
    .siblings()
    .not($(this))
    .removeClass("activeMap");
  $(".mapImg").attr("class", `mapImg ${test}`);
});

/*
================================== End ================================= 
*/

/*
 ** start sectors
 */

  $(".btns a").click(function () {
    let test = $(this).attr("class");
    $(this)
      .addClass("activeMap")
      .siblings()
      .not($(this))
      .removeClass("activeMap");
    $(".mapImg").attr("class", `mapImg ${test}`);
  });

  $(".intState").hover(function () {
    let getClass = $(this).attr("class").split(" ")[1];
    $(this)
      .toggleClass("changeColors")
      .parents(".selectorSec")
      .toggleClass(getClass);
  });

  $(".showBx").click(function () {
    // $(this).addClass('modelCum').delay("slow");
    // return false;
    $(this).children(".intState").addClass("fire");
    return false;
  });

  $(".closeBtn").click(function () {
    $(this).parents().removeClass("modelCum");
    $(this).parents().children().removeClass("fire");
    return false;
  });
});

$(".showBx").click(function () {
  setTimeout(() => {
    $(this).addClass("modelCum");
    return false;
  }, 10);
});

/*
================================== End ================================= 
*/