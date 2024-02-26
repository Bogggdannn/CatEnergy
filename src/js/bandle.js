window.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".slider__bar"),o=l.querySelector(".slider__toggle"),i=document.querySelector(".slider__image-wrapper--before"),s=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),a=document.querySelector(".slider__label--after");let e,r,c,n;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);i.style.width=`calc(${e}% + 40px)`,s.style.width=100-e+"%",0==e&&(i.style.width=e+"%",s.style.width=`calc(${100-e}% + 40px)`),o.style.left=e+"%",console.log(s)}function u(){function e(){o.style.marginRight="auto",o.style.marginLeft="",i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active")}s.style="",i.style="",o.style="",document.onmousedown=null,o.onclick=function(){6<parseInt(getComputedStyle(o).marginLeft)&&e()},a.onclick=function(){e()},t.onclick=function(){o.style.marginRight="",o.style.marginLeft="auto",i.classList.remove("slider__image-wrapper--active"),s.classList.add("slider__image-wrapper--active")}}function m(){c=l.offsetWidth-o.offsetWidth,a.onclick=function(e){i.style.width=0,s.style.width="100%",o.style.left="0%"},t.onclick=function(e){i.style.width="100%",s.style.width=0,o.style.left="100%"}}function f(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(o)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let t=l.getBoundingClientRect().left+window.scrollX;o.ontouchstart=function(e){var t=o.getBoundingClientRect();r=t.left+window.scrollX,c=l.offsetWidth-o.offsetWidth,n=e.touches[0].pageX-r},o.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-n,c)},m()}else u();else u();else if(i.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let i=l.getBoundingClientRect().left+pageXOffset;o.onmousedown=function(e){var t=o.getBoundingClientRect();r=t.left+window.scrollX,c=l.offsetWidth-o.offsetWidth,n=e.pageX-r,document.onmousemove=function(e){return d(e.pageX-i-n,c),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},m()}else u()}f(),window.onresize=f});const templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function i(){e=document.querySelector("body").offsetWidth,console.log(window.location.href),t&&(768<e?t.src=window.location.href+"img/logo-footer.png":t.src=window.location.href+"img/htmlAcademyMobile.png")}i(),window.onresize=i;var l=window.location.pathname;let o=document.querySelector("html"),s=document.querySelector(".mobile-nav");var a=document.querySelector(".desktop-nav");s.innerHTML=templatesNavMobile,a.innerHTML=templatesNav;let r=document.querySelector(".hamburger");r.onclick=function(){s.classList.toggle("is-active"),r.classList.toggle("is-active"),r.classList.contains("is-active")?o.style.overflow="hidden":o.style.overflow=""},l.includes("index")?(a.querySelector(".index").classList.add("header-list__item--active"),s.querySelector(".index").classList.add("header-list__item--active")):l.includes("form")?(console.log(a.querySelector(".form")),a.querySelector(".form").classList.add("header-list__item--active"),s.querySelector(".form").classList.add("header-list__item--active")):l.includes("catalog")&&(a.querySelector(".catalog").classList.add("header-list__item--active"),s.querySelector(".catalog").classList.add("header-list__item--active"))});