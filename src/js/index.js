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
        imageBefore.style.width = `calc(${newWidth}% + 40px)`
        imageAfter.style.width = 100 - newWidth + "%"
        if (newWidth == 0) {
            imageBefore.style.width = newWidth + "%"
            imageAfter.style.width = `calc(${100 - newWidth}% + 40px)`
        }
        sliderToggle.style.left = `${newWidth}%`
        console.log(imageAfter)
    }

    function sliderDesktop(){
        imageBefore.classList.add("slider__image-wrapper--active")
        imageAfter.classList.remove("slider__image-wrapper--active")
        if (widthContainer > 767){
            let sliderClient = sliderBar.getBoundingClientRect()
            let sliderLeft = sliderClient.left + pageXOffset
            sliderToggle.onmousedown = function(event){
                let itemClient = sliderToggle.getBoundingClientRect()
            }

    }

    /**
создаем slider
*/
    function initSlider() {
        widthContainer = document.querySelector(".container").offsetWidth
        if (/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent) && 1<0){
            if (widthContainer > 767){
                // вызывается функция для планшетов
            }
            else {
                // вызывается функция для мобилок
            } 
        }
        else {
            sliderDesktop()
        } 
    }

    initSlider()
    window.onresize = initSlider
})