$(document).ready(function(){
    $('a').click(function(){
        $('img').eq($(this).index()).animate({'opacity':'1'},500).siblings().animate({'opacity':'0'},500); 
    })

   /* 1.animate({css样式},毫秒数)
        自定义动画，实现任意动画效果，需要传递的参数是DOM元素最终的css状态和时间
   */

   /* 2.stop()
        停止当前元素的动画
   */

   /* 3.delay(毫秒数)
        停止当前元素的动画指定的毫秒数后继续执行
   */

   /* 4.show()  /  hide()
        (1).无参形式时，会直接显示和隐藏DOM元素
        (2).传递时间参数后，变成动画
        (3)从左上角开始
   */

   /* 5.toggle(毫秒数)
        (1)取决于当前元素的状态，若是show，则hide，若是hide，则show，参数是快慢
        (2)从左上角开始
   */

   /* 6.fadeIn(毫秒数)   /  fadeOut(毫秒数)  
        (1)动画的淡入淡出，即通过改变DOM元素的opacity属性来实现
   */
  
    /* 7.fadeToggle(毫秒数) 
        (1)取决于当前元素的状态，若是show，则fadeOut，若是hide，则fadeIn，参数是快慢
   */

    /* 8.slideUp()   / slideDown()
        (1)在垂直方向上逐渐展开或收缩
   */

   /* 9.slideToggle()
        (1)取决于当前元素的状态，若是show，则slideDown()，若是hide，则slideUp()，参数是快慢
   */
})