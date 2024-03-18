  // HTMLドキュメントが読み込み完了した時
  $(window).on('load',function(){
    console.log('loadイベントが発生しました');
});
  
  // 画面をスクロールした時
  $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
});
