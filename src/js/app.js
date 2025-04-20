$(document).ready(function(){

    //Hero Silde
        $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav:true,
        items: 1,
        dots: false,
        responsive:{
            0:{
               
            },
            700:{
               
            }
        
        }
    });
    //More project
        $('#project').owlCarousel({
        loop:true,
        margin:0,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav:true,
        dots: false,
        responsive:{
            0:{
               
            },
            700:{
               
            },
            1400:{

            }
        }
    })

});