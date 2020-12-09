/* .on(events,[selector],[data],fn)
    1.event是事件，

    2.selector是选择器，如document.on('click','a',fn)就是对document下的a标签进行事件绑定
        ***主要是为了绑定动态生成的DOM元素，普通的方法不能找到动态生成的DOM元素

    3.data是参数
    4.fn是处理函数

    5.绑定多个事件时，在on内传入一个对象，对象内属性是事件名，属性的内容是用于处理的函数
    $('a').add(document).on({
        mouseenter:function(){

        },
        keydown:function(){
            
        }
    })
*/