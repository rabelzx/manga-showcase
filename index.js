const buttons = document.querySelectorAll(".nav-button")

var sliderNav = function(manual){
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    })
    
    buttons[manual].classList.add("active")
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i)
    })
})