window.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".slider__bar"),l=i.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),s=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),o=document.querySelector(".slider__label--after");let e,c,r,n;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,s.style.width=100-e+"%",0==e&&(a.style.width=e+"%",s.style.width=`calc(${100-e}% + 40px)`),l.style.left=e+"%",console.log(s)}function m(){function e(){l.style.marginRight="auto",l.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active")}s.style="",a.style="",l.style="",document.onmousedown=null,l.onclick=function(){6<parseInt(getComputedStyle(l).marginLeft)&&e()},o.onclick=function(){e()},t.onclick=function(){l.style.marginRight="",l.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),s.classList.add("slider__image-wrapper--active")}}function u(){r=i.offsetWidth-l.offsetWidth,o.onclick=function(e){a.style.width=0,s.style.width="100%",l.style.left="0%"},t.onclick=function(e){a.style.width="100%",s.style.width=0,l.style.left="100%"}}function g(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(l)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let t=i.getBoundingClientRect().left+window.scrollX;l.ontouchstart=function(e){var t=l.getBoundingClientRect();c=t.left+window.scrollX,r=i.offsetWidth-l.offsetWidth,n=e.touches[0].pageX-c},l.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-n,r)},u()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),s.classList.remove("slider__image-wrapper--active"),767<e){let a=i.getBoundingClientRect().left+pageXOffset;l.onmousedown=function(e){var t=l.getBoundingClientRect();c=t.left+window.scrollX,r=i.offsetWidth-l.offsetWidth,n=e.pageX-c,document.onmousemove=function(e){return d(e.pageX-a-n,r),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},u()}else m()}g(),window.onresize=g});const templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,console.log(window.location.href),t&&(768<e?t.src=window.location.href+"img/logo-footer.png":t.src=window.location.href+"img/htmlAcademyMobile.png")}a(),window.onresize=a;var i=window.location.pathname;let l=document.querySelector("html"),s=document.querySelector(".mobile-nav");var o=document.querySelector(".desktop-nav");s.innerHTML=templatesNavMobile,o.innerHTML=templatesNav;let c=document.querySelector(".hamburger");c.onclick=function(){s.classList.toggle("is-active"),c.classList.toggle("is-active"),c.classList.contains("is-active")?l.style.overflow="hidden":l.style.overflow=""},i.includes("index")?(o.querySelector(".index").classList.add("header-list__item--active"),s.querySelector(".index").classList.add("header-list__item--active")):i.includes("form")?(console.log(o.querySelector(".form")),o.querySelector(".form").classList.add("header-list__item--active"),s.querySelector(".form").classList.add("header-list__item--active")):i.includes("catalog")&&(o.querySelector(".catalog").classList.add("header-list__item--active"),s.querySelector(".catalog").classList.add("header-list__item--active"));var r=document.querySelector(".catalog-list");for(const d of[{name:" Cat Energy PRO 500 г",image:"/img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."}]){var n=`<div class="catalog-list-card">
        <div class="catalog-list-body">
            <img src="${d.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${d.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${d.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${d.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${d.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`;r.innerHTML+=n}});