const passwordElements = Array.from(document.querySelectorAll("input[type='password']"));

function checkPass(){
    if (passwordElements[0].value === passwordElements[1].value){
        passwordElements[0].classList.remove("invalid")
        passwordElements[1].classList.remove("invalid")
    }else{
        passwordElements[0].classList.add("invalid")
        passwordElements[1].classList.add("invalid")
    }    
}

passwordElements.forEach((e) => e.addEventListener("mouseleave", checkPass))