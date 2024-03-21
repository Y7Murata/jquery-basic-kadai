$(function() {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
  // id属性がtargetの要素のcolorプロパティをredにする
  $('#target').css('color', 'red');
  });
 
  // id属change-textの要素がクリックされたら
  $('#change-text').on('click', function(){ 
  $('#target').css('color', 'red');
  $('p').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
  // フェードアウトする
  $('#target').fadeOut();
  });

  // id属性がfadeOutの要素がクリックされたら
  $('#fade-in').on('click', function() {
  // フェードインする
  $('#target').fadeIn();
  });
});
