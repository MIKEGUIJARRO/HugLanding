console.log('Connected');

$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive:{
        // Breakpoint from 0 up
        0:{
            items:1
        },
        //breakpoint from 600 up
        600:{
            items:3
        },
    }
})