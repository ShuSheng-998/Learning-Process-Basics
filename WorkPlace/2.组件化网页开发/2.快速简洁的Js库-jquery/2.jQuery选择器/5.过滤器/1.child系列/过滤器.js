$(document).ready(function(){
/* 1.:first-child()和:last-child()
        必须从开头或结尾来数，算第一个或最后一个
    */
   var first = $('details > p:first-child');
   var last  = $('details > p:last-child ');
/* 2.:nth-child(n)和:nth-last-child(n)
        必须从开头或结尾来数，算第n个或 最后n个
    */
   var nthf = $('details > p:nth-child(2)');
   console.log(nthf);
/* 3.:only-child
        details下必须只有此p标签
    */
   var only = $('details > p:only-child');
   console.log(only);
  })