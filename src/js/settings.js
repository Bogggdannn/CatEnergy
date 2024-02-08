window.addEventListener("DOMContentLoaded",() => {
    let widthContainer = 0
    const footerLogo = document.querySelector(".footer-academy img")
    function getWidth(){
        widthContainer = document.querySelector("body").offsetWidth
        console.log(window.location.href)
        if(widthContainer > 768){
            footerLogo.src = window.location.href + "img/logo-footer.png"
        }
        else{
            footerLogo.src = window.location.href + "img/htmlAcademyMobile.png"
        }
    }
    getWidth()
    window.onresize = getWidth
})