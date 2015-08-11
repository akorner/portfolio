$(function() {
  // Handler for .ready() called.
	  $('.navToggle').click(function(){
	  $('.menu').toggleClass('menuOn');
	  $('nav').toggleClass('navOn');
	})
});

$(function() {
  // Handler for .ready() called.


  //anything with class hotzone, when clicked, will load http:// contained in "data-link"

  $('.hotzone').each(function(){
  	$(this).click(function(e){
  		e.preventDefault();
  		var link = $(this).attr('data-link');
  		//alert(link);
  		window.location.href = link;
  	}); 	
  });
});