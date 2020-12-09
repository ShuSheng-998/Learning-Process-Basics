$(document).ready(function(){
/* 1.details >p:first-of-type()和:last-of-type()
            选择details标签下，type为p的第一个标签 或 最后一个
    */
    var first =$('details > p:first-of-type');
    var last = $('details > p:last-of-type');
    console.log(first);
/* 2.details >p:nth-of-type()和:nth-last-of-type()
            (1)选择details标签下，type为p的第n个标签 或 最后开数的第n个
            (2)odd奇数位置的p，even偶数位置的p，an+b位置的p
    */
    var nthf = $('details > p:nth-of-type(2)');
    console.log(nthf);
/* 3.details >p:only-of-type
            选择details标签下，type为p的标签是唯一的
    */
   var only = $('details > p:only-of-type');
   console.log(only);
})