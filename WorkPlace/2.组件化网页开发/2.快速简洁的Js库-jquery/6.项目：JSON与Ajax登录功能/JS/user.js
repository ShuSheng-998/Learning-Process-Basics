var user = document.getElementById("user"),
    pwd = document.getElementById("pwd"),
    signUp = document.getElementById("sign-up"),
    titles = document.getElementById("title").getElementsByTagName("span"),
    userInfo = document.getElementById("user-info"),
    userIcon = document.getElementById("user-icon"),
    pwdInfo = document.getElementById("pwd-info"),
    pwdIcon = document.getElementById("pwd-icon"),
    userReg = /^1[3578]\d{9}$/,
    pwdReg = /^\w{6,12}$/,
    isRepeat = false;

    user.addEventListener("blur",checkUser,false);
    pwd.addEventListener("blur",checkPwd,false);
    signUp.addEventListener("click",register,false);
    titles[0].addEventListener("click",showLogin,false);
    titles[1].addEventListener("click",showRegister,false);
//检测用户
function checkUser(){
    var userVal = user.value;
    //检测用户手机号是否正确
    if(!userReg.test(userVal)){
        userInfo.innerHTML = "请输入正确的手机号";
        userIcon.className = "no";
    }else{
        userInfo.innerHTML = " ";
        userIcon.className = "";
    }
    //发起请求
    $.ajax({
        url:'http://localhost/server/isUserRepeat.php',
        data:{username:userVal},
        method:"post",
        success:function(data){
            console.log(data.code);
            if(data.code === 1){
                userIcon.className = "ok";
                isRepeat = false;
            }else if(data.code === 0){
                userIcon.className = "no";
                isRepeat = true;
                userInfo = data.msg;
            }else{
                userInfo = "检测失败";
            }
        }
    });
}

//检测密码
function checkPwd(){
    var pwdVal = pwd.value;
    if(!pwdReg.test(pwdVal)){
        pwdInfo.innerHTML = "请输入6到12位的数字、字符串";
        pwdIcon.className = "no";
    }else{
        pwdInfo.innerHTML = "";
        pwdIcon.className = "ok";
    }
}

//注册

function register(){
    console.log('1');
    var user_val = user.value,
        pwd_val = pwd.value;
         console.log(user_val);
    //如果手机号有效且没有被占用户，同时密码合法，方可注册
    if(userReg.test(user_val) && pwdReg.test(pwd_val) && !isRepeat){
        $.ajax({
            url:'http://localhost/server/register.php',
            type:"post",
            data:{username:user_val,userpwd:pwd_val},
            success:function(){
                alert("注册成功，请登录！");
                showLogin();
                user.value = "";
                pwd.value = "";
            }
        })
    }
}

//显示登录界面

function showLogin(){
    titles[0].className = "current";
    titles[1].className = "";
    signUp.innerHTML = "登录";
    userInfo.innerHTML = "";
    userIcon.className = "";
}

//显示注册界面

function showRegister(){
    titles[0].className = "";
    titles[1].className = "current";
    signUp.innerHTML = "注册";
    userInfo.innerHTML = "";
    userIcon.className = "";
}



