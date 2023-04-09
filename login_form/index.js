let slider = document.querySelector(".slider");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let formSelection = document.querySelector(".form-selection");

signup.addEventListener("click", () =>{
    slider.classList.add("moveslider");
    formSelection.classList.add("form-selection-move");

});

login.addEventListener("click", () =>{
    slider.classList.remove("moveslider");
    formSelection.classList.remove("form-selection-move");
});

let l = document.getElementById("loginBtn");
l.addEventListener("click", () =>{
    alert(`Login Success`);
});

let s = document.getElementById("signupBtn");
s.addEventListener("click", () =>{
    alert(`Registered Successfully`);
});


