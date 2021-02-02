(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{28:function(e,t,n){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var i="http://www.w3.org/2000/svg";t.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,t,n){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1);else for(var i=0;i<e.length;i++)this.bind(e[i],t,n)},unbind:function(e,t,n){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1);else for(var i=0;i<e.length;i++)this.unbind(e[i],t,n)},find:function(e,t,n){if(!this.isNode(e))return[];for(var i=e.getElementsByTagName(n||"*"),r=[],o=0;o<i.length;o++)this.isNode(i[o])&&("function"!=typeof t||t(i[o]))&&r.push(i[o]);return r},children:function(e,t){for(var n=e.childNodes,i=[],r=0;r<n.length;r++)this.isNode(n[r])&&("function"!=typeof t||t(n[r]))&&i.push(n[r]);return i},hasClass:function(e,t,n){t.constructor!==Array&&(t=[t]);for(var i=" "+(e.getAttribute("class")||"")+" ",r=0;r<t.length;r++)if(i.indexOf(" "+t[r]+" ")>=0){if(n)return!0}else if(!n)return!1;return!0},removeClass:function(e,t){var n=(" "+(e.getAttribute("class")||"")+" ").replace(" "+t.trim()+" "," ");e.setAttribute("class",n.trim())},addClass:function(e,t){if(!this.hasClass(e,t)){var n=e.getAttribute("class")||"";e.setAttribute("class",n+" "+t)}},toNode:function(e,t){var n;(n=t?document.createElementNS(i,"svg"):document.createElement("div")).innerHTML=e;for(var r=n.childNodes,o=0;o<r.length;o++)if(this.isNode(r[o]))return r[o]},trigger:function(e,t){if(document.createEventObject)e.fireEvent("on"+t,document.createEventObject());else{var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!1),e.dispatchEvent(n)}},getStyle:function(e,t){var n=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof t?n.getPropertyValue(t):n},offsetPosition:function(e){var t=0,n=0;for(n=e.offsetTop,t=e.offsetLeft,e=e.offsetParent;e;)n+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{left:t,top:n}},mousePosition:function(e,t){var n=e.getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-n.left,y:t.clientY-n.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,t){for(var n in t)e.style[n]=t[n]},size:function(e,t){var n,i;return"content"==t?(i=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),n=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==t?(i=e.clientWidth,n=e.clientHeight):"border"==t?(i=e.offsetWidth,n=e.offsetHeight):"scroll"==t?(i=e.scrollWidth,n=e.scrollHeight):(i=e.offsetWidth,n=e.offsetHeight),{width:i,height:n}},append:function(e,t){var n=this.isNode(t)?t:this.toNode(t);return e.appendChild(n),n},prepend:function(e,t){var n=this.isNode(t)?t:this.toNode(t);return e.insertBefore(n,e.childNodes[0]),n},after:function(e,t){var n=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(n,e.nextSibling),n},before:function(e,t){var n=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(n,e),n}}},62:function(e,t,n){var i=n(63);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(1).default)("data-quickpaper-6b87fa96",i,!0)},63:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"\n    .github {\n        position: fixed;\n        transform: rotate(45deg);\n        line-height: 1.6em;\n        transform-origin: 1.5rem 0.23rem;\n        text-align: center;\n        font-family: sans-serif;\n        display: inline-block;\n        top: 0.6rem;\n        right: -0.6rem;\n        width: 3rem;\n        background-color: #03a9f4;\n        outline: 0.04rem solid #03a9f4;\n        border: 0.02rem dashed #065b9f;\n        color: #fafafa;\n    }\n\n    .examples-github {\n        position: fixed;\n        transform: rotate(45deg);\n        line-height: 1.6em;\n        transform-origin: 1.5rem 0.23rem;\n        text-align: center;\n        font-family: sans-serif;\n        display: inline-block;\n        top: 0.8rem;\n        right: -1rem;\n        width: 4rem;\n        background-color: #ac2c23;\n        outline: 0.04rem solid #ac2c23;\n        border: 0.02rem dashed #d14742;\n        color: #ebdbd9;\n    }\n",""])},97:function(e,t,n){"use strict";n.r(t);var i=n(28),r={data:function(){return{page:null}},mounted:function(){var e=this;this.loadRouter((function(t){return e.page=t}),2),i.a.remove(document.getElementById("main-nav")),document.getElementById("main-content").style.paddingTop=0}};n(62);r.render=function(e){return e("div",{quickpaper:"","data-quickpaper-6b87fa96":""},[e("div",{id:"examples-id","data-quickpaper-6b87fa96":""},[e("a",{href:"https://github.com/hai2007/clunch",class:"github",target:"_blank","data-quickpaper-6b87fa96":""},["Fork Library on Github"]),e("a",{href:"javascript:void(0)",style:"display: none;",id:"examples-github-banner",class:"examples-github",target:"_blank","data-quickpaper-6b87fa96":""},["Fork Examples Code↵            on Github"]),e("component",{":is":"page","data-quickpaper-6b87fa96":""},[])])])};t.default=r}}]);