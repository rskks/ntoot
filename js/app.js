
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['white','white','white','aliceblue','white'],
        anchors:['home','project','testimony','contact'],
        afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            $('.nav__item.active').removeClass('active');
            $('.nav__item').eq(slideIndex).addClass('active');
        },
        menu:['#myMenu2','#myMenu'],
        easing:'swing',
        touchSensitivity: 10,
        navigation:true,
        scrollBar: false,    
        afterLoad: function(origin, destination, direction) {
            fullpage_api.setScrollingSpeed(700); // reset speed
            // Animation for project section
            if (destination.anchor === 'project') {
                $('.button').each(function(){
                    $(this).removeClass('icon-hidden').addClass('animate__animated animate__bounceIn');
                });
            }
                
}});

$(document).on('click', '.nav_about', function(e) {
    e.preventDefault();

    // Step 1: Fade in overlay to cover transition flicker
    $('#fadeOverlay').css({ 'opacity': 1, 'pointer-events': 'auto' });

    // Disable slide CSS transitions
    $('.fp-slidesContainer, .fp-slide').css('transition', 'none');

    setTimeout(() => {
        // Step 2: Instant jump to 'home' > slide 1 (about)
        $.fn.fullpage.setScrollingSpeed(0);
        fullpage_api.moveTo('home', 1);
        $.fn.fullpage.setScrollingSpeed(700);

        // Step 3: Restore slide transitions and fade overlay out
        setTimeout(() => {
            $('.fp-slidesContainer, .fp-slide').css('transition', '');

            $('#fadeOverlay').css({ 'opacity': 0, 'pointer-events': 'none' });

            // Animate about content in
            $('#aboutImage')
                .removeClass('animate__fadeOutDown')
                .addClass('animate__animated animate__fadeInLeft');

            $('#aboutText')
                .removeClass('animate__fadeOutDown')
                .addClass('animate__animated animate__fadeInRight');

            $('.iconify').each(function() {
                $(this).removeClass('icon-hidden')
                       .addClass('animate__animated animate__bounceIn animate__delay-2s');
            });
        }, 400); // allow jump to settle before fade out and anims
    }, 400); // wait for overlay fade-in before jump
});

$(document).on('click', '.nav_home', function(e) {
    e.preventDefault();

    // Step 1: Fade in overlay (blocks visual flicker)
    $('#fadeOverlay').css({ 'opacity': 1, 'pointer-events': 'auto' });

    // Step 2: Disable slide CSS transitions globally
    $('.fp-slidesContainer, .fp-slide').css('transition', 'none');

    setTimeout(() => {
        // Step 3: Instant jump with zero scroll speed
        $.fn.fullpage.setScrollingSpeed(0);
        fullpage_api.moveTo('home', 0);
        

        // Step 4: Restore slide CSS transitions after jump settles
        setTimeout(() => {
            $('.fp-slidesContainer, .fp-slide').css('transition', '');
            // Fade out overlay
            $('#fadeOverlay').css({ 'opacity': 0, 'pointer-events': 'none' });
        }, 400); // 50ms should be enough after moveTo finishes
}, 400); // Wait for overlay fade-in before jump
$.fn.fullpage.setScrollingSpeed(700);
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
    $('.burger').on('click',function(){
        $('.overlay').toggleClass('mob-active');
    })
});

