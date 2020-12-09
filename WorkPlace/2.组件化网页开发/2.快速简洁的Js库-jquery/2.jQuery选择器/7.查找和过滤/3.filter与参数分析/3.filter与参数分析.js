$(document).ready(function(){
    /* 1.filter(expr|object|element|fn)
        筛选出与指定表达式匹配的元素集合
    */
    var allLis = $('li');
    var python = allLis.filter('.python');
    console.log(python);
})