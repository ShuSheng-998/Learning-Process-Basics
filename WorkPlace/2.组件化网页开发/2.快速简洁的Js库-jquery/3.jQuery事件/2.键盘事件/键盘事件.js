/* 1.keydown([data],fn(event){
    event.key可查看当前按的值
    event.keyCode是key的码，有用
}) 
    当键盘或按钮被按下时，触发keydown事件
*/

/* 2.keyup([data],fn(event){
    event.key可查看当前按的值
    event.keyCode是key的码，有用
}) 
    当键盘或按钮被松开时，触发keyup事件，它发生在当前获得焦点的元素上
*/

/* 3.keypress([data],fn(event){
    event.key可查看当前按的值
    event.keyCode是key的码，有用
}) 
    (1)当键盘或按钮被按时，触发keypress事件，它发生在当前获得焦点的元素上
    (2)用中文输入法输入时，不起作用。没有key
    (3)用ctrl、Alt等控制按键时无作用
*/