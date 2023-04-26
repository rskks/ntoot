$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['white','antiquewhite','white','antiquewhite','aliceblue'],
        anchors:['home','abt','project','testimony','contact'],
        menu:'#myMenu2',
        easing:'swing',
        scrollingSpeed: 751,
        touchSensitivity: 10,
    });

    // filterizr

    var filterizr = $('.filter-container').filterizr({
        animationDuration: .5,
        layout: 'packed',
        grid: {
          rows: 2, // auto-calculate number of rows based on items count // number of columns
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

