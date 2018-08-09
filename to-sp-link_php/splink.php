<?php
/*
 * スマホサイトへのリンクバナー
 */
	//現在のURLからクエリ部分を抽出し、パラメータごとに分割して、配列を定義
	parse_str($_SERVER["QUERY_STRING"], $params);
	if (isset($_SERVER['QUERY_STRING'])){
		//クエリを持っていれば、クエリ中の特定のパラメータを取得
		$mode=$params['vmode'];
	} else {
		//クエリを持っていなければ、空で定義
		$mode='';
	}
	//UA判定用のプログラムを呼び出し
	require_once('ua_check.php');
	//UA判定プログラムの関数を変数に代入
	$ua = new UserAgent();
	//現在のURLを取得
	$uri = $_SERVER["REQUEST_URI"];
	//現在のURLを基準に、spページのURLを生成
	$redirect_url = "/sp".$uri;
	//UAがモバイル端末かどうか判定
	if($ua->set() === "mobile") {
		//取得したクエリ（ビューモード）がpcモードかどうか判定
		if ($mode !== 'pc') {
			//モバイル端末でpcモードではない場合、spページへ遷移
			header('Location: '.$redirect_url);
			exit();
		} else {
			//モバイル端末でpcモードを閲覧している場合、ページ上部にspページへ遷移するリンクを設置
?>
<script type="text/javascript">
	$(function(){
		$("body").addClass("vmode_pc");
	});
</script>
<div class="sp_link"><a href="<?php echo $redirect_url; ?>"><img src="/img/btn_sp_link.png" alt="スマートフォン用ページを表示する場合はこちらをタップしてください。"></a></div>
<?php
		}
	}
?>
