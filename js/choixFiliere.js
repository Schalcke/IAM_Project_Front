//  import { swiper } from "https://unpkg.com/swiper/js/swiper.min.js";


var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".flr__item");
var item = document.querySelector(".flr__item");

function cLog(content) {
console.log(content);
}
//  cLog();

if ($(window).width() > 800) {
$(document).on("mouseover", ".flr__item", function(_event, _element) {
    var flrItem = document.querySelectorAll(".flr__item");
    flrItem.forEach(function(element, index) {
    element.addEventListener("mouseover", function() {
        var x = this.getBoundingClientRect().left;
        var y = this.getBoundingClientRect().top;
        var width = this.getBoundingClientRect().width;
        var height = this.getBoundingClientRect().height;

        console.log(x, y);

        $(".item-bg").addClass("active");
        $(".flr__item").removeClass("active");
         $('.flr__item').removeClass('active');

        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    });

    element.addEventListener("mouseleave", function() {
        $(".item-bg").removeClass("active");
        $(".flr__item").removeClass("active");
    });
    });
});
}

var swiper = new Swiper(".flr-slider", {
effect: "cube",
grabCursor: true,
loop: true,
centeredSlides: true,
keyboard: true,
spaceBetween: 0,
slidesPerView: "auto",
speed: 500,
coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false
},
fadeEffect: {
    crossFade: true
},
breakpoints: {
    480: {
    spaceBetween: 0,
    centeredSlides: true
    }
},
simulateTouch: true,
navigation: {
    nextEl: ".flr-slider-next",
    prevEl: ".flr-slider-prev"
},
pagination: {
    el: ".flr-slider__pagination",
    clickable: true
},
on: {
    init: function() {
    var activeItem = document.querySelector(".swiper-slide-active");

    var sliderItem = activeItem.querySelector(".flr__item");

    $(".swiper-slide-active .flr__item").addClass("active");

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;

    $(".item-bg").addClass("active");

    bg.style.width = width + "px";
    bg.style.height = height + "px";
    bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    }
}
});

swiper.on("touchEnd", function() {
$(".flr__item").removeClass("active");
$(".swiper-slide-active .flr__item").addClass("active");
});

swiper.on("slideChange", function() {
$(".flr__item").removeClass("active");
});

swiper.on("slideChangeTransitionEnd", function() {
$(".flr__item").removeClass("active");
var activeItem = document.querySelector(".swiper-slide-active");

var sliderItem = activeItem.querySelector(".flr__item");

$(".swiper-slide-active .flr__item").addClass("active");

var x = sliderItem.getBoundingClientRect().left;
var y = sliderItem.getBoundingClientRect().top;
var width = sliderItem.getBoundingClientRect().width;
var height = sliderItem.getBoundingClientRect().height;

$(".item-bg").addClass("active");

bg.style.width = width + "px";
bg.style.height = height + "px";
bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});
