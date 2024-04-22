window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".slider__bar"),i=s.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),l=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),r=document.querySelector(".slider__label--after");let e,o,n,c;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,l.style.width=100-e+"%",0==e&&(a.style.width=e+"%",l.style.width=`calc(${100-e}% + 40px)`),i.style.left=e+"%",console.log(l)}function m(){function e(){i.style.marginRight="auto",i.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active")}l.style="",a.style="",i.style="",document.onmousedown=null,i.onclick=function(){6<parseInt(getComputedStyle(i).marginLeft)&&e()},r.onclick=function(){e()},t.onclick=function(){i.style.marginRight="",i.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),l.classList.add("slider__image-wrapper--active")}}function u(){n=s.offsetWidth-i.offsetWidth,r.onclick=function(e){a.style.width=0,l.style.width="100%",i.style.left="0%"},t.onclick=function(e){a.style.width="100%",l.style.width=0,i.style.left="100%"}}function p(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(i)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let t=s.getBoundingClientRect().left+window.scrollX;i.ontouchstart=function(e){var t=i.getBoundingClientRect();o=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,c=e.touches[0].pageX-o},i.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-c,n)},u()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),l.classList.remove("slider__image-wrapper--active"),767<e){let a=s.getBoundingClientRect().left+pageXOffset;i.onmousedown=function(e){var t=i.getBoundingClientRect();o=t.left+window.scrollX,n=s.offsetWidth-i.offsetWidth,c=e.pageX-o,document.onmousemove=function(e){return d(e.pageX-a-c,n),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},u()}else m()}p(),window.onresize=p});const validateEmail=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,t&&(768<e?t.src="../img/logo-footer.png":t.src="../img/htmlAcademyMobile.png")}function s(e){e.stopPropagation(),e.preventDefault(),(e.clipboardData||window.clipboardData).getData("Text")}a(),window.onresize=a;var i=window.location.pathname;let l=document.querySelector("html"),r=document.querySelector(".mobile-nav");var o=document.querySelector(".desktop-nav");r.innerHTML=templatesNavMobile,o.innerHTML=templatesNav;let n=document.querySelector(".hamburger"),c=(n.onclick=function(){r.classList.toggle("is-active"),n.classList.toggle("is-active"),n.classList.contains("is-active")?l.style.overflow="hidden":l.style.overflow=""},i.includes("index")?(o.querySelector(".index").classList.add("header-list__item--active"),r.querySelector(".index").classList.add("header-list__item--active")):i.includes("form")?(console.log(o.querySelector(".form")),o.querySelector(".form").classList.add("header-list__item--active"),r.querySelector(".form").classList.add("header-list__item--active")):i.includes("catalog")&&(o.querySelector(".catalog").classList.add("header-list__item--active"),r.querySelector(".catalog").classList.add("header-list__item--active")),(i.includes("catalog")||i.includes("form"))&&(o.querySelector(".index").classList.add("text-black"),o.querySelector(".form").classList.add("text-black"),o.querySelector(".catalog").classList.add("text-black")),document.querySelector(".catalog-list")),d=[{name:" Cat Energy PRO 500 г",image:"../img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/fish-small-desktop@1x.png",weight:"500 г",taste:"Рыба",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/fish-small-desktop@1x.png",weight:"1000 г",taste:"Рыба",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"500 г",taste:"Гречка",price:"400 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"1000 г",taste:"Гречка",price:"700 Р."},{name:" Cat Energy PRO 500 г",image:"../img/rice-small-desktop@1x.png",weight:"500 г",taste:"Рис",price:"500 Р."}];window.addEventListener("click",e=>{if(e.target.classList.contains("show-all"))for(const a of d){if(!c)break;var t=`<div class="catalog-list-card ${700<parseInt(a.weight)?"isbig":""}">
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
            </div>`;c.innerHTML+=t}});for(const v of d){if(!c)break;var m=`<div class="catalog-list-card ${700<parseInt(v.weight)?"isbig":""}">
        <div class="catalog-list-body">
            <img src="${v.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${v.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${v.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${v.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${v.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`;c.innerHTML+=m}i=document.querySelector(".weight-input"),o=document.querySelector(".age-input");i&&(i.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),i.addEventListener("paste",s)),o&&(o.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),o.addEventListener("paste",s));let u=document.querySelector(".email-input"),p=(u&&u.addEventListener("input",e=>{validateEmail(e.target.value)?u.classList.remove("input-error"):u.classList.add("input-error")}),document.querySelector(".tel-input")),g=(p&&p.addEventListener("input",e=>{e=e.target.value.length;console.log(e),e<18?p.classList.add("input-error"):p.classList.remove("input-error")}),document.querySelector(".comments-textarea"));g&&g.addEventListener("input",e=>{e=e.target.value.length;console.log(e),e<2?g.classList.add("input-error"):g.classList.remove("input-error")});i=document.querySelector(".send-message");i&&i.addEventListener("click",()=>{console.log(g.value),g.value.length<2?g.classList.add("input-error"):(g.classList.remove("input-error"),p.value.length<18?p.classList.add("input-error"):(p.classList.remove("input-error"),validateEmail(u.value)?u.classList.remove("input-error"):u.classList.add("input-error")))})});