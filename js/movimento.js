$(function(){

	$("#boneco2").hide();
	$("#boneco3").hide();
	$("#boneco4").hide();


	$("body").keydown(function(e) {

	if(e.keyCode == 37) {
		$("#boneco").hide();
		$("#boneco3").hide();
		$("#boneco4").hide();
		$("#boneco2").show();
		$("#boneco").css({"margin-top":"23"});
		$("#boneco").animate({"margin-left":"-=15"},500);
		

	}	
	else if(e.keyCode == 39) {
		$("#boneco2").hide();
		$("#boneco3").hide();
		$("#boneco4").hide();
		$("#boneco").show();
		$("#boneco").animate({"margin-left":"+=15"},500);
	}
	else if(e.keyCode == 40 ) {
		$("#boneco").hide();
		$("#boneco2").hide();
		$("#boneco3").show();
		
	}
	else if(e.keyCode == 38 ) {
		$("#boneco2").hide();
		$("#boneco3").hide();
		$("#boneco4").hide();
		$("#boneco").show();
		$("#boneco").css({"margin-top":"23%"});
	}

	else if(e.keyCode == 32 ) {
		$("#boneco2").hide();
		$("#boneco3").hide();
		$("#boneco4").hide();
		$("#boneco").show();
		$("#boneco").css({"margin-top":"15%"});

	}
});
});
