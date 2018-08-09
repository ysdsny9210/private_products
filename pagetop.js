//ページトップへ
//スクロール位置により挙動
jQuery(function(){
	//ページトップへボタンの表示/非表示
	var _scrollTop = 0;
	function getScrollTop(){
		_scrollTop = $(window).scrollTop();
		if (_scrollTop > 100 ) {
			$("footer .gotop").fadeIn();
		} else {
			$("footer .gotop").fadeOut();
		}
	}
});
