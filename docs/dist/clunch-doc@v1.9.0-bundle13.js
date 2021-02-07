(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{28:function(e,t,a){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var i="http://www.w3.org/2000/svg";t.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+t,a):e.addEventListener(t,a,!1);else for(var i=0;i<e.length;i++)this.bind(e[i],t,a)},unbind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener(t,a,!1);else for(var i=0;i<e.length;i++)this.unbind(e[i],t,a)},find:function(e,t,a){if(!this.isNode(e))return[];for(var i=e.getElementsByTagName(a||"*"),n=[],r=0;r<i.length;r++)this.isNode(i[r])&&("function"!=typeof t||t(i[r]))&&n.push(i[r]);return n},children:function(e,t){for(var a=e.childNodes,i=[],n=0;n<a.length;n++)this.isNode(a[n])&&("function"!=typeof t||t(a[n]))&&i.push(a[n]);return i},hasClass:function(e,t,a){t.constructor!==Array&&(t=[t]);for(var i=" "+(e.getAttribute("class")||"")+" ",n=0;n<t.length;n++)if(i.indexOf(" "+t[n]+" ")>=0){if(a)return!0}else if(!a)return!1;return!0},removeClass:function(e,t){var a=(" "+(e.getAttribute("class")||"")+" ").replace(" "+t.trim()+" "," ");e.setAttribute("class",a.trim())},addClass:function(e,t){if(!this.hasClass(e,t)){var a=e.getAttribute("class")||"";e.setAttribute("class",a+" "+t)}},toNode:function(e,t){var a;(a=t?document.createElementNS(i,"svg"):document.createElement("div")).innerHTML=e;for(var n=a.childNodes,r=0;r<n.length;r++)if(this.isNode(n[r]))return n[r]},trigger:function(e,t){if(document.createEventObject)e.fireEvent("on"+t,document.createEventObject());else{var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!1),e.dispatchEvent(a)}},getStyle:function(e,t){var a=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof t?a.getPropertyValue(t):a},offsetPosition:function(e){var t=0,a=0;for(a=e.offsetTop,t=e.offsetLeft,e=e.offsetParent;e;)a+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{left:t,top:a}},mousePosition:function(e,t){var a=e.getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-a.left,y:t.clientY-a.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,t){for(var a in t)e.style[a]=t[a]},size:function(e,t){var a,i;return"content"==t?(i=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),a=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==t?(i=e.clientWidth,a=e.clientHeight):"border"==t?(i=e.offsetWidth,a=e.offsetHeight):"scroll"==t?(i=e.scrollWidth,a=e.scrollHeight):(i=e.offsetWidth,a=e.offsetHeight),{width:i,height:a}},append:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.appendChild(a),a},prepend:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.insertBefore(a,e.childNodes[0]),a},after:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e.nextSibling),a},before:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e),a}}},29:function(e,t,a){"use strict";var i=a(28);t.a=function(e,t){for(var a=i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,e)})),n=0;n<a.length;n++)a[n].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(a){return i.a.hasClass(a,[e,t])}))[0].setAttribute("active","yes")}},30:function(e,t,a){"use strict";var i=[],n=null;t.a=function(e,t){t=t||0,e=e||document.documentElement;var a,r,o=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}().fixed;if(o){var c=document.getElementById("fixed-"+o);if(c){var d=c.offsetTop-t,l=e.scrollTop||0;a=function(t){e.scrollTop=(d-l)*t+l},(r={timer:function(e,t,a){if(!e)throw new Error("Tick is required!");t=t||400;var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:n,createTime:new Date,tick:e,duration:t,callback:a}),r.start(),n},start:function(){n||(n=setInterval(r.tick,13))},tick:function(){var e,t,a,n,o,c,d,l=i;for((i=[]).length=0,t=0;t<l.length;t++)e=(o=l[t]).createTime,a=o.tick,c=o.duration,n=o.callback,d=(+new Date-e)/c,a(d=d>1?1:d),d<1&&o.id?i.push(o):n&&n(d);i.length<=0&&r.stop()},stop:function(){n&&(clearInterval(n),n=null)}}).timer((function(e){a(e)}),500,(function(){e.scrollTop=d}))}}else e.scrollTop=0}},62:function(e,t,a){var i=a(63);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(1).default)("data-quickpaper-4a63f230",i,!0)},63:function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"",""])},95:function(e,t,a){"use strict";a.r(t);var i=a(29),n=a(30),r=a(31),o=a.n(r),c=[{name:"group",attrs:{"c-for":"(value,index) in values"},children:[{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-1 * ( _height - 100 )","fill-color":"rgba(220, 220, 220, 0.8)",type:"fill"},children:[]},{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-0.005 * value * ( _height - 100 )","fill-color":"red",type:"fill"},children:[]}]},{name:"ruler",attrs:{x:"50",":y":"_height - 50",":length":"_width - 100",value:'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',"value-position":"between"},children:[]}],d=[{name:"group",attrs:{"c-for":"(value,index) in values"},children:[{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-1 * ( _height - 100 )","fill-color":"rgba(220, 220, 220, 0.8)",type:"fill"},children:[]},{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-0.005 * value * ( _height - 100 )","fill-color":"red",type:"fill","c-on:click":"doit",":_id":"index"},children:[]}]},{name:"ruler",attrs:{x:"50",":y":"_height - 50",":length":"_width - 100",value:'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',"value-position":"between"},children:[]}],l={created:function(){Object(i.a)("menu-2","event")},mounted:function(){Object(n.a)(document.getElementById("course-id"),44),new o.a({el:document.getElementById("canvas-3"),render:c,data:function(){return{values:[120,200,150,80,70,110,130]}}}),new o.a({el:document.getElementById("canvas-4"),render:d,data:function(){return{values:[120,200,150,80,70,110,130]}},methods:{doit:function(e){console.log(e)}}})}};a(62);l.render=function(e){return e("div",{quickpaper:"","data-quickpaper-4a63f230":""},[e("div",{class:"doc-view","data-quickpaper-4a63f230":""},[e("header",{id:"fixed-top","data-quickpaper-4a63f230":""},["如何添加图形交互事件"]),e("p",{"data-quickpaper-4a63f230":""},["上一节我们说明了如何使用内置组件绘制一个图形，后续修改数据的时候自动触发绘图更新。如果我们希望和图表交互怎么办？"]),e("h1",{id:"fixed-no-event","data-quickpaper-4a63f230":""},["一个柱状图"]),e("p",{"data-quickpaper-4a63f230":""},["为了方便说明，我们先来绘制一个柱状图，先看看运行效果："]),e("div",{id:"canvas-3",style:"height:360px;","data-quickpaper-4a63f230":""},[]),e("p",{"data-quickpaper-4a63f230":""},["我们就是通过",e("a",{class:"important",target:"_blank",href:"#/api/directive?fixed=c-for","data-quickpaper-4a63f230":""},["c-for"]),"指令，根据数据来循环出需要的矩形，并添加一个刻度尺组件来辅助显示。下面是",e("span",{class:"important","data-quickpaper-4a63f230":""},[".clunch文件"]),"的内容："]),e("pre",{"q-code":"html","data-quickpaper-4a63f230":""},['<group c-for=\'(value,index) in values\'>↵↵    \x3c!-- 背景灰色 --\x3e↵    <rect :x="( _width - 100 ) / values.length * ( index + 0.1 ) + 50" :y="_height - 50"↵        :width="( _width - 100 ) / values.length * 0.8" :height=\'-1 * ( _height - 100 )\'↵        fill-color=\'rgba(220, 220, 220, 0.8)\' type=\'fill\' />↵↵    \x3c!-- 值红色 --\x3e↵    <rect :x="( _width - 100 ) / values.length * ( index + 0.1 ) + 50" :y="_height - 50"↵        :width="( _width - 100 ) / values.length * 0.8" :height=\'-0.005 * value * ( _height - 100 )\'↵        fill-color=\'red\' type=\'fill\' />↵↵</group>↵↵\x3c!-- 横坐标 --\x3e↵<ruler x="50" :y="_height - 50" :length="_width - 100"↵    value=\'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]\' value-position=\'between\' />']),e("p",{"data-quickpaper-4a63f230":""},["可以发现，使用最基本的一些图形绘制大部分的图形也是非常容易的。"]),e("p",{"data-quickpaper-4a63f230":""},["上面用到的数据",e("span",{class:"public","data-quickpaper-4a63f230":""},["values"]),"内容如下："]),e("pre",{"q-code":"","data-quickpaper-4a63f230":""},["values: [120, 200, 150, 80, 70, 110, 130]"]),e("h1",{id:"fixed-event","data-quickpaper-4a63f230":""},["添加点击事件"]),e("p",{"data-quickpaper-4a63f230":""},["所有的事件都依赖指令",e("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-4a63f230":""},["c-on"]),"实现，这里也是一样的。"]),e("h3",{id:"fixed-bind","data-quickpaper-4a63f230":""},["使用c-on指令明确绑定的组件"]),e("p",{"data-quickpaper-4a63f230":""},["我们这里需要给红色的矩形添加交互点击反馈，来看看",e("span",{class:"important","data-quickpaper-4a63f230":""},[".clunch文件"]),"中如何修改："]),e("pre",{"q-code":"html","data-quickpaper-4a63f230":""},["\x3c!-- 值红色 --\x3e↵ <rect ... c-on:click='doit'/>"]),e("p",{"data-quickpaper-4a63f230":""},["我们上面只给出了修改的部分。可以看到，就是给需要交互的图形添加了",e("span",{class:"public","data-quickpaper-4a63f230":""},["c-on:click='doit'"]),"这个属性。这表示，点击这个组件的时候，会触发这个回调方法",e("span",{class:"important","data-quickpaper-4a63f230":""},["doit"]),"。"]),e("h3",{id:"fixed-methods","data-quickpaper-4a63f230":""},["添加回调方法"]),e("p",{"data-quickpaper-4a63f230":""},["那么，上面那个",e("span",{class:"important","data-quickpaper-4a63f230":""},["doit"]),"方法在哪里定义？"]),e("pre",{"q-code":"","data-quickpaper-4a63f230":""},["new Clunch({↵    // ......↵    methods:{↵        doit(target){↵            console.log(target);↵        }↵    }↵});"]),e("p",{"data-quickpaper-4a63f230":""},["没错，在创建",e("span",{class:"important","data-quickpaper-4a63f230":""},["Clunch对象"]),"的时候配置。"]),e("p",{"data-quickpaper-4a63f230":""},["下面是运行效果："]),e("div",{id:"canvas-4",style:"height:360px;","data-quickpaper-4a63f230":""},[]),e("p",{"data-quickpaper-4a63f230":""},["打开控制台，点击的时候就会打印你点击结点的信息："]),e("pre",{"q-code":"","data-quickpaper-4a63f230":""},['attr: {fill-color: "red", stroke-color: "black", line-width: 1, dash: Array(0), type: "fill", …}↵data: undefined↵id: 6↵left: 601.5↵region: "default"↵series: "rect"↵subRegion: "default"↵top: 195↵__proto__: Object']),e("p",{"data-quickpaper-4a63f230":""},["打印的信息每项具体什么意思，你可以",e("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-4a63f230":""},["点击此处"]),"进行查阅，这里就不再赘述了。"]),e("div",{class:"bottom-link","data-quickpaper-4a63f230":""},[e("a",{href:"#/course/introduce?fixed=top",target:"_blank",class:"left","data-quickpaper-4a63f230":""},["上一节：环境搭建和基本使用"]),e("a",{href:"#/course/series?fixed=top",target:"_blank",class:"right","data-quickpaper-4a63f230":""},["下一节：自定义图形组件"])])])])};t.default=l}}]);