window.onload = function() {
    
  $('.carousel').carousel({
    interval: 2000
  })



}

$( ".btn-search" ).click(function(e) {
	e.preventDefault();
	$( ".c-search" ).toggleClass('active-search');
});