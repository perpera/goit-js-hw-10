var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},d={},n={},i=e.parcelRequireabb0;null==i&&((i=function(e){if(e in d)return d[e].exports;if(e in n){var i=n[e];delete n[e];var s={id:e,exports:{}};return d[e]=s,i.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,d){n[e]=d},e.parcelRequireabb0=i);var s=i("gUcIm");const t=document.querySelector(".breed-select"),r=document.querySelector(".loader"),a=document.querySelector(".error"),o=document.querySelector(".cat-info");window.addEventListener("load",(async function(){let e;a.classList.add("is-hidden");try{e=await(0,s.fetchBreeds)(),e.forEach((e=>{const d=document.createElement("option");d.value=e.id,d.textContent=e.name,t.appendChild(d)})),t.classList.remove("is-hidden"),r.classList.add("is-hidden")}catch(e){console.error(e),a.classList.remove("is-hidden"),t.classList.add("is-hidden"),r.classList.add("is-hidden")}t.addEventListener("change",(async()=>{const d=t.value;r.classList.remove("is-hidden"),o.classList.add("is-hidden"),a.classList.add("is-hidden");try{const n=(await(0,s.fetchCatByBreed)(d))[0],i=e.find((e=>e.id===n.breeds[0].id)),t=function(e,d){return`\n    <img src='${e.url}' width='400' alt='${d.name}'/>\n    <div class='textInfo'>\n      <h1>${d.name}</h1>\n      <p>${d.description}</p>\n      <p><b>Temperament:</b> ${d.temperament}</p>\n    </div>\n  `}(n,i);o.innerHTML=t,r.classList.add("is-hidden"),o.classList.remove("is-hidden")}catch(e){console.error(e),a.classList.remove("is-hidden"),r.classList.add("is-hidden")}}))}));
//# sourceMappingURL=index.bf202ae6.js.map