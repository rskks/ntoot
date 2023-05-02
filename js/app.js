
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['white','white','white','aliceblue','white'],
        anchors:['home','abt','project','testimony','contact'],
        menu:'#myMenu2',
        easing:'swing',
        scrollingSpeed: 751,
        touchSensitivity: 10,
        navigation:true,
        scrollBar: false,
        afterLoad: function(origin, destination, direction) {
            if (destination.anchor == 'abt') {
                $('.animate__animated').each(function(){
                    $(this).removeClass('animate__fadeOutDown').addClass('animate__fadeInUp');
                });
                $('.iconify').each(function() {
                    $(this).removeClass('icon-hidden').addClass('animate__animated animate__bounceIn animate__delay-2s');
                });
            }
            else if (destination.anchor == 'project') {
                $('.button').each(function(){
                    $(this).removeClass('icon-hidden').addClass('animate__animated animate__bounceIn');
                });
                //$('.iconify').each(function() {
                //    $(this).removeClass('icon-hidden').addClass('animate__animated animate__bounceIn animate__delay-2s');
                //});
        }
}});

$(document).ready(function() {
    // Fullpage initialization code goes here
    
    // Add mousedown event listener to buttons
    $('.button').on('mousedown', function() {
        // Get the filter value from the data-filter attribute
        var filterValue = $(this).data('filter');
        
        // Add animate classes to the button // Remove the pressed-down class from all buttons except the one that was just clicked
        $(this).removeClass('animate__animated animate__bounceIn').addClass('animate__animated animate__headShake').addClass('pressed-down');
        $('.button').not(this).removeClass('pressed-down animate__animated animate__headShake');
        // Call the filterizr filter function with the selected filter
        $('.filtr-container').filterizr({ 
            filter: filterValue 
        });
    });
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
    layout: 'sameSize',
    grid: {
      rows: 2
    }
  });
  
//rewrite lightbox data on filter
filterizr.on('filteringComplete', function() {
    updateLightboxData();
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
  });
  
  function updateLightboxData() {
    var filteredItems = filterizr.getFiltered();
    $.each(filteredItems, function() {
      $(this).find('a').attr('data-lightbox', '1');
    });
    var nonFilteredItems = filterizr.$elements.not(filteredItems);
    $.each(nonFilteredItems, function() {
      $(this).find('a').removeAttr('data-lightbox');
    });
  }
  
  $('.button').on('click', function() {
    filterizr.filterizr('filter', $(this).data('filter'));
    updateLightboxData();
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

