window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".slider__bar"),i=s.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),l=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),o=document.querySelector(".slider__label--after");let e,c,n,r;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,l.style.width=100-e+"%",0==e&&(a.style.width=e+"%",l.style.width=`calc(${100-e}% + 40px)`),i.style.left=e+"%",console.log(l)}function m(){function e(){i.style.marginRight="auto",i.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active")}l.style="",a.style="",i.style="",document.onmousedown=null,i.onclick=function(){6<parseInt(getComputedStyle(i).marginLeft)&&e()},o.onclick=function(){e()},t.onclick=function(){i.style.marginRight="",i.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),l.classList.add("slider__image-wrapper--active")}}function p(){n=s.offsetWidth-i.offsetWidth,o.onclick=function(e){a.style.width=0,l.style.width="100%",i.style.left="0%"},t.onclick=function(e){a.style.width="100%",l.style.width=0,i.style.left="100%"}}function g(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(i)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let t=s.getBoundingClientRect().left+window.scrollX;i.ontouchstart=function(e){var t=i.getBoundingClientRect();c=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,r=e.touches[0].pageX-c},i.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-r,n)},p()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let a=s.getBoundingClientRect().left+pageXOffset;i.onmousedown=function(e){var t=i.getBoundingClientRect();c=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,r=e.pageX-c,document.onmousemove=function(e){return d(e.pageX-a-r,n),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},p()}else m()}g(),window.onresize=g});const validateEmail=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,t&&(768<e?t.src="../img/logo-footer.png":t.src="../img/htmlAcademyMobile.png")}function s(e){e.stopPropagation(),e.preventDefault(),(e.clipboardData||window.clipboardData).getData("Text")}a(),window.onresize=a;var i=window.location.pathname;let l=document.querySelector("html"),o=document.querySelector(".mobile-nav");var c=document.querySelector(".desktop-nav");o.innerHTML=templatesNavMobile,c.innerHTML=templatesNav;let n=document.querySelector(".hamburger"),r=(n.onclick=function(){o.classList.toggle("is-active"),n.classList.toggle("is-active"),n.classList.contains("is-active")?l.style.overflow="hidden":l.style.overflow=""},i.includes("index")?(c.querySelector(".index").classList.add("header-list__item--active"),o.querySelector(".index").classList.add("header-list__item--active")):i.includes("form")?(console.log(c.querySelector(".form")),c.querySelector(".form").classList.add("header-list__item--active"),o.querySelector(".form").classList.add("header-list__item--active")):i.includes("catalog")&&(c.querySelector(".catalog").classList.add("header-list__item--active"),o.querySelector(".catalog").classList.add("header-list__item--active")),(i.includes("catalog")||i.includes("form"))&&(c.querySelector(".index").classList.add("text-black"),c.querySelector(".form").classList.add("text-black"),c.querySelector(".catalog").classList.add("text-black")),document.querySelector(".catalog-list")),d=[{name:" Cat Energy PRO 500 г",image:"../img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/fish-small-desktop@1x.png",weight:"500 г",taste:"Рыба",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/fish-small-desktop@1x.png",weight:"1000 г",taste:"Рыба",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"500 г",taste:"Гречка",price:"400 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"1000 г",taste:"Гречка",price:"700 Р."},{name:" Cat Energy PRO 500 г",image:"../img/rice-small-desktop@1x.png",weight:"500 г",taste:"Рис",price:"500 Р."}];window.addEventListener("click",e=>{if(e.target.classList.contains("show-all"))for(const a of d){if(!r)break;var t=`<div class="catalog-list-card ${700<parseInt(a.weight)?"isbig":""}">
                <div class="catalog-list-body">
                    <img src="${a.image}" alt="chicken small">
                    <div class="catalog-list-params">
                        <p class="catalog-list-name">
                            ${a.name}
                        </p>
                        <p class="catalog-list-weight">
                            <span class="params-name">Масса</span>
                            <span class="params-value">${a.weight}</span>
                        </p>
                        <p class="catalog-list-taste">
                            <span class="params-name">Вкус</span>
                            <span class="params-value">${a.taste}</span>
                        </p>
                        <p class="catalog-list-price">
                            <span class="params-name">Цена</span>
                            <span class="params-value">${a.price}</span>
                        </p>
                    </div>
                </div>
                <div class="catalog-list-actions">
                    <button class="button-default">Заказать</button>
                </div>
            </div>`;r.innerHTML+=t}});for(const p of d){if(!r)break;var m=`<div class="catalog-list-card ${700<parseInt(p.weight)?"isbig":""}">
        <div class="catalog-list-body">
            <img src="${p.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${p.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${p.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${p.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${p.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`;r.innerHTML+=m}i=document.querySelector(".weight-input"),c=document.querySelector(".age-input"),i&&(i.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),i.addEventListener("paste",s)),c&&(c.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),c.addEventListener("paste",s)),i=document.querySelector(".email-input");i&&i.addEventListener("input",e=>{e=validateEmail(e.target.value);console.log(e,!!e)})});