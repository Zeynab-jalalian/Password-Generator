const passwordInput = document.querySelector(".password-box input"), //display password
    copyIcon = document.querySelector(".password-box .copy-icon"), //copy
    rangeInput = document.querySelector(".range-box input"), //choose the length of password
    sliderNumber = document.querySelector(".range-box .slider-number"), //display the length of password
    button = document.querySelector(".generate-button"); //button for generate password


let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>/?"; 
const generatePassword = () => {
    let newPassword = "";
    for(let i=0;i<rangeInput.value;i++){
        let randomNumbers = Math.floor(Math.random() * chars.length);  
        newPassword+=chars[randomNumbers];
    }
    passwordInput.value=newPassword;
}

rangeInput.addEventListener("input", () => {
    sliderNumber.innerHTML = rangeInput.value;
    generatePassword();
})

button.addEventListener("click", generatePassword);

