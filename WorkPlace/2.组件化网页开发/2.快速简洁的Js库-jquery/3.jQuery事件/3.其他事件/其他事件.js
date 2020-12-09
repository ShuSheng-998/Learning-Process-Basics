
/* 1.resize事件，只能是针对windou
    $(window).resize(function(){
        console.log(11);
    }) 
*/


/* 2.focus(获得焦点)   和   blur(失去焦点)   事件，大部分是针对input标签
    $('input').focus(function(){
        console.log("我获得焦点了");
     }) 
*/

/* 3.change  当值发生改变后，经过以下操作会触发事件(即当前不是输入状态时，才会去检测input中的值)
    (1)值改变后，按回车
    (2)值改变后，丢失此input的焦点
    (3)如果type是number或date等，选择一次就会改变一次
    (4)select可以用

    大部分是针对input标签
    $('input').change(function(){
        console.log("我值变了");
    }) 
*/


/* 4.select([[[data],fn])
        （1）当textarea或文本类型的input元素中的文本被选择时，会触发select事件
        （2）checkbox和date等都不行，必须要选中(可以复制粘贴那种)

        $('input').select(function(){
            console.log("我被选中了");
        }) 
*/


/* 5.submit([[data],fn])
        （1）当提交表单的时候，会触发submit事件
        （2）作用：
            提交表单、
                $('input[type=button]').click(function(){
                    $('form').submit()
                })
            阻止表单的提交
                $('form').submit(functin(){
                    return false;
                })
            提交表单时做一些我们需要做的事情(多用于表单验证)
             $('form').submit(functin(){
                    在这里写逻辑(要做的事)
                })
    $('input').select(function(){
        console.log("我被选中了");
    }) 
*/