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

// $(document).ready(function() {
//   $('#hamburger').sidr();
// });

$(function() {
  // Handler for .ready() called.

  $('.right-menu').click(function() {
  	$('.mobile-nav').slideToggle();
  });

$( window ).resize(function() {
		if($( window ).width() >= 760) {
			$('.mobile-nav').hide();
		};
	});
});

// $(document).ready(function() {  
  
// //set opacity to 0.8 for all the images  
// //opacity = 1 - completely opaque  
// //opacity = 0 - invisible  
  
// $('.css-hero').css('opacity', 0.8);  
  
// // when hover over the selected image change the opacity to 1  
// $('.css-hero').hover(  
//    function(){  
//       $(this).find('.css-hero').stop().fadeTo('slow', 1); 
//       alert(.css-hero) 
//    },  
//    function(){  
//       $(this).find('.css-hero').stop().fadeTo('slow', 0.4);  
//    });  
  
// }); 