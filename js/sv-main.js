window.onload = function() {
    
  $('.carousel').carousel({
    interval: 2000
  })



}

$( ".btn-search" ).click(function(e) {
	e.preventDefault();
	$( ".c-search" ).toggleClass('active-search');
});

$( ".c-icon-menu" ).hover(
	  function() {
	    $( ".btn-contact" ).addClass( "hover" );
	  }, function() {
	    $( ".btn-contact" ).removeClass( "hover" );
	  }
);