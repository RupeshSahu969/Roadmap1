(()=>{"use strict";var e,n,r,t,o,a,i,c,s,u,l,p,d,f,v={535:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(933),o=r.n(t),a=r(476),i=r.n(a)()(o());i.push([e.id,"#navbar{\r\n    display:  flex;\r\n\r\n    border:  1px solid black;\r\n    justify-content: space-evenly;\r\n    background-color: rgb(153, 215, 91);\r\n    \r\n}\r\nh3{\r\n    color: black;\r\n}\r\n\r\n#options{\r\n    display: flex;\r\n    gap: 15px\r\n    ;\r\n}",""]);const c=i},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var v=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},311:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function m(e){var n=h[e];if(void 0!==n)return n.exports;var r=h[e]={id:e,exports:{}};return v[e](r,r.exports,m),r.exports}m.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return m.d(n,{a:n}),n},m.d=(e,n)=>{for(var r in n)m.o(n,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},m.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=m(892),n=m.n(e),r=m(760),t=m.n(r),o=m(311),a=m.n(o),i=m(192),c=m.n(i),s=m(60),u=m.n(s),l=m(865),p=m.n(l),d=m(535),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,document.getElementById("navbar").innerHTML='\n    <h3>\n    <a href="#">Home</a>\n    \n</h3>\n<h3>\n    <a href="#">About Us</a>\n    \n</h3>\n<h3>\n    <a href="#">Login</a>\n    \n</h3>\n<h3>\n    <a href="#">Signup</a>\n    \n</h3>\n</div>\n    '})();