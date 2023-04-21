const buttons = document.querySelectorAll(".nav-button")
const slides = document.querySelectorAll(".video-slide")
const content = document.querySelectorAll(".content")

var sliderNav = function(manual){
    buttons.forEach((btn) => {
        btn.classList.remove("active")
    
    })
    slides.forEach((slide) => {
        slide.classList.remove("active")
    
    })

    content.forEach((cnt) => {
        cnt.classList.remove("active")
    
    })
    
    content[manual].classList.add("active")
    buttons[manual].classList.add("active")
    slides[manual].classList.add("active")
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i)
    })
})