window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".slider__bar"),l=s.querySelector(".slider__toggle"),a=document.querySelector(".slider__image-wrapper--before"),i=document.querySelector(".slider__image-wrapper--after"),t=document.querySelector(".slider__label--before"),o=document.querySelector(".slider__label--after");let e,r,n,c;function d(e,t){t<(e=e<0?0:e)&&(e=t);e=Math.round(e/t*100);a.style.width=`calc(${e}% + 40px)`,i.style.width=100-e+"%",0==e&&(a.style.width=e+"%",i.style.width=`calc(${100-e}% + 40px)`),l.style.left=e+"%",console.log(i)}function m(){function e(){l.style.marginRight="auto",l.style.marginLeft="",a.classList.add("slider__image-wrapper--active"),i.classList.remove("slider__image-wrapper--active")}i.style="",a.style="",l.style="",document.onmousedown=null,l.onclick=function(){6<parseInt(getComputedStyle(l).marginLeft)&&e()},o.onclick=function(){e()},t.onclick=function(){l.style.marginRight="",l.style.marginLeft="auto",a.classList.remove("slider__image-wrapper--active"),i.classList.add("slider__image-wrapper--active")}}function u(){n=s.offsetWidth-l.offsetWidth,o.onclick=function(e){a.style.width=0,i.style.width="100%",l.style.left="0%"},t.onclick=function(e){a.style.width="100%",i.style.width=0,l.style.left="100%"}}function p(){if(e=document.querySelector(".container").offsetWidth,console.log(getComputedStyle(l)),/Android|Iphone|webOS|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent))if(767<e)if(a.classList.add("slider__image-wrapper--active"),i.classList.remove("slider__image-wrapper--active"),767<e){let t=s.getBoundingClientRect().left+window.scrollX;l.ontouchstart=function(e){var t=l.getBoundingClientRect();r=t.left+window.scrollX,n=s.offsetWidth-l.offsetWidth,c=e.touches[0].pageX-r},l.ontouchmove=function(e){d(e.targetTouches[0].pageX-t-c,n)},u()}else m();else m();else if(a.classList.add("slider__image-wrapper--active"),i.classList.remove("slider__image-wrapper--active"),767<e){let a=s.getBoundingClientRect().left+pageXOffset;l.onmousedown=function(e){var t=l.getBoundingClientRect();r=t.left+window.scrollX,n=s.offsetWidth-l.offsetWidth,c=e.pageX-r,document.onmousemove=function(e){return d(e.pageX-a-c,n),!1},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}},u()}else m()}p(),window.onresize=p});const validateEmail=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),templatesNav=`            <img class="animate" src="./img/logo-desktop.png" alt="logo">
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
</ul>`;window.addEventListener("DOMContentLoaded",()=>{let e;const t=document.querySelector(".footer-academy img");function a(){e=document.querySelector("body").offsetWidth,t&&(768<e?t.src="../img/logo-footer.png":t.src="../img/htmlAcademyMobile.png")}function s(e){e.stopPropagation(),e.preventDefault(),(e.clipboardData||window.clipboardData).getData("Text")}a(),window.onresize=a;var l=window.location.pathname;let i=document.querySelector("html"),o=document.querySelector(".mobile-nav");var r=document.querySelector(".desktop-nav");o.innerHTML=templatesNavMobile,r.innerHTML=templatesNav;let n=document.querySelector(".hamburger"),c=(n.onclick=function(){o.classList.toggle("is-active"),n.classList.toggle("is-active"),n.classList.contains("is-active")?i.style.overflow="hidden":i.style.overflow=""},l.includes("index")?(r.querySelector(".index").classList.add("header-list__item--active"),o.querySelector(".index").classList.add("header-list__item--active")):l.includes("form")?(console.log(r.querySelector(".form")),r.querySelector(".form").classList.add("header-list__item--active"),o.querySelector(".form").classList.add("header-list__item--active")):l.includes("catalog")&&(r.querySelector(".catalog").classList.add("header-list__item--active"),o.querySelector(".catalog").classList.add("header-list__item--active")),(l.includes("catalog")||l.includes("form"))&&(r.querySelector(".index").classList.add("text-black"),r.querySelector(".form").classList.add("text-black"),r.querySelector(".catalog").classList.add("text-black")),document.querySelector(".catalog-list")),d=[{name:" Cat Energy PRO 500 г",image:"../img/chicken-small-desktop@1x.png",weight:"500 г",taste:"Курица",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/chicken-small-desktop@1x.png",weight:"1000 г",taste:"Курица",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/fish-small-desktop@1x.png",weight:"500 г",taste:"Рыба",price:"700 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/fish-small-desktop@1x.png",weight:"1000 г",taste:"Рыба",price:"1000 Р."},{name:" Cat Energy PRO 500 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"500 г",taste:"Гречка",price:"400 Р."},{name:" Cat Energy PRO 1000 г",image:"../img/buckwheat-small-desktop@1x.png",weight:"1000 г",taste:"Гречка",price:"700 Р."},{name:" Cat Energy PRO 500 г",image:"../img/rice-small-desktop@1x.png",weight:"500 г",taste:"Рис",price:"500 Р."}];window.addEventListener("click",e=>{if(e.target.classList.contains("show-all"))for(const a of d){if(!c)break;var t=`<div class="catalog-list-card ${700<parseInt(a.weight)?"isbig":""}">
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
            </div>`;c.innerHTML+=t}});for(const y of d){if(!c)break;var m=`<div class="catalog-list-card ${700<parseInt(y.weight)?"isbig":""}">
        <div class="catalog-list-body">
            <img src="${y.image}" alt="chicken small">
            <div class="catalog-list-params">
                <p class="catalog-list-name">
                    ${y.name}
                </p>
                <p class="catalog-list-weight">
                    <span class="params-name">Масса</span>
                    <span class="params-value">${y.weight}</span>
                </p>
                <p class="catalog-list-taste">
                    <span class="params-name">Вкус</span>
                    <span class="params-value">${y.taste}</span>
                </p>
                <p class="catalog-list-price">
                    <span class="params-name">Цена</span>
                    <span class="params-value">${y.price}</span>
                </p>
            </div>
        </div>
        <div class="catalog-list-actions">
            <button class="button-default">Заказать</button>
        </div>
    </div>`;c.innerHTML+=m}let u=document.querySelector(".weight-input"),p=document.querySelector(".age-input"),g=(u&&(u.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),u.addEventListener("paste",s)),p&&(p.addEventListener("keydown",e=>{["+","-","e"].includes(e.key)&&e.preventDefault()}),p.addEventListener("paste",s)),document.querySelector(".email-input")),v=(g&&g.addEventListener("input",e=>{validateEmail(e.target.value)?g.classList.remove("input-error"):g.classList.add("input-error")}),document.querySelector(".tel-input")),h=(v&&v.addEventListener("input",e=>{e=e.target.value.length;console.log(e),e<18?v.classList.add("input-error"):v.classList.remove("input-error")}),document.querySelector(".comments-textarea")),f=(h&&h.addEventListener("input",e=>{e=e.target.value.length;console.log(e),e<2?h.classList.add("input-error"):h.classList.remove("input-error")}),document.querySelector(".name-input"));l=document.querySelector(".send-message");l&&l.addEventListener("click",()=>{var e;console.log(h.value);for(e of Array.from(document.querySelectorAll(".radio-fields input")))console.log(e.checked),e.checked&&console.log(e.dataset.label);h.value.length<2?(h.classList.add("input-error"),h.scrollIntoView({block:"center",behavior:"smooth"})):(h.classList.remove("input-error"),v.value.length<18?(v.classList.add("input-error"),v.scrollIntoView({block:"center",behavior:"smooth"})):(v.classList.remove("input-error"),validateEmail(g.value)?(g.classList.remove("input-error"),2<f.value.length?(f.classList.remove("input-error"),1<=u.value.length?(u.classList.remove("input-error"),1<=p.value.length?(p.classList.remove("input-error"),f.value,u.value,p.value,g.value,v.value,h.value):(p.classList.add("input-error"),p.scrollIntoView({block:"center",behavior:"smooth"}))):(u.classList.add("input-error"),u.scrollIntoView({block:"center",behavior:"smooth"}))):(f.classList.add("input-error"),f.scrollIntoView({block:"center",behavior:"smooth"}))):(g.classList.add("input-error"),g.scrollIntoView({block:"center",behavior:"smooth"}))))})});