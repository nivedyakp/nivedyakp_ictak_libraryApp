let name = document.getElementById("name");
let errorname = document.getElementById("errorname");
let email = document.getElementById("email");
let erroremail = document.getElementById("erroremail");
let phonenumber = document.getElementById("phonenumber");
let errorphonenumber = document.getElementById("errorphonenumber");
let password = document.getElementById("password");
let errorpassword = document.getElementById("errorpassword");
let flag = 0;
function validate(){
    let mailreg = /^([A-Za-z0-9\._!#$%&*+/=?^{|}~-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let passreg = /^([A-Za-z0-9\._!#$%&*+@/=?^{|}~-]{7,14})$/
    let phonereg1 = /^([0-9]{10})$/
    let phonereg2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(name.value.trim() != ""){
        errorname.innerHTML = "";
        flag += 1;
    }
    else{
        errorname.innerHTML = "Enter valid name";
        errorname.style.color = "red";
        flag = 0;
    }
    if(mailreg.test(email.value)){
        erroremail.innerHTML = "";
        flag += 1;
    }
    else{
        erroremail.innerHTML = "Enter valid email";
        erroremail.style.color = "red";
        flag = 0;
    }
    if(passreg.test(password.value)){
        errorpassword.innerHTML = "";
        flag += 1;
    }
    else{
        errorpassword.innerHTML = "Enter valid password";
        errorpassword.style.color = "red";
        flag = 0;
    }
    if((phonereg1.test(phonenumber.value)) || (phonereg2.test(phonenumber.value))){
        errorphonenumber.innerHTML = "";
        flag += 1;
    }
    else{
        errorphonenumber.innerHTML = "Enter valid Phone Number";
        errorphonenumber.style.color = "red";
        flag = 0;
    }
    if(flag != 4){
        alert("Error");
        return false;
    }
    else{
        return true;
    }
}
