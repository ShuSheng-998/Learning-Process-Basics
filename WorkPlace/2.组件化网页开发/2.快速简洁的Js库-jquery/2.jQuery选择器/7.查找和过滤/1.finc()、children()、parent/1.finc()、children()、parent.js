$(document).ready(function(){
    /* 1.find(expr|Object|Element) 
        搜索所有与指定表达式匹配的元素
    */
    var js = $('aside').find('.javascript');
    console.log(js);
    /* 2.$('aside').children('details') 
        找到aside儿子层级的所有details标签
    */
    var lis = $('aside').children('details');
    console.log(lis);
    /* 3.js.parent() 
        找到js的爸爸
    */
   var parent_li = js.parent();
   console.log(parent_li);
})