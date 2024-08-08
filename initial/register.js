R_emai.onchange = function(){
    var R_email = this.value;
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(!reg.test(R_email)){
        alert("邮箱格式不正确，请重新输入！");
        return false;
    }
}

R_email.onchange = function(){
    var R_email = this.value;
    var reg = /^\S{1,5}$/;;
    }

R_user.onchange = function(){
let  R_user= this.value;
let reg = /^\S{1,5}$/;
if(!reg.test( R_user)){
    alert("用户名长度不能超过5位！");
    return false;
}
}

R_pwd.onchange = function(){
let R_pwd = this.value;
let reg =/^[0-9A-Za-z]{6,}$/;
if(!reg.test(R_pwd)){
    alert("密码长度要大于6位,请重新输入！");
    return false;
}
}

function checkpassword() {
let password = document.getElementById("R_pwd").value;
let repassword = document.getElementById("R_repwd").value;
if(password == repassword) {
     document.getElementById("tishi").innerHTML="<font color='green'>两次密码输入一致</font>";
}else {
     document.getElementById("tishi").innerHTML="<font color='red'>两次输入密码不一致!</font>";
} 
}

function jump(){
    localStorage.setItem("username",document.getElementById("R_user").value);
    localStorage.setItem("password",document.getElementById("R_pwd").value);
    localStorage.setItem("email",document.getElementById("R_email").value);

    let Email = document.getElementById("R_email");  
    let User = document.getElementById("R_user");  
   let Toux = document.getElementById("toux");
   let Password = document.getElementById("R_pwd");
    let Repassword = document.getElementById("R_repwd");

    if(Email.value == "" || User.value ==""|| Toux.value ==""|| Password.value =="") {            
        alert("账号、用户名、头像或密码不能为空！");            
        return false;            
    }  
    else if(Password.value == Repassword.value) {
        alert("注册成功，欢迎进入登录界面！");
        window.location.href="./front.html";
    }
    else{
       alert("注册信息有误！");
    }
}

function jump3(){
     window.location.href="./front.html";
}
