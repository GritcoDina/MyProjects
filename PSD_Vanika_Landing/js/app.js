$('.navbar-collapse a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(window).scroll(function(){
    if($('.navbar').offset().top>50){
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});

$('.home-slider').owlCarousel({
    animateOul:'fadeOut',
    items:1,
    loop:true,
    dots:false,
    autoplayHovelPause:false,
    autoplay:true,
    smartSpeed:1000,
});

$('.owl-courses').owlCarousel({
    animateOul: 'fadeOut',
    loop: true,
    autoplayHovelPause: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ],
    remoteClass:true,
    responsive:{
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});

$('.owl-client').owlCarousel({
    animateOul: 'fadeOut',
    loop: true,
    autoplayHovelPause: false,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});

