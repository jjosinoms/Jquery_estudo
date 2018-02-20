$(function(){

// Muda de imagem caso ela não exista!!! 

/*
	$("img")
		.error(function(){
			$("img")
				.attr("src","img/erro.gif");

		});

*/

// Indica o caminho da imagem com erro !!

/*
	$("img")
		.error(function(){
			var imagem = $(this).attr("src");
			alert ("Imagem" + imagem + "indisponivel !");
			$("img")
				.attr("src","img/erro.gif");	

		});
*/

	//Deixa responsivo

	/*

	$("img")
		.width($(window).width())
		.height($(window).height());
	$(window)
		.resize(function(){

			$("img")
				.width($(window).width())
				.height($(window).height());


		});

		*/
// Esconde conteudo quando scroll é utilizado !!

/*
	$(window)
		.scroll(function(){
			$("img")
				.fadeOut(1000);

		});
*/
	$("body")
		.css({height:"5000px"});

	$(window)
		.scroll(function(){
			var topo = $(window).scrollTop();
			if (topo > 300){
				$("img")
					.fadeOut("1000");
			}else{
				$("img")
					.fadeIn("1000");
			}
		});



})