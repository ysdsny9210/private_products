/*
	カレントページのURLに付与されている指定のパラメータを
	指定したアンカーのリンクに設置する

	＜実装方法＞
	1. param_linkgrant.js を格納しソース内に設置
	2. パラメータを設置するアンカーリンクに、“add_param”クラスを追加

	※実装の際にコメントを外すこと※

	auth：吉田（yoshida@pencil.co.jp）
	date：2016/06/02

	参考：http://www.ipentec.com/document/document.aspx?page=javascript-get-parameter
*/

window.onload = function onLoad() {
	GetQueryString();
}
function GetQueryString() {

	var param = new Object;
	//パラメータを個別で配列要素として格納
	var params = location.search.substring(1).split('&');

	//パラメータ付きのページかを判定
	//（パラメータが無い場合は反映させないようにするため）
	if (params!="") {

		for(var i=0;params[i];i++) {
			//パラメータのkey、valueを分ける
			var kv = params[i].split('=');
			//パラメータのkey、valueをそれぞれで紐付ける
			param[kv[0]]=kv[1];  // kv[0]がkey,kv[1]がvalue
		}

		//リンクに付与するパラメータを指定
		var para_key = ['ad_code'];
		//対象のアンカーを指定し、全て配列に格納
		var anchors = document.querySelectorAll('a.add_param');

		for (var i = 0; i < anchors.length; i++) {
			var anchor = anchors[i];
			//アンカーのリンクURLを取得
			var anchorUrl = anchor.href;
			//既にパラメータがついているか判定
			if (anchorUrl.indexOf('?')!=-1) {
				//パラメータ付きの場合は、&を付けて付与
				anchorUrl += '&';
			} else {
				//パラメータ無しの場合は、？を付けて付与
				anchorUrl += '?';
			}
			//付与するパラメータ用の変数を用意
			var add_param;
			//パラメータのvalueに値があるか判定
			if (param[para_key[0]]) {
				//valueあり　key=valueとして追記
				add_param = para_key[0]+'='+param[para_key[0]];
			} else {
				//valueなし　keyのみ追記
				add_param = para_key[0];
			}
			//パラメータを追加したリンクURLを、新しくアンカーリンクに上書き
			anchor.href = anchorUrl + add_param;
		}
	}

	$("#param").html(add_param);
}
