	$(function() {
		$(window).scroll(
			function() {
				var scrss = $(window).scrollTop();
				if (scrss > 600) {
					$("#yuan_top").css({
						"display": "block"
					})
				}else{
					$("#yuan_top").css({
						"display": "none"
					})
				}
			})
		$("#yuan_top").click(function(){
			 $("body,html").animate({ scrollTop: 0 });
		})
	})