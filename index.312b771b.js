!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequireabb0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},n.parcelRequireabb0=o);var c,a=o("bpxeT"),s=o("2TvXO"),i=o("eWrZJ"),l=document.querySelector(".loader"),u=document.querySelector(".error"),p=document.querySelector(".breed-select"),d=document.querySelector(".cat-info");function f(){l.style.display="none"}function h(){u.style.display="block"}function y(){return(y=e(a)(e(s).mark((function n(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.fetchBreeds)();case 3:e.sent.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,p.appendChild(n)})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching breeds:",e.t0),h();case 11:case"end":return e.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=e(a)(e(s).mark((function n(r){var t,o,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.fetchCatByBreed)(r);case 3:t=e.sent,o=t[0],c="\n    <h2>".concat(o[0].breeds[0].name,"</h2>\n    <p><strong>Description:</strong> ").concat(o[0].breeds[0].description,"</p>\n    <p><strong>Temperament:</strong> ").concat(o[0].breeds[0].temperament,'</p>\n    <img src="').concat(o[0].url,'" alt="').concat(o[0].breeds[0].name,'" />\n  '),d.innerHTML=c,d.style.display="block",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching cat info:",e.t0),h();case 14:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}p.addEventListener("change",(c=e(a)(e(s).mark((function n(r){var t;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.target.value,d.style.display="none",l.style.display="block",u.style.display="none",e.prev=4,e.next=7,v(t);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),console.error("Error fetching cat info:",e.t0),h();case 13:return e.prev=13,f(),e.finish(13);case 16:case"end":return e.stop()}}),n,null,[[4,9,13,16]])}))),function(e){return c.apply(this,arguments)})),function(){return y.apply(this,arguments)}().then(f())}();
//# sourceMappingURL=index.312b771b.js.map
