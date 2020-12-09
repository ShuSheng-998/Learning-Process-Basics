/* 声明全局变量 */
var index=0,        //当前显示图片的索引，默认值为0
    main=byId("main"),
    prev=byId("prev"),//上一张按钮
    next=byId("next"),//下一张按钮
    pics=byId("banner").getElementsByTagName("div");
    dots=byId("dots").getElementsByTagName("span");
    banner=byId("banner");
    menuContent=byId("menu-content"),
    menuItems=menuContent.getElementsByClassName("menu-item"),
    subMenu=byId("sub-menu"),
    innerBox=subMenu.getElementsByClassName("inner-box"),
    timer=null,//存放定时器
    size=pics.length;



//点击下一张，显示下一张图片
addHandler(next,"click",function () {
    index++;
    if(index>=size){
        index=0;
    }
   changeImage();
});

//点击上一张，显示上一张图片
addHandler(prev,"click",function () {
    index--;
    if(index<0){
        index=size-1;
    }
    changeImage();
});

//点击圆点索引切换图片
for(var i=0,len=dots.length;i<len;i++){
    dots[i].id = i;
    addHandler(dots[i],"click",function(){
        index = this.id;
        changeImage();
    })
}

//自动开启轮播
startAutoPlay();
//鼠标滑入main，自动停止
addHandler(main,"mouseover",stopAutoPlay);
//鼠标离开main，自动开始
addHandler(main,"mouseout",startAutoPlay);




//鼠标滑过主菜单
for(var m=0,idx,mlen=menuItems.length;m<mlen;m++){
     //给所有子菜单定义属性，标明索引
     menuItems[m].setAttribute("data-index",m);
    addHandler(menuItems[m],"mouseover",function() {
         //显示子菜单所在的背景
        subMenu.className="sub-menu";
        //获取当前点击的子菜单的索引
        idx=this.getAttribute("data-index");
        //改变菜单
        changeItem();
    });
}
//鼠标离开banner时，隐藏二级菜单
addHandler(banner,"mouseout",function () {
    subMenu.className="sub-menu hide";
});
//鼠标离开主菜单时，隐藏二级菜单
addHandler(menuContent,"mouseout",function () {
    subMenu.className="sub-menu hide";
});
//鼠标滑入子菜单时，子菜单显示
addHandler(subMenu,"mouseover",function() {
    this.className="sub-menu";
})
//鼠标离开子菜单时。子菜单隐藏
addHandler(subMenu,"mouseout",function () {
    this.className="sub-menu hide"; 
})



//封装图片自动轮播方法
function startAutoPlay() {
    timer=setInterval(function() {
        index++
        if(index>=size){
            index=0;
        }
        changeImage();
    },3000)
}

//封装清楚定时器，停止轮播
function stopAutoPlay() {
    if(timer){
        clearInterval(timer);
    }
}

//封装改变图片的实现方法
function changeImage() {
    for(var i=0;i<size;i++){
        pics[i].style.display="none";//点击后先让所有图片和圆点都隐藏(block)
        dots[i].className="";
    }
    pics[index].style.display="block";//在index等于这个位置的时候让图片和圆点显示出来
    dots[index].className="active";
}

//封装改变二级菜单的方法
function changeItem() {
    for(var i=0;i<mlen;i++){
        innerBox[i].style.display="none";
        menuItems[i].style.background="none";
    }
    innerBox[idx].style.display="block";
    menuItems[idx].style.background="rgba(0,0,0,0.1)";
}
//封装getElementById()
function byId(id) {
    return typeof(id)==="string" ? document.getElementById(id):id;
}

//封装通用事件绑定方法
function addHandler(element,type,handler) {
    //非IE浏览器
    if(element.addEventListener){
        element.addEventListener(type,handler,true);
    }else if(element.attachEvent){          //IE浏览器支持DOM2级事件
        element.attachEvent("on"+type,handler);
    }else{
        //IE浏览器不支持DOM2级
        element["on"+type]=handler;
    }
}

//封装通用事件解除方法
function removeHandler(element,type,handler) {
    //非IE浏览器
    if(element.removeEventListener){
        element.removeEventListener(type,handler,true);
    }else if(element.detachEvent){          //IE浏览器支持DOM2级事件
        element.detachEvent("on"+type,handler);
    }else{
        //IE浏览器不支持DOM2级
        element["on"+type]=null;
    }
}