window.onload = function() {
  accordeon();

  var IS_ANDROID = navigator.userAgent.match(/Android/i)  != null;
  
  var scroll = $(window).scrollTop();
  var sticky = $(".p_sticky");
  var prevScrollpos = window.pageYOffset;

  $(".link-dropdown>a").attr('data-toggle', 'dropdown');

  $(window).scroll(function (event) {

    // hide and show navbar on scroll 
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos && IS_ANDROID) {
      sticky.addClass('scroll-down');               
    } else {
      sticky.removeClass('scroll-down');
    }
    prevScrollpos = currentScrollPos;
  });     

}

// Acordeon Landing pages
function accordeon(){
    const acc = document.getElementsByClassName("accordion");
    var i;

    if ( acc.length ) {

      for (i = 0; i < acc.length; i++) {
  
          acc[i].addEventListener("click", function() {
  
            
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
        
            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
  
            siblings(panel);
            
          });
      }
      acc[0].classList.add('active');
      siblings(acc[0].nextElementSibling);
      
    }
    
}

function siblings(obj) {
  if (obj.style.maxHeight){
    obj.style.maxHeight = null;
  } else {
    obj.style.maxHeight = obj.scrollHeight + "px";
  }
}

// Carousel

$(document).ready(function() {

  if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 5,
          nav: false,
          loop: false,
          margin: 20
        }
      }
    })
  }

  // accordion speakers
  function close_accordion_section() {
    $('.acorh .acorh-section-title').removeClass('active');
    $('.acorh .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.acorh-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');
    
    if($(this).is('.active')) {
      close_accordion_section();
    }else {
      close_accordion_section();
      // Add active class to section title
      $(this).addClass('active');
      // Open up the hidden content panel
      $('.acorh ' + currentAttrValue).slideDown(300).addClass('open');
    }

    e.preventDefault();
  });


})