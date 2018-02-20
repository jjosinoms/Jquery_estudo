$(function(){

	$(".place")
		.each(function(){

			var place = $(this).attr("title");
			var input = $(this);

			input
				.val(place)
				.css({color:"lightgray"})
				.focusin(function(){
					input
						.css({color:"black"});
					if(input.val() == place){
						input.val("");
					}
				}).focusout(function(){
					if (input.val() == ""){
						input.css({color:"lightgray"})
						input.val(place);
					}
				});
		});

		var ex = $(".ex1");

		$(".ev1")
			.focus(function(){

				ex.text($(this).attr("title"));

			}).keyup(function(){

				if ($(this).val() == "com"){
					$(".ev2").focus();
				}

			});

	$(".ev1")
		.blur(function(){
			ex.text("Saida do campo: " + $(this).attr('name'));
		});



});
