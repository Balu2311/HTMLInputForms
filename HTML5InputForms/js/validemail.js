const pwd = document.querySelector('#password');
const pwdError =  document.querySelector('#errorPassword');
pwd.addEventListener('input', () =>{
    let pwdPattern = new RegExp('^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$');
    if(!pwdPattern.test(pwd.value))
        pwdError.innerHTML = "Password is Incorrect format";
    else
        pwdError.innerHTML = "";
});