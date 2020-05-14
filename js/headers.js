// 吸顶

//同时的显示隐藏
$(function() {

	$(window).scroll(
		function() {
			var scrO = $(window).scrollTop();
			// console.log(scrO);
			if (scrO > ($("#header").height())) {
		
				$("#headers").css({
					"position": "fixed",
					"right": "0",
					"top": "8px",
					"z-index": 5
				})
				
				$("#header").css({
					"height":"10px",
					"position": "fixed",
					"top": "0px",
					"z-index": 5,
					"background":"#be0f34"
				})
				
				$(".hui").css({
					"display":"none"
				})
				
				$(".right").css({
					"display":"block"
				})
			} else {
				$(".duo").css({
					"display":"none"
				})
				$(".right").css({
					"display":"none"
				})
				
				$(".hui").css({
					"display":"block"
				})
				
				$("#header").css({
					"position": "",
					"height":"40px",
					"background":"#be0f34"
				})
					
				$("#headers").css({
					"position": ""
				});
			}
		}
	)
	
	
	//滑过更多
	$(".duo").mouseover(function(){
		$("#mag").css({
			"display":"block"
		})
	})
	$(".duo").mouseout(function(){
		$("#mag").css({
			"display":"none"
		})
	})
	$("#mag").mouseover(function(){
		$("#mag").css({
			"display":"block"
		})
	})
	$("#mag").mouseout(function(){
		$("#mag").css({
			"display":"none"
		})
	})
	
})





// 针对浏览器窗口的滚动条，两者在ie下有兼容性，
// jQuery中，$(document).scrollTop()与 $(window).scrollTop()效果完全相同
// 但是，$(window).scrollTop()被所有浏览器支持所以，以后尽量用$(window).scrollTop()
