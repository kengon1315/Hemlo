$(document).ready(function(){
	$(".menu_option").hover(
		function(){
			$(".dropMenu").hide();
			var id = "#" + $(this).attr("id") + "Menu";
			$(id).show();
			$(id).hover(
				function(){},
				function(){
					$(this).hide();
				});
		});
	
});

