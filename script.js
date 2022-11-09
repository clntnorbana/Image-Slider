const buttons = document.querySelectorAll(".btn")

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const offset = btn.classList.contains("btn-next") ? 1 : -1
        const slides = btn.closest(".slider").querySelector(".slides")

        const activeSlides = slides.querySelector(".active")
        let newIndex = [...slides.children].indexOf(activeSlides) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].classList.add("active")
        activeSlides.classList.remove("active")
    })
})

