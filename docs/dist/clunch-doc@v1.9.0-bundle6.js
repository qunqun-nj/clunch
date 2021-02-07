(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,a){"use strict";a.r(t);var r=a(29),i=a(30),c={created:function(){Object(r.a)("menu-2","painter")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};a(44);c.render=function(e){return e("div",{quickpaper:"","data-quickpaper-25e4c667":""},[e("div",{class:"doc-view","data-quickpaper-25e4c667":""},[e("header",{id:"fixed-top","data-quickpaper-25e4c667":""},["画笔"]),e("h1",{id:"fixed-config","data-quickpaper-25e4c667":""},["配置画笔"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},['painter.config({↵↵    // 填充色或图案↵    "fillStyle":string,↵↵    // 轮廓色或图案↵    "strokeStyle":string,↵↵    // 线条宽度(单位px，下同)↵    "lineWidth":number↵↵    // 文字水平对齐方式（"left"左对齐、"center"居中和"right"右对齐）↵    "textAlign":string,↵↵    // 文字垂直对齐方式（"middle"垂直居中、"top"上对齐和"bottom"下对齐）↵    "textBaseline":string,↵↵    // 文字大小，默认16↵    "font-size":number,↵↵    // 字体，默认"sans-serif"↵    "font-family":string,↵↵    // 圆弧开始端闭合方式（"butt"直线闭合、"round"圆帽闭合）↵    "arc-start-cap":string,↵↵    // 圆弧结束端闭合方式，和上一个类似↵    "arc-end-cap":string,↵↵    // 设置线条虚线，应该是一个数组[number,...]↵    "lineDash":array↵↵});']),e("p",{"data-quickpaper-25e4c667":""},["你需要配置你绘制的图形需要的选项即可！"]),e("h2",{id:"fixed-gradient","data-quickpaper-25e4c667":""},["渐变色"]),e("p",{"data-quickpaper-25e4c667":""},["除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["创建"]),e("p",{"data-quickpaper-25e4c667":""},[e("span",{class:"important","data-quickpaper-25e4c667":""},["线性渐变"]),"：四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradient = painter.createLinearGradient(x1, y1, x2, y2);"]),e("p",{"data-quickpaper-25e4c667":""},[e("span",{class:"important","data-quickpaper-25e4c667":""},["环形渐变"]),"：三个参数分别表示渐变的圆心P(cx, cy)和半径r："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradient = painter.createRadialGradient(cx, cy, r);"]),e("p",{class:"warn","data-quickpaper-25e4c667":""},["温馨提示：上述坐标的单位都是px，对于环形渐变而言，渐变的起点是圆心！"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["设置"]),e("p",{"data-quickpaper-25e4c667":""},["获取渐变对象以后，你需要添加渐变色，可以添加任意多个："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["gradient.addColorStop(deep, color);"]),e("p",{"data-quickpaper-25e4c667":""},["上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值（不可以是渐变色）。"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["获取"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradientColor = gradient.value();"]),e("h1",{id:"fixed-method","data-quickpaper-25e4c667":""},["绘图方法"]),e("h3",{id:"fixed-text","data-quickpaper-25e4c667":""},["文字"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillText(text, x, y[, deg]);"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeText(text, x, y[, deg]);"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制轮廓并填充的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullText(text, x, y[, deg]);"]),e("h3",{id:"fixed-arc","data-quickpaper-25e4c667":""},["弧形"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillArc(cx, cy, r1, r2, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["和fillArc方法类似，只不过绘制的是轮廓圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["和fillArc方法类似，只不过绘制的是轮廓并填充圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullArc(cx, cy, r1, r2, beginDeg, deg);"]),e("h3",{id:"fixed-circle","data-quickpaper-25e4c667":""},["圆"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制填充圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillCircle(cx, cy, r);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制轮廓圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeCircle(cx, cy, r);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制轮廓并填充圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullCircle(cx, cy, r);"]),e("h3",{id:"fixed-rect","data-quickpaper-25e4c667":""},["矩形"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制填充矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillRect(x, y, width, height);"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制轮廓矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeRect(x, y, width, height);"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制轮廓并填充矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullRect(x, y, width, height);"]),e("h3",{id:"fixed-path","data-quickpaper-25e4c667":""},["路径"]),e("p",{"data-quickpaper-25e4c667":""},["基于路径可以绘制几乎大部分图形，你几乎可以描述任意一个区域。"]),e("p",{"data-quickpaper-25e4c667":""},["开始一段独立的路径："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.beginPath();"]),e("p",{"data-quickpaper-25e4c667":""},["闭合当前路径，也就是路径首尾闭合："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.closePath();"]),e("p",{"data-quickpaper-25e4c667":""},["画笔移动到点(x, y)，此时笔离开了画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.moveTo(x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["画笔移动到点(x, y)，此时笔没有离开画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.lineTo(x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r，从弧度beginDeg开始，跨越弧度deg画弧，此时笔没有离开画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.arc(cx, cy, r, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["二次贝塞尔曲线到"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.quadraticCurveTo(cpx, cpy, x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["三次贝塞尔曲线到："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径包裹的区域填充颜色："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fill();"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径上色（轮廓线）："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.stroke();"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径画上轮廓线并填充颜色到当前路径所包裹的区域："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.full();"]),e("p",{"data-quickpaper-25e4c667":""},["把图像、画布或视频绘制到画布的指定位置上："]),e("h3",{id:"fixed-image","data-quickpaper-25e4c667":""},["图片"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.drawImage();"]),e("ul",{"data-quickpaper-25e4c667":""},[e("li",{"data-quickpaper-25e4c667":""},["(img, x, y):在画布上定位图像。"]),e("li",{"data-quickpaper-25e4c667":""},["(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。"]),e("li",{"data-quickpaper-25e4c667":""},["(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。"])])])])};t.default=c},28:function(e,t,a){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var r="http://www.w3.org/2000/svg";t.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+t,a):e.addEventListener(t,a,!1);else for(var r=0;r<e.length;r++)this.bind(e[r],t,a)},unbind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener(t,a,!1);else for(var r=0;r<e.length;r++)this.unbind(e[r],t,a)},find:function(e,t,a){if(!this.isNode(e))return[];for(var r=e.getElementsByTagName(a||"*"),i=[],c=0;c<r.length;c++)this.isNode(r[c])&&("function"!=typeof t||t(r[c]))&&i.push(r[c]);return i},children:function(e,t){for(var a=e.childNodes,r=[],i=0;i<a.length;i++)this.isNode(a[i])&&("function"!=typeof t||t(a[i]))&&r.push(a[i]);return r},hasClass:function(e,t,a){t.constructor!==Array&&(t=[t]);for(var r=" "+(e.getAttribute("class")||"")+" ",i=0;i<t.length;i++)if(r.indexOf(" "+t[i]+" ")>=0){if(a)return!0}else if(!a)return!1;return!0},removeClass:function(e,t){var a=(" "+(e.getAttribute("class")||"")+" ").replace(" "+t.trim()+" "," ");e.setAttribute("class",a.trim())},addClass:function(e,t){if(!this.hasClass(e,t)){var a=e.getAttribute("class")||"";e.setAttribute("class",a+" "+t)}},toNode:function(e,t){var a;(a=t?document.createElementNS(r,"svg"):document.createElement("div")).innerHTML=e;for(var i=a.childNodes,c=0;c<i.length;c++)if(this.isNode(i[c]))return i[c]},trigger:function(e,t){if(document.createEventObject)e.fireEvent("on"+t,document.createEventObject());else{var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!1),e.dispatchEvent(a)}},getStyle:function(e,t){var a=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof t?a.getPropertyValue(t):a},offsetPosition:function(e){var t=0,a=0;for(a=e.offsetTop,t=e.offsetLeft,e=e.offsetParent;e;)a+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{left:t,top:a}},mousePosition:function(e,t){var a=e.getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-a.left,y:t.clientY-a.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,t){for(var a in t)e.style[a]=t[a]},size:function(e,t){var a,r;return"content"==t?(r=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),a=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==t?(r=e.clientWidth,a=e.clientHeight):"border"==t?(r=e.offsetWidth,a=e.offsetHeight):"scroll"==t?(r=e.scrollWidth,a=e.scrollHeight):(r=e.offsetWidth,a=e.offsetHeight),{width:r,height:a}},append:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.appendChild(a),a},prepend:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.insertBefore(a,e.childNodes[0]),a},after:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e.nextSibling),a},before:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e),a}}},29:function(e,t,a){"use strict";var r=a(28);t.a=function(e,t){for(var a=r.a.find(document.getElementById("root"),(function(t){return r.a.hasClass(t,e)})),i=0;i<a.length;i++)a[i].setAttribute("active","no");r.a.find(document.getElementById("root"),(function(a){return r.a.hasClass(a,[e,t])}))[0].setAttribute("active","yes")}},30:function(e,t,a){"use strict";var r=[],i=null;t.a=function(e,t){t=t||0,e=e||document.documentElement;var a,c,p=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}().fixed;if(p){var n=document.getElementById("fixed-"+p);if(n){var d=n.offsetTop-t,o=e.scrollTop||0;a=function(t){e.scrollTop=(d-o)*t+o},(c={timer:function(e,t,a){if(!e)throw new Error("Tick is required!");t=t||400;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return r.push({id:i,createTime:new Date,tick:e,duration:t,callback:a}),c.start(),i},start:function(){i||(i=setInterval(c.tick,13))},tick:function(){var e,t,a,i,p,n,d,o=r;for((r=[]).length=0,t=0;t<o.length;t++)e=(p=o[t]).createTime,a=p.tick,n=p.duration,i=p.callback,d=(+new Date-e)/n,a(d=d>1?1:d),d<1&&p.id?r.push(p):i&&i(d);r.length<=0&&c.stop()},stop:function(){i&&(clearInterval(i),i=null)}}).timer((function(e){a(e)}),500,(function(){e.scrollTop=d}))}}else e.scrollTop=0}},44:function(e,t,a){var r=a(45);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(1).default)("data-quickpaper-25e4c667",r,!0)},45:function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"",""])}}]);