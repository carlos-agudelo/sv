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

$(".attention_adult .attention_info").hover(function(){
	$(".attention_adult").toggleClass("attention_active");
});

$(".attention_child .attention_info").hover(function(){
	$(".attention_child").toggleClass("attention_active");
});