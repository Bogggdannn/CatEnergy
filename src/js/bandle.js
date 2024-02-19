window.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".slider__bar"),l=o.querySelector(".slider__toggle"),i=document.querySelector(".slider__image-wrapper--before"),s=document.querySelector(".slider__image-wrapper--after"),a=document.querySelector(".slider__label--before"),r=document.querySelector(".slider__label--after");let e,c,n,d;function u(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);i.style.width=`calc(${e}% + 40px)`,s.style.width=100-e+"%",0==e&&(i.style.width=e+"%",s.style.width=`calc(${100-e}% + 40px)`),l.style.left=e+"%",console.log(s)}function t(){s.style="",i.style="",l.style="",document.onmousedown=null,l.onclick=function(){function e(){l.style.marginRight="auto",l.style.marginLeft="",i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active")}function t(){l.style.marginRight="",l.style.marginLeft="auto",i.classList.remove("slider__image-wrapper--active"),s.classList.add("slider__image-wrapper--active")}(6<parseInt(getComputedStyle(l).marginLeft)?e:t)(),a.onclick=function(){e()},r.onclick=function(){t()}}}function m(){n=o.offsetWidth-l.offsetWidth,r.onclick=function(e){i.style.width=0,s.style.width="100%",l.style.left="0%"},a.onclick=function(e){i.style.width="100%",s.style.width=0,l.style.left="100%"}}function f(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(l)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let t=o.getBoundingClientRect().left+window.scrollX;l.ontouchstart=function(e){var t=l.getBoundingClientRect();c=t.left+window.scrollX,n=o.offsetWidth-l.offsetWidth,d=e.touches[0].pageX-c},l.ontouchmove=function(e){u(e.targetTouches[0].pageX-t-d,n)},m()}else t();else t();else if(i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let i=o.getBoundingClientRect().left+pageXOffset;l.onmousedown=function(e){var t=l.getBoundingClientRect();c=t.left+window.scrollX,n=o.offsetWidth-l.offsetWidth,d=e.pageX-c,document.onmousemove=function(e){return u(e.pageX-i-d,n),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},m()}else t()}f(),window.onresize=f});const templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
  </div>`,templatesNavMobile=`<ul class="header-list__mobile">
<li class="header-list__item index cursor-pointer">
    <a href="./index.html">Главная</a>
</li>
<li class="header-list__item catalog cursor-pointer">
    <a href="./catalog.html">Каталог продукции</a>
</li>
<li class="header-list__item form cursor-pointer">
    <a href="./form.html">Подбор программы</a>
</li>
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function i(){e=document.querySelector("body").offsetWidth,console.log(window.location.href),t&&(768<e?t.src=window.location.href+"img/logo-footer.png":t.src=window.location.href+"img/htmlAcademyMobile.png")}i(),window.onresize=i;var o=window.location.pathname;let l=document.querySelector("html"),s=document.querySelector(".mobile-nav");var a=document.querySelector(".desktop-nav");s.innerHTML=templatesNavMobile,a.innerHTML=templatesNav;let r=document.querySelector(".hamburger");r.onclick=function(){s.classList.toggle("is-active"),r.classList.toggle("is-active"),r.classList.contains("is-active")?l.style.overflow="hidden":l.style.overflow=""},o.includes("index")?(a.querySelector(".index").classList.add("header-list__item--active"),s.querySelector(".index").classList.add("header-list__item--active")):o.includes("form")?(console.log(a.querySelector(".form")),a.querySelector(".form").classList.add("header-list__item--active"),s.querySelector(".form").classList.add("header-list__item--active")):o.includes("catalog")&&(a.querySelector(".catalog").classList.add("header-list__item--active"),s.querySelector(".catalog").classList.add("header-list__item--active"))});