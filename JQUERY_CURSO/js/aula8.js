$(function(){

	var ex = $(".ex1");

	$(".ev1")
		.click(function(){
			ex.hide(3000);
		});

	$(".ev2")
		.click(function(){
			ex.show(3000);
		});

	$(".ev3")
		.click(function(){
			ex.toggle(3000);
		});

	$(".ev4")
		.keyup(function(){
			var texto = $(this).val();

			if( texto == "hide"){
				ex.hide(3000);
			}

			if( texto == "show"){
				ex.show(3000);
			}

			if (texto == "toggle"){
				ex.toggle(3000);
			}

		});
});
