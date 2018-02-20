$(function(){

	var ex = $(".ex1");

	$(".ev1")
		.click(function(){

			$(this)
				.css({background:"lightgray"});
				ex.text("Você clicou !");

		});

	$(".ev2")
		.dblclick(function(){

			$(this)
				.css({background:"lightgray"});
				ex.text("Você deu 2 clicks!");

		});

	$(".ev3")
		.focusin(function(){

			$(this)
				.css({background:"lightgray"});
				ex.text("Você deu Foco!!");

		}).focusout(function(){
			$(this)
				.css({background:"black"});
				ex.text("Você tirou o Foco!!");

		});

	$(".ev4")
		.hover(function(){

			$(this)
				.css({background:"lightgray"});
				ex.text("Você passou o mouse!");

		});

	$(".ev5")
		.mousedown(function(){
			$(this)
				.css({background:"lightgray"});
				ex.text("Você apertou o botão do Mouse!");


		}).mouseup(function(){
			$(this)
				.css({background:"black"});
				ex.text("Você soltou o botão do mouse!");


		});

	var a = 0;

	$(".ev6")
		.mouseenter(function(){
			a += 1;
			ex.text("Entradas do mouse:" + a);

		}).mouseout(function(){

			ex.text("Saída do Mouse !")
		});

	var b = 0;

	$(".ev7")
		.mouseover(function(){
			b += 1;
			ex.text("Mouse Over" + b)
		}).mouseleave(function(){

			ex.text("Mouse Leave");
		});


	$(".ev8")
		.mousemove(function(move){

			var localx = move.pageX;
			var localy = move.pageY;

			ex.text("Movimento x: " + localx + "Movimento y:" + localy);

		});	



});