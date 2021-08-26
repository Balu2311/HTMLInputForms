const nameText = document.querySelector('#name');
const nameError = document.querySelector('#errorName');
nameText.addEventListener('input', () =>{
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(!namePattern.test(nameText.value))
        nameError.innerHTML = "Name is Incorrect";
    else
    nameError.innerHTML = "";
});