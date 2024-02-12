$(function(){

// home banner slider
$('.bannerSlider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'bannerDots container',
});

$('.bannerSliderSm').slick({
    arrows: false
});
// Bootstrap tooltip

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// product slider
$('.productCnt').slick({
    slidesToShow: 4
});
})