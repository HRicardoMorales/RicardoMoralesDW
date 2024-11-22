$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
            nav:true
        },
        550:{
            items:2,
            nav:true,
            loop:true
        },
        800:{
            items:3,
            nav:true,
            loop:true
        }
    }
})