$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['white','antiquewhite','white','antiquewhite','aliceblue'],
        anchors:['home','abt','project','testimony','contact'],
        menu:'#myMenu2',
        easing:'swing',
        scrollingSpeed: 751,
        touchSensitivity: 10,
        navigation:true,
    });

    // filterizr

 //   var filterizr = $('.filter-container').filterizr({
 //       animationDuration: .5,
 //      layout: 'packed',
 //       grid: {
 //         rows: 2, // auto-calculate number of rows based on items count // number of columns
 //       }
 //   });

 //   $('a[data-lightbox]').filter(function() {
 //       return !$(this).hasClass('filteredOut');
 //     }).lightbox();

// filterizr initialization

var filterizr = $('.filter-container').filterizr({
    animationDuration: .5,
    layout: 'packed',
    grid: {
      rows: 2
    }
  });


// lightbox
$(document).ready(function() {
    // Initialize lightbox with only the filtered images
    var $lightboxItems = $('a[data-lightbox]');
    $lightboxItems.lightbox({
      'disableScrolling': true,
      'alwaysShowNavOnTouchDevices': true,
      'positionFromTop': 50,
      'wrapAround': true
    });
      
    // Filter the lightbox items
    $('.filter-container').on('filtering.filterizr', function() {
      var $filteredItems = $lightboxItems.filterizr('getFiltered');
      $lightboxItems.not($filteredItems).data('lightbox', null);
      $filteredItems.lightbox({
        'disableScrolling': true,
        'alwaysShowNavOnTouchDevices': true,
        'positionFromTop': 50,
        'wrapAround': true
      });
    });
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

