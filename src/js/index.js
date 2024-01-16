window.addEventListener("DOMContentLoaded", () => {
    const sliderBar = document.querySelector(".slider__bar")
    const sliderToggle = sliderBar.querySelector(".slider__toggle")
    const imageBefore = document.querySelector(".slider__image-wrapper--before")
    const imageAfter = document.querySelector(".slider__image-wrapper--after")
    const labelBefore = document.querySelector(".slider__label--before")
    const labelAfter = document.querySelector(".slider__label--after")
    let widthContainer
    let itemsCurtsLeft
    let right
    let shiftX
    /**
     
Перемещаем  toggle
// @param  {Number} newLeft новая координата по X 
@param  {Number} right ширина свободного пространства
*/
    function moveToggle(newLeft, right) {
        if (newLeft < 0) {
            newLeft = 0
        }
        if (newLeft > right) {
            newLeft = right
        }
        let newWidth = Math.round(newLeft / right * 100)
        imageBefore.style.width = `calc(${100 - newWidth}% + 40px)`
        imageAfter.style.width = 100 - newWidth + "%"
        if (newWidth == 0) {
            imageBefore.style.width = newWidth + "%"
            imageAfter.style.width = `calc(${100 - newWidth}% + 40px)`
        }
        sliderToggle.style.left = `${newWidth}%`
        console.log(imageAfter)
    }
    /**
создаем slider
*/
    function initSlider() {
        widthContainer = document.querySelector(".container").offsetWidth
        console.log(widthContainer)
    }
    initSlider()
    window.onresize = initSlider()
})