

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    center:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            dots:false
        },
        600:{
            items:4,
            dots:false
        },
        1000:{
            items:6
        }
    }
})

console.log( $('.owl-carousel').owlCarousel)

