$(function(){

/*
	$(".titulo").click(function(){

		var conteudo = $(this).parent().find(".conteudo");

		if(!conteudo.hasClass("show")){

			$(".caixa").find(".show").slideUp("fast", function(){

				$(this).addClass("hide").removeClass("show")

			});

			conteudo.slideDown("fast",function(){

				$(this).addClass("show").removeClass("hide")

			});

		}
	})
	*/


	var a = 1,b = 2,c = 3,d = 4,e = 5,f = 6,g = 7,h = 8,i = 9;
	var calculo = 0, resultado;
	var sinal;

	// SOMA

		if ($(".soma").click(function(){
			
		while($(".um").click(function(){

			calculo = calculo + a;
			

		}))break;
		while($(".dois").click(function(){

			calculo = calculo + b;
			

		}))break;
		while($(".tres").click(function(){

			calculo = calculo + c;
			

		}))break;
		while($(".quatro").click(function(){

			calculo = calculo + d;
			

		}))break;
		while($(".cinco").click(function(){

			calculo = calculo + e;
			

		}))break;
		while($(".seis").click(function(){

			calculo = calculo + f;
			

		}))break;
		while($(".sete").click(function(){

			calculo = calculo + g;
			

		}))break;
		while($(".oito").click(function(){

			calculo = calculo + h;
			

		}))break;
		while($(".nove").click(function(){

			calculo = calculo + i;
			

		}))break;
			}));

		$(".calcular").click(function(){

			alert("Resposta: "+ calculo);

		});

});