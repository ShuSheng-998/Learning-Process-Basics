$(document).ready(function(){
    var div = $('div');//标签选择
    console.log(div);
    console.log($(this).index());//-1,因为未绑定事件
   //$(this).index()绑定点击事件内部，不可能同时点击3个，点击某一个是，用这个方法;
  
   //$('div')[index]可以当作是一个数组来调用
})