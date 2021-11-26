let uname=document.getElementById("uname");
let pwd=document.getElementById("pwd");
let loginform=document.getElementById("loginform");
let err1=document.getElementById("err1");
let err2=document.getElementById("err2");
function validate(){
    let uname=document.getElementById("uname");
    let pwd=document.getElementById("pwd");
    // let err1=document.getElementById("err1");
    let err2=document.getElementById("err2");    
    if(uname.value=="admin" && pwd.value=="12345"){
        err2.innerHTML="Success!!";
        err2.style.color="green";
        login();
        // err1.innerHTML="Success!!";
       return true;
    }
    else{
       
        // err1.innerHTML="Invalid Username";
        // err1.style.color="red";
        err2.innerHTML="Invalid Username or Password";
        err2.style.color="red";
        return false;
        
    }
}
function login(){
    document.getElementById("loginform").setAttribute("action","./list.html");
}
