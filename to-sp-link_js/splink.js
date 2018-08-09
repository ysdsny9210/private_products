/*
UA判定

表示端末のユーザーエージェントを判定し、結果を返す
UA値はスマートフォン、タブレット、PCなど、変数と条件文で追加可能

return uaValue
*/
function uaCheck() {
	//UAを取得
	var ua = navigator.userAgent.toLowerCase();

	//各UAの判定を変数として定義
	var isiPhone = (ua.indexOf('iphone') > -1);
	var isiPad = (ua.indexOf('ipad') > -1);
	var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
	var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);

	//UAの結果を渡す変数を定義
	var uaValue = "";
	//スマートフォン端末かどうか判定
	if (isiPhone || isAndroid) {
		uaValue = "mobile";
	}
	//タブレット端末かどうか判定
	if (isiPad || isAndroidTablet) {
		uaValue = "tablet";
	}
	//UA判定の結果を返す
	return uaValue;
}

/*
ビューモード　クエリ取得

URLに付与していたクエリを取得
取得するクエリ名は変更可能

return mode
*/
function getParam() {
	var arg = new Object;
	//現在のURLからクエリを取得
	//先頭の"?"を除外し、それ以降を&毎に区切り配列として定義
	var pair=location.search.substring(1).split('&');
	//配列の要素ごとに、"="で区切り、更に配列へ代入
	for(var i=0;pair[i];i++) {
		var kv = pair[i].split('=');
		arg[kv[0]]=kv[1];
	}
	var mode = "";
	//定義した配列から特定のキーの値を取得
	if (arg.vmode) {
		mode = arg.vmode;
	}
	//クエリ取得の結果を返却
	return mode;
}

