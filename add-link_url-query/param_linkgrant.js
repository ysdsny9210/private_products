/*
	カレントページのURLに付与されているパラメータを
	指定したアンカーのリンクに設置する
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
	//URL内のパラメータを取得
	var param = document.location.search;
	//対象のアンカーを指定し、全て配列に格納
	var anchors = document.querySelectorAll('a.add_param');
	for (var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		//アンカーのリンクURLを取得
		var anchorUrl = anchor.href;
		//既にパラメータがついているか判定
		if (anchorUrl.indexOf('?')!=-1) {
			//パラメータ付きの場合は、？を＆に変換
			anchorUrl += param.replace('?','&');
		} else{
			anchorUrl += param;
		}
		//パラメータを追加したリンクURLを、新しくアンカーリンクに上書き
		anchor.href = anchorUrl;
	}
}
