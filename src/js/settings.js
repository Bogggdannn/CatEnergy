const templatesNav = `            <img class="animate" src="./img/logo-desktop.png" alt="logo">
<ul class="header-list">
    <li class="header-list__item index cursor-pointer">
        <a href="./index.html">Главная</a>
    </li>
    <li class="header-list__item catalog cursor-pointer">
        <a href="./catalog.html">Каталог продукции</a>
    </li>
    <li class="header-list__item form cursor-pointer">
        <a href="./form.html">Подбор программы</a>
    </li>
</ul>
<div class="hamburger hamburger--collapse">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>`
const templatesNavMobile = `<ul class="header-list__mobile">
<li class="header-list__item index cursor-pointer">
    <a href="./index.html">Главная</a>
</li>
<li class="header-list__item catalog cursor-pointer">
    <a href="./catalog.html">Каталог продукции</a>
</li>
<li class="header-list__item form cursor-pointer">
    <a href="./form.html">Подбор программы</a>
</li>
</ul>`
window.addEventListener("DOMContentLoaded", () => {
    let widthContainer = 0
    const footerLogo = document.querySelector(".footer-academy img")
    function getWidth() {
        widthContainer = document.querySelector("body").offsetWidth
        console.log(window.location.href)
        if (footerLogo) {
            if (widthContainer > 768) {
                footerLogo.src = window.location.href + "img/logo-footer.png"
            }
            else {
                footerLogo.src = window.location.href + "img/htmlAcademyMobile.png"
            }
        }
    }
    getWidth()
    window.onresize = getWidth

    let pathName = window.location.pathname
    let html = document.querySelector("html")
    let mobileNav = document.querySelector(".mobile-nav")
    let desktopNav = document.querySelector(".desktop-nav")
    mobileNav.innerHTML = templatesNavMobile
    desktopNav.innerHTML = templatesNav
    let hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function () {
        mobileNav.classList.toggle("is-active")
        hamburger.classList.toggle("is-active")
        if (hamburger.classList.contains("is-active")) {
            html.style.overflow = "hidden"
        }
        else {
            html.style.overflow = ""
        }
    }
    if(pathName.includes("index")){
        desktopNav.querySelector(".index").classList.add("header-list__item--active")
        mobileNav.querySelector(".index").classList.add("header-list__item--active")
    }
    else if(pathName.includes("form")){
        console.log(desktopNav.querySelector(".form"))
        desktopNav.querySelector(".form").classList.add("header-list__item--active")
        mobileNav.querySelector(".form").classList.add("header-list__item--active")
    }
    else if(pathName.includes("catalog")) {
        desktopNav.querySelector(".catalog").classList.add("header-list__item--active")
        mobileNav.querySelector(".catalog").classList.add("header-list__item--active")
    }
})