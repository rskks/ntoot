$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu:null,
        direction:'vertical',
        sectionsColor: ['#F3E2B7','antiquewhite','white','antiquewhite','aliceblue'],
        anchors:['home-sec','about-sec','project-sec','testimony-sec','contact-sec'],
        menu:'#myMenu',
        scrollingSpeed:700,
        easing:'swing'
    });

    // filterizr

    var filterizr = $('.filter-container').filterizr({
        animationDuration: .5,
        layout: 'packed',
        grid: {
          rows: 0, // auto-calculate number of rows based on items count
          columns: 5 // number of columns
        }
    });

    // Slick slider
    $('.slider').slick({
        infinite:true,
        autoplay:true,
        autoplaySpeed:1000,
        slidesToShow:3,
        speed:1000,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:400,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite: true,
                }
            }
        ]
    });

    //mobile menu
    $('.burger').on('click',function(){
        $('.overlay').toggleClass('mob-active');
    })
});

