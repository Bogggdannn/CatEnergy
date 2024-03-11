window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".slider__bar"),i=s.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),l=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),o=document.querySelector(".slider__label--after");let e,c,n,r;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,l.style.width=100-e+"%",0==e&&(a.style.width=e+"%",l.style.width=`calc(${100-e}% + 40px)`),i.style.left=e+"%",console.log(l)}function m(){function e(){i.style.marginRight="auto",i.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active")}l.style="",a.style="",i.style="",document.onmousedown=null,i.onclick=function(){6<parseInt(getComputedStyle(i).marginLeft)&&e()},o.onclick=function(){e()},t.onclick=function(){i.style.marginRight="",i.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),l.classList.add("slider__image-wrapper--active")}}function g(){n=s.offsetWidth-i.offsetWidth,o.onclick=function(e){a.style.width=0,l.style.width="100%",i.style.left="0%"},t.onclick=function(e){a.style.width="100%",l.style.width=0,i.style.left="100%"}}function p(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(i)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let t=s.getBoundingClientRect().left+window.scrollX;i.ontouchstart=function(e){var t=i.getBoundingClientRect();c=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,r=e.touches[0].pageX-c},i.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-r,n)},g()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let a=s.getBoundingClientRect().left+pageXOffset;i.onmousedown=function(e){var t=i.getBoundingClientRect();c=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,r=e.pageX-c,document.onmousemove=function(e){return d(e.pageX-a-r,n),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},g()}else m()}p(),window.onresize=p});const templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,console.log(window.location.href),t&&(768<e?t.src=window.location.href+"img/logo-footer.png":t.src=window.location.href+"img/htmlAcademyMobile.png")}a(),window.onresize=a;var s=document.querySelector(".show-all"),i=window.location.pathname;let l=document.querySelector("html"),o=document.querySelector(".mobile-nav");var c=document.querySelector(".desktop-nav");o.innerHTML=templatesNavMobile,c.innerHTML=templatesNav;let n=document.querySelector(".hamburger"),r=(n.onclick=function(){o.classList.toggle("is-active"),n.classList.toggle("is-active"),n.classList.contains("is-active")?l.style.overflow="hidden":l.style.overflow=""},i.includes("index")?(c.querySelector(".index").classList.add("header-list__item--active"),o.querySelector(".index").classList.add("header-list__item--active")):i.includes("form")?(console.log(c.querySelector(".form")),c.querySelector(".form").classList.add("header-list__item--active"),o.querySelector(".form").classList.add("header-list__item--active")):i.includes("catalog")&&(c.querySelector(".catalog").classList.add("header-list__item--active"),o.querySelector(".catalog").classList.add("header-list__item--active")),(i.includes("catalog")||i.includes("form"))&&(c.querySelector(".index").classList.add("text-black"),c.querySelector(".form").classList.add("text-black"),c.querySelector(".catalog").classList.add("text-black")),document.querySelector(".catalog-list")),d=[{name:" Cat Energy PRO 500 г",image:"/img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"/img/fish-small-desktop@1x.png",weight:"500 г",taste:"Рыба",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/fish-small-desktop@1x.png",weight:"1000 г",taste:"Рыба",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"/img/buckwheat-small-desktop@1x.png",weight:"500 г",taste:"Гречка",price:"400 Р."},{name:" Cat Energy PRO 1000 г",image:"/img/buckwheat-small-desktop@1x.png",weight:"1000 г",taste:"Гречка",price:"700 Р."},{name:" Cat Energy PRO 500 г",image:"/img/rice-small-desktop@1x.png",weight:"500 г",taste:"Рис",price:"500 Р."}];console.log(s),s&&s.addEventListener("click",()=>{for(const t of d){if(!r)break;var e=`<div class="catalog-list-card ${700<parseInt(t.weight)?"isbig":""}">
                <div class="catalog-list-body">
                    <img src="${t.image}" alt="chicken small">
                    <div class="catalog-list-params">
                        <p class="catalog-list-name">
                            ${t.name}
                        </p>
                        <p class="catalog-list-weight">
                            <span class="params-name">Масса</span>
                            <span class="params-value">${t.weight}</span>
                        </p>
                        <p class="catalog-list-taste">
                            <span class="params-name">Вкус</span>
                            <span class="params-value">${t.taste}</span>
                        </p>
                        <p class="catalog-list-price">
                            <span class="params-name">Цена</span>
                            <span class="params-value">${t.price}</span>
                        </p>
                    </div>
                </div>
                <div class="catalog-list-actions">
                    <button class="button-default">Заказать</button>
                </div>
            </div>`;r.innerHTML+=e}});for(const g of d){if(!r)break;var m=`<div class="catalog-list-card ${700<parseInt(g.weight)?"isbig":""}">
        <div class="catalog-list-body">
            <img src="${g.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${g.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${g.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${g.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${g.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`;r.innerHTML+=m}});