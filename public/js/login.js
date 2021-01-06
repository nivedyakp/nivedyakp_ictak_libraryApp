let email = document.getElementById("email");
let erroremail = document.getElementById("erroremail");
let password = document.getElementById("password");
let errorpassword = document.getElementById("errorpassword");
let flag = 0;
function validate(){
    let mailreg = /^([A-Za-z0-9\._!#$%&*+/=?^{|}~-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let passreg = /^([A-Za-z0-9\._!#$%&*+@/=?^{|}~-]{7,14})$/
    if(mailreg.test(email.value)){
        erroremail.innerText = "";
        flag += 1;
    }
    else{
        erroremail.innerHTML = "Enter a valid email";
        erroremail.style.color = "red";
        flag = 0;
    }
    if(passreg.test(password.value)){
        errorpassword.innerText = "";
        flag += 1;
    }
    else{
        errorpassword.innerHTML = "Enter valid password";
        errorpassword.style.color = "red";
        flag = 0;
    }
    if(flag == 2){
        return true;
    }
    else{
        alert("Error");
        return false;
    }
}