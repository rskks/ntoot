
$(document).ready(function() {
    var headerHeight = $('#header').outerHeight(); // height in px

    $('#fullpage').fullpage({
        sectionsColor: ['white','black','white','white'],
        anchors:['home','art','about','contact'],
        afterLoad: function(origin, destination){
    // remove previous active states
    $('.desktop-menu li').removeClass('active');
    // add active state to current
    $('.desktop-menu li[data-menuanchor="' + destination.anchor + '"]').addClass('active');
  },
        menu:'#myMenu',
        responsiveWidth: 760,
        easingcss3:'ease',
        scrollingSpeed:2000,
        touchSensitivity: 10,
        continuousHorizontal: true,
        scrollBar: false,
        paddingTop: headerHeight + '300px',   
        afterLoad: function(origin, destination, direction) {
            fullpage_api.setScrollingSpeed(1400); // reset speed
            // Animation for art section
            if (destination.anchor === 'art' || destination.anchor === 'about') {
                $('.button').each(function(){
                    $(this).removeClass('icon-hidden').addClass('animate__animated animate__bounceIn');
                });
            }
        }
    });

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
    layout: 'sameWidth',
    gutterPixels: 10,
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
  
  grecaptcha.ready(function () {
    grecaptcha.execute('6LcCyNIlAAAAAAuE7ueF5zh3A_bt1MkG4Oczq9Kk', {action: 'submit'}).then(function (token) {
        console.info("got token: " + token);
        document.getElementById('g-recaptcha-response').value = token;
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
    $('.burger').on('click', function() {
  $('.mobile-overlay').toggleClass('mob-active');
})

$(window).resize(function() {
        var newHeaderHeight = $('#header').outerHeight();
        fullpage_api.setAutoScrolling(false);   // temporarily disable
        fullpage_api.setPaddingTop(newHeaderHeight + 'px');
        fullpage_api.setAutoScrolling(true);    // re-enable
    });

});

