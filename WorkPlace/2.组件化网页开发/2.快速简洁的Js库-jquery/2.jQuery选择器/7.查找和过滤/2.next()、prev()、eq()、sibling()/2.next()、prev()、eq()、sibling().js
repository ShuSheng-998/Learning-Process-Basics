$(document).ready(function(){
    /* 1.js.next()  /  js.prev()
        找到js的下一个标签  / 找到js的上一个标签
    */
    var js = $('aside').find('.javascript');
    var coffee = js.next();
    console.log(coffee);
    /* 2.lis.eq(8)    获取当前链式操作中第N个jQuery对象
            (1)找到li标签元素集合下的第9个标签
            (2)当值为负数时从最后一个开数
    */
    var lis = $('li').eq(8);
    console.log(lis);

    /* 2.php.siblins    获取当前元素的同级的所有兄弟元素
            (1)找到li标签元素集合下的第9个标签
            (2)当值为负数时从最后一个开数
    */
   var php = $('.php');
   console.log(php);
   var lis_2 = php.siblings();
   console.log(lis_2);
})