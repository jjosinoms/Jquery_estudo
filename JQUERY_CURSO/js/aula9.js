$(function(){

	

	var ex = $(".ex1");
	var button = $(":button");

/*
	button.click(function(){

		ex.fadeOut("slow");


	}).dblclick(function(){
		ex.fadeIn("fast");
	})
*/

	button.click(function(){

		ex.fadeTo("slow", 0.3)


	});


});
