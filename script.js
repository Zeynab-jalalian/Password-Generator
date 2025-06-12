const passwordInput = document.querySelector(".password-box input"),
    copyIcon = document.querySelector(".password-box .copy-icon"),
    rangeInput = document.querySelector(".range-box input"),
    sliderNumber = document.querySelector(".range-box .slider-number"),
    button = document.querySelector(".generate-button");

rangeInput.addEventListener("input",()=>{
    sliderNumber.innerHTML=rangeInput.value;
})