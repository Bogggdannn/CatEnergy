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

    let pathName = window.location.pathname
    let html = document.querySelector("html")
    let mobileNav = document.querySelector(".mobile-nav")
    let hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function(){
        mobileNav.classList.toggle("is-active")
        hamburger.classList.toggle("is-active")
        if(hamburger.classList.contains("is-active")){
            html.style.overflow = "hidden"
        }
        else{
            html.style.overflow = ""
        }
        
    }
    console.log(window.location)
})