var userAcount = document.getElementById("userAcount"),//获取账户名称
    items = document.querySelectorAll(".item_");//获取所有描述对错标签

var pattern_userAcount = /正则/;
    test_1 = false;
userAcount.onblur = function(){
    var pattern_userAcount = /^\w{6,18}$//检验账户名称的正则
    if(this.value==""){ 
        items[0].innerHTML = "用户名不能为空";
        items[0].style.color = "red";
    }else{
        if(!pattern_userAcount.exec(userAcount.value)){
            items[0].innerHTML = "请输入6-18位数字、字母、_";
            items[0].style.color = "red";
        }else{
            items[0].innerHTML = "格式正确";
            items[0].style.color = "green";
            test_1 = true;
        }
    }
}