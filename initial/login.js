
  function codename(){
    let code = this.value;
    let reg = /^[0-9A-Za-z]{6,}$/;
    if(!reg.test(code1)){
        alert("密码长度要大于6位,请重新输入！");
        return false;  
    }
    }

    let email=localStorage.getItem("email");
    let password=localStorage.getItem("password");
    console.log("email:"+email);
    console.log("pwd:"+password);



    function jump1(){
        console.log(document.getElementById("name1").value);
        console.log(+document.getElementById("code").value);

        let Email = document.getElementById("name1");  
        let Password = document.getElementById("code");

        if(email==document.getElementById("name1").value && password==document.getElementById("code").value){
           alert("登录成功，点击确定进入我的个人博客页面！");
           window.location.href="./work.html";
        }
        else if(Email.value == "" || Password.value =="") {            
                alert("账号或密码不能为空！");            
                return false;            
            }   
        else{
           alert("账号或密码错误！");
           return false;  
       }
    }
    function jump2(){
       window.location.href="./register.html";
    }

    var u_name = document.querySelector('#username');
    var u_pass = document.querySelector('#password');
    var rem_username = document.querySelector('#rem_username');
    var rem_password = document.querySelector('#rem_password');
    if (localStorage.getItem('u_name')) {
        u_name.value = (localStorage.getItem('u_name'))
        rem_username.checked = true;
    }
    if (localStorage.getItem('u_pass')) {
        u_pass.value = (localStorage.getItem('u_pass'))
        rem_password.checked = true;
    }
    rem_username.addEventListener('change',function () {
        if (this.checked) {
            localStorage.setItem('u_name', u_name.value);
        } else {
            localStorage.removeItem('u_name');
        }
    })
    rem_password.addEventListener('change',function () {
        if (this.checked) {
            localStorage.setItem('u_pass', u_name.value);
        } else {
            localStorage.removeItem('u_pass');
        }
    })

    function showAlert() {
        alert("已为您向管理员发送重置密码请求，请您耐心等待。");
      }


    //   function jump1(){
    //     let url = 'http://localhost:8080';
    //     //发起get请求
    //     let _fetch = fetch(url).then(function (response) {
    //         //response.status表示响应的http状态码
    //         if (response.status === 200) {
    //             // json是返回的response提供的一个方法,
    //             // 会把返回的json字符串反序列化成对象,也被包装成一个Promise了
    //             return response.json();
    //         } else {
    //             return {};
    //         }
    //     });
        
    //     _fetch = _fetch
    //         .then(function (data) {
    //             //响应的内容
    //             console.log(data);
    //             // 响应数据格式化
    //             console.log(data.json());
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }
    // function jump1() {
    //       var login_usernameValue = document.getElementById("name1").value;
    //        var login_usercodeValue = document.getElementById("code").value;
    //       fetch(
    //         `http://127.0.0.1:8080/comments/${articleId}?username=` +
    //           encodeURIComponent(searchValue)
    //       )
    //         .then((response) => {
    //           if (!response.ok) {
    //             throw new Error("搜索失败，状态码：" + response.status);
    //           }
    //           return response.json();
    //         })
    //         .then((data) => {
    //           displayResults(data.data);
    //           console.log(data.data);
    //         })
    //         .catch((error) => {
    //           console.error("Error:", error);
    //         });
    //     }

    
//     function jump1(){
//         fetch('http://localhost:8080/api/data', {
//   method: 'GET', // 或者 'POST', 'PUT', 'DELETE' 等
// //   headers: {
// //     'Content-Type': 'application/json',
// //     // 如果需要认证可以添加如下header
// //     // 'Authorization': 'Bearer your_token'
// //   },
//   // 如果有请求体，比如POST请求，可以添加如下参数
//   // body: JSON.stringify({key1: value1, key2: value2})
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('Fetch error:', error);
// });
//     }


