(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{28:function(e,a,t){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var i="http://www.w3.org/2000/svg";a.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,a,t){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+a,t):e.addEventListener(a,t,!1);else for(var i=0;i<e.length;i++)this.bind(e[i],a,t)},unbind:function(e,a,t){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+a,t):e.removeEventListener(a,t,!1);else for(var i=0;i<e.length;i++)this.unbind(e[i],a,t)},find:function(e,a,t){if(!this.isNode(e))return[];for(var i=e.getElementsByTagName(t||"*"),r=[],n=0;n<i.length;n++)this.isNode(i[n])&&("function"!=typeof a||a(i[n]))&&r.push(i[n]);return r},children:function(e,a){for(var t=e.childNodes,i=[],r=0;r<t.length;r++)this.isNode(t[r])&&("function"!=typeof a||a(t[r]))&&i.push(t[r]);return i},hasClass:function(e,a,t){a.constructor!==Array&&(a=[a]);for(var i=" "+(e.getAttribute("class")||"")+" ",r=0;r<a.length;r++)if(i.indexOf(" "+a[r]+" ")>=0){if(t)return!0}else if(!t)return!1;return!0},removeClass:function(e,a){var t=(" "+(e.getAttribute("class")||"")+" ").replace(" "+a.trim()+" "," ");e.setAttribute("class",t.trim())},addClass:function(e,a){if(!this.hasClass(e,a)){var t=e.getAttribute("class")||"";e.setAttribute("class",t+" "+a)}},toNode:function(e,a){var t;(t=a?document.createElementNS(i,"svg"):document.createElement("div")).innerHTML=e;for(var r=t.childNodes,n=0;n<r.length;n++)if(this.isNode(r[n]))return r[n]},trigger:function(e,a){if(document.createEventObject)e.fireEvent("on"+a,document.createEventObject());else{var t=document.createEvent("HTMLEvents");t.initEvent(a,!0,!1),e.dispatchEvent(t)}},getStyle:function(e,a){var t=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof a?t.getPropertyValue(a):t},offsetPosition:function(e){var a=0,t=0;for(t=e.offsetTop,a=e.offsetLeft,e=e.offsetParent;e;)t+=e.offsetTop,a+=e.offsetLeft,e=e.offsetParent;return{left:a,top:t}},mousePosition:function(e,a){var t=e.getBoundingClientRect();if(!a||!a.clientX)throw new Error("Event is necessary!");return{x:a.clientX-t.left,y:a.clientY-t.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,a){for(var t in a)e.style[t]=a[t]},size:function(e,a){var t,i;return"content"==a?(i=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),t=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==a?(i=e.clientWidth,t=e.clientHeight):"border"==a?(i=e.offsetWidth,t=e.offsetHeight):"scroll"==a?(i=e.scrollWidth,t=e.scrollHeight):(i=e.offsetWidth,t=e.offsetHeight),{width:i,height:t}},append:function(e,a){var t=this.isNode(a)?a:this.toNode(a);return e.appendChild(t),t},prepend:function(e,a){var t=this.isNode(a)?a:this.toNode(a);return e.insertBefore(t,e.childNodes[0]),t},after:function(e,a){var t=this.isNode(a)?a:this.toNode(a);return e.parentNode.insertBefore(t,e.nextSibling),t},before:function(e,a){var t=this.isNode(a)?a:this.toNode(a);return e.parentNode.insertBefore(t,e),t}}},29:function(e,a,t){"use strict";var i=t(28);a.a=function(e,a){for(var t=i.a.find(document.getElementById("root"),(function(a){return i.a.hasClass(a,e)})),r=0;r<t.length;r++)t[r].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,[e,a])}))[0].setAttribute("active","yes")}},30:function(e,a,t){"use strict";var i=[],r=null;a.a=function(e,a){a=a||0,e=e||document.documentElement;var t,n,p=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var a=e.split("&"),t={};return a.forEach((function(e){var a=e.split("=");t[a[0]]=a[1]})),t}().fixed;if(p){var c=document.getElementById("fixed-"+p);if(c){var o=c.offsetTop-a,s=e.scrollTop||0;t=function(a){e.scrollTop=(o-s)*a+s},(n={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");a=a||400;var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:r,createTime:new Date,tick:e,duration:a,callback:t}),n.start(),r},start:function(){r||(r=setInterval(n.tick,13))},tick:function(){var e,a,t,r,p,c,o,s=i;for((i=[]).length=0,a=0;a<s.length;a++)e=(p=s[a]).createTime,t=p.tick,c=p.duration,r=p.callback,o=(+new Date-e)/c,t(o=o>1?1:o),o<1&&p.id?i.push(p):r&&r(o);i.length<=0&&n.stop()},stop:function(){r&&(clearInterval(r),r=null)}}).timer((function(e){t(e)}),500,(function(){e.scrollTop=o}))}}else e.scrollTop=0}},46:function(e,a,t){var i=t(47);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(1).default)("data-quickpaper-06eb7eab",i,!0)},47:function(e,a,t){(e.exports=t(0)(!1)).push([e.i,"",""])},99:function(e,a,t){"use strict";t.r(a);var i=t(29),r=t(30),n={created:function(){Object(i.a)("menu-2","directive")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};t(46);n.render=function(e){return e("div",{quickpaper:"","data-quickpaper-06eb7eab":""},[e("div",{class:"doc-view","data-quickpaper-06eb7eab":""},[e("header",{id:"fixed-top","data-quickpaper-06eb7eab":""},["指令"]),e("h2",{id:"fixed-expression","data-quickpaper-06eb7eab":""},["表达式"]),e("p",{"data-quickpaper-06eb7eab":""},["表达式",e("span",{class:"public","data-quickpaper-06eb7eab":""},["expression"]),"在接下来的文档中会多次提及，因此在开头进行说明。"]),e("p",{"data-quickpaper-06eb7eab":""},["一个合法的表达式几乎和普通的",e("span",{class:"important","data-quickpaper-06eb7eab":""},["JS表达式"]),"差不多，我们来列举几个正确的写法："]),e("pre",{"q-code":"","data-quickpaper-06eb7eab":""},['key + 10↵dataList[0].value[keyName]↵!flag↵!flag[key][0].flag == 7 || ( flag.demo > 10 || key )↵"id" + index↵help[key] ? "red" : "white"']),e("h1",{id:"fixed-c-on","data-quickpaper-06eb7eab":""},["事件",e("span",{class:"sub-title","data-quickpaper-06eb7eab":""},["c-on"])]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo c-on:eventName@regionNamee='doit' />"]),e("p",{"data-quickpaper-06eb7eab":""},["对于任意一个组件，如果希望在此组件的某个区域上绑定交换事件，可以用上面的c-on指令，其中",e("span",{class:"public","data-quickpaper-06eb7eab":""},["eventName"]),"是必输的，表示事件类型，支持如下几种："]),e("ul",{"data-quickpaper-06eb7eab":""},[e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["click"]),":点击"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["dblclick"]),":双击"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["mousemove"]),":鼠标移动"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["mousedown"]),":鼠标按下"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["mouseup"]),":鼠标放开"])]),e("p",{"data-quickpaper-06eb7eab":""},["此外，",e("span",{class:"public","data-quickpaper-06eb7eab":""},["regionName"]),"是可选的，无特殊说明，可以直接省略，表示触发默认区域（具体的请在",e("a",{href:"#/api/series?fixed=create",target:"_blank","data-quickpaper-06eb7eab":""},["自定义组件"]),"中查看），或者填写特定的区域名称。"]),e("p",{"data-quickpaper-06eb7eab":""},["对于上面的doit方法，有一个形参，格式如下："]),e("pre",{"q-code":"","data-quickpaper-06eb7eab":""},['{series: "arc", region: "default", subRegion: "default", attr: {…}, left: 635, …}↵attr: {fill-color: "black", dash: Array(0), type: "fill", …}↵left: 635↵region: "default"↵series: "arc"↵subRegion: "default"↵top: 305↵data:"来自子区域的第二个参数data"']),e("ul",{"data-quickpaper-06eb7eab":""},[e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["attr"]),"：当前标签的属性；"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["left、top"]),"：触发事件的位置，注意是相对画布左上角的；"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["region"]),"：当前交互的区域名称；"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["series"]),"：组件名称；"]),e("li",{"data-quickpaper-06eb7eab":""},[e("span",{class:"important","data-quickpaper-06eb7eab":""},["subRegion"]),"：子区域名称。"])]),e("h1",{id:"fixed-c-for","data-quickpaper-06eb7eab":""},["迭代",e("span",{class:"sub-title","data-quickpaper-06eb7eab":""},["c-for"])]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo c-for='(value, key) in dataList' />"]),e("p",{"data-quickpaper-06eb7eab":""},["或"]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo c-for='value in dataList' />"]),e("p",{"data-quickpaper-06eb7eab":""},["其中",e("span",{class:"public","data-quickpaper-06eb7eab":""},["dataList"]),"可以是",e("span",{class:"important","data-quickpaper-06eb7eab":""},["数组"]),"或键值对形式的",e("span",{class:"important","data-quickpaper-06eb7eab":""},["JSON"]),"。"]),e("h1",{id:"fixed-c-if","data-quickpaper-06eb7eab":""},["是否显示",e("span",{class:"sub-title","data-quickpaper-06eb7eab":""},["c-if"])]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo c-if='expression' />"]),e("p",{"data-quickpaper-06eb7eab":""},[e("span",{class:"public","data-quickpaper-06eb7eab":""},["expression"]),"应该是一个合法的表达式，如果为true表示显示，否则隐藏此图形组件。"]),e("h1",{id:"fixed-c-bind","data-quickpaper-06eb7eab":""},["数据绑定",e("span",{class:"sub-title","data-quickpaper-06eb7eab":""},["c-bind"])]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo c-bind:attrName='expression' />"]),e("p",{"data-quickpaper-06eb7eab":""},[e("span",{class:"public","data-quickpaper-06eb7eab":""},["attrName"]),"表示属性名称，",e("span",{class:"public","data-quickpaper-06eb7eab":""},["expression"]),"是一个表达式，数据绑定可以自动监听数据改变来更新组件。"]),e("p",{"data-quickpaper-06eb7eab":""},["此外，由于此指令使用较多，你可以使用简写形式："]),e("pre",{"q-code":"html","data-quickpaper-06eb7eab":""},["<ui-demo :attrName='expression' />"])])])};a.default=n}}]);