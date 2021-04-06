"use strict";
// jsファイルの先頭に書く。モバイルブラウザならtrue、
// それ以外ならfalseがisMobileにセット。
var isMobile = !!(new MobileDetect(window.navigator.userAgent).mobile());

function link(){
  const url = 'pc.html';
  location.href=url;
}

function link_mobile() {
  const url = 'mobile.html';
  location.href=url;
}

// 場合分けしたい箇所で以下のように使う
if (isMobile) {
    // モバイルブラウザの場合
    setTimeout(link_mobile(), 0);
} else {
    // MobileDetectがモバイル以外の端末と判断した場合。
    setTimeout(link(), 0);
}