$(document).ready(function(){
    var firstAndThird = $('#first, div, .third');
    /* 1.选择器的顺序不会影响原html的DOM结构
       2. 选择器重复选择某一个节点，不会在数组中重复
        */
    console.log(firstAndThird);
})