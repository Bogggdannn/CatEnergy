window.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".slider__bar"),s=i.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),l=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),o=document.querySelector(".slider__label--after");let e,r,c,n;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,l.style.width=100-e+"%",0==e&&(a.style.width=e+"%",l.style.width=`calc(${100-e}% + 40px)`),s.style.left=e+"%",console.log(l)}function m(){function e(){s.style.marginRight="auto",s.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active")}l.style="",a.style="",s.style="",document.onmousedown=null,s.onclick=function(){6<parseInt(getComputedStyle(s).marginLeft)&&e()},o.onclick=function(){e()},t.onclick=function(){s.style.marginRight="",s.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),l.classList.add("slider__image-wrapper--active")}}function g(){c=i.offsetWidth-s.offsetWidth,o.onclick=function(e){a.style.width=0,l.style.width="100%",s.style.left="0%"},t.onclick=function(e){a.style.width="100%",l.style.width=0,s.style.left="100%"}}function u(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(s)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let t=i.getBoundingClientRect().left+window.scrollX;s.ontouchstart=function(e){var t=s.getBoundingClientRect();r=t.left+window.scrollX,c=i.offsetWidth-s.offsetWidth,n=e.touches[0].pageX-r},s.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-n,c)},g()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let a=i.getBoundingClientRect().left+pageXOffset;s.onmousedown=function(e){var t=s.getBoundingClientRect();r=t.left+window.scrollX,c=i.offsetWidth-s.offsetWidth,n=e.pageX-r,document.onmousemove=function(e){return d(e.pageX-a-n,c),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},g()}else m()}u(),window.onresize=u});const templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,console.log(window.location.href),t&&(768<e?t.src=window.location.href+"img/logo-footer.png":t.src=window.location.href+"img/htmlAcademyMobile.png")}a(),window.onresize=a;var i=window.location.pathname;let s=document.querySelector("html"),l=document.querySelector(".mobile-nav");var o=document.querySelector(".desktop-nav");l.innerHTML=templatesNavMobile,o.innerHTML=templatesNav;let r=document.querySelector(".hamburger");r.onclick=function(){l.classList.toggle("is-active"),r.classList.toggle("is-active"),r.classList.contains("is-active")?s.style.overflow="hidden":s.style.overflow=""},i.includes("index")?(o.querySelector(".index").classList.add("header-list__item--active"),l.querySelector(".index").classList.add("header-list__item--active")):i.includes("form")?(console.log(o.querySelector(".form")),o.querySelector(".form").classList.add("header-list__item--active"),l.querySelector(".form").classList.add("header-list__item--active")):i.includes("catalog")&&(o.querySelector(".catalog").classList.add("header-list__item--active"),l.querySelector(".catalog").classList.add("header-list__item--active"));var c=document.querySelector(".catalog-list");for(const d of[{name:" Cat Energy PRO 500 г",image:"/img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"/img/fish-small-desktop@1x.png",weight:"500 г",taste:"Рыба",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/fish-small-desktop@1x.png",weight:"1000 г",taste:"Рыба",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"/img/buckwheat-small-desktop@1x.png",weight:"500 г",taste:"Гречка",price:"400 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/buckwheat-small-desktop@1x.png",weight:"1000 г",taste:"Гречка",price:"700 Р."},{name:" Cat Energy PRO 500 г",image:"/img/rice-small-desktop@1x.png",weight:"500 г",taste:"Рис",price:"500 Р."}]){var n=`<div class="catalog-list-card ${700<parseInt(d.weight)?"isbig":""}">
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
    </div>`;c.innerHTML+=n}});