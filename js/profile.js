$(function(){


	$("li").on("click", function(){
		var newActive = $(this);
		$("li.active").removeClass("active");
		newActive.addClass("active");
	});


});