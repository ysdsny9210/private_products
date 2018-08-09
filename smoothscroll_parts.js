//スムーズスクロール
//クラス指定したアンカーにのみ適用
jQuery(function(){
	//// pageScroll ////
	$('.scroll[href^="#"]').click(function(e) {
		var id = $(this).attr("href");
		if (id == "javascript:void(0)") id = $(this).attr("rel");
		var target = $(id).offset().top;
		smoothScroll(target);
		e.preventDefault();
	});
	function smoothScroll(target) {
		var offset = 60;
		target -= offset;
		$('html, body').animate({
			scrollTop:target
		}, 500);
	}
});
