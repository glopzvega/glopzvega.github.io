$(function(){


	$("li").on("click", function(){
		var newActive = $(this);
		$("li.active").removeClass("active");
		newActive.addClass("active");
	});

	$(".experience .exp").hover(function()
		{
			$(this).addClass("exp_hover");			
			$(this).find(".description h3 span").addClass("exp_span_hover")			
			$(this).find("img").addClass("exp_img_hover");

		}, function(){
			$(this).removeClass("exp_hover");
			$(this).find(".description h3 span").removeClass("exp_span_hover")			
			$(this).find("img").removeClass("exp_img_hover");
		});

	// $(".exp").on("hover", function(){

	// 	$(this).addClass("exp_hover");
	// 	$(this).find("img").addClass("exp_img_hover");

	// });


});