(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(30),i={created:function(){Object(n.a)("menu-2","series")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};a(42);i.render=function(e){return e("div",{quickpaper:"","data-quickpaper-17fe3897":""},[e("div",{class:"doc-view","data-quickpaper-17fe3897":""},[e("header",{id:"fixed-top","data-quickpaper-17fe3897":""},["图形小组件"]),e("h1",{id:"fixed-create","data-quickpaper-17fe3897":""},["如何自定义小组件"]),e("pre",{"q-code":"","data-quickpaper-17fe3897":""},["Clunch.series('ui-demo',[\"type1\",...,\"server1\", ..., function($type1,...,server1, ...){↵    return {↵        // 定义属性，可选↵        attrs:{↵            // 自定义的图形组件上的属性都需要提前在这里配置↵            // $type1表示类型生成方法，↵            // 一共有这些type:'boolean', 'number', 'json', 'string', 'color', 'any'↵            // 类型生成方法的参数defaultValue可选，如果没有默认值可以不传递，表示必输↵            // 类型生成方法执行以后返回的是一个函数，↵            // 如果此属性参与动画，可以传递true或函数，否则可以省略：$type1(defaultValue)↵            // 如果传递函数，格式：(newValue, oldValue, deep)=>{ 返回结果 }↵            attrName1:$type1(defaultValue)(boolean|function),↵            ......↵        },↵        // 子组件配置，可选↵        subAttrs: {↵            \"子组件名称1\":{↵                ......↵                // 这里是子组件属性，和attr一样↵            },↵            ......↵        },↵        // 定义区域或子区域，可选↵        region:{↵            default: function (render, attr) {↵                // 获取画笔，用这只画笔绘制的区域就被标识为默认区域↵                // 其中subRegionName表示子区域表示，可选，可以是任意字符串↵                // 这意味着一个区域可以有任意多的子区域↵                // data，可选，子区域传递给交互事件的数据，这里传递的话，可以在交互方法的形参里面获取到↵                var painter=render(subRegionName, data);↵            },↵↵            // 除了默认区域外，我们还可以添加待名称的区域↵            regionName1: function (render, attr) {},↵            ......↵        },↵        // 具体的绘制方法，必输↵        link(painter, attr) {↵            // 绘制↵        }↵    };↵}]);"]),e("p",{class:"warn","data-quickpaper-17fe3897":""},["温馨提示：上面的",e("span",{class:"public","data-quickpaper-17fe3897":""},["server1"]),"表示服务，所有可以使用的内置服务请查看",e("a",{href:"#/api/service?fixed=top",target:"_blank","data-quickpaper-17fe3897":""},["服务"]),"一节。"]),e("h1",{id:"fixed-attribute","data-quickpaper-17fe3897":""},["组件属性"]),e("p",{"data-quickpaper-17fe3897":""},["需要说明的是以下几点："]),e("ul",{"data-quickpaper-17fe3897":""},[e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["$开头的"]),"或",e("span",{class:"important","data-quickpaper-17fe3897":""},["_开头的"]),"：已经被clunch内部特殊使用了，请勿使用；"]),e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["#"]),"、",e("span",{class:"important","data-quickpaper-17fe3897":""},[":"]),"和",e("span",{class:"important","data-quickpaper-17fe3897":""},["@"]),"：已经作为特殊的属性切割符了，请勿在自定义组件的属性名中出现；"]),e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["c-开头的"]),"：作为clunch内置指令保留字段，也请勿使用；"])]),e("h3",{id:"fixed-number","data-quickpaper-17fe3897":""},["number类型"]),e("ul",{"data-quickpaper-17fe3897":""},[e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["deg"]),"：表示角度，例如2deg；"]),e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["pi"]),"：表示弧度，例如2pi。"])]),e("h3",{id:"fixed-inner-attr","data-quickpaper-17fe3897":""},["内置属性"]),e("p",{"data-quickpaper-17fe3897":""},["对于所有的组件，除了组件自己定义的特殊属性外，还有一类他们共有的属性，这些属性由框架本身提供，用于提供特殊的支持。"]),e("ul",{"data-quickpaper-17fe3897":""},[e("li",{"data-quickpaper-17fe3897":""},[e("span",{class:"important","data-quickpaper-17fe3897":""},["_id"]),"：组件的唯一标识（组件的子组件属性也支持这个属性），可选，默认由框架自动给出。"])]),e("h1",{id:"fixed-core","data-quickpaper-17fe3897":""},["核心组件"]),e("h3",{id:"fixed-group","data-quickpaper-17fe3897":""},["组",e("span",{class:"sub-title","data-quickpaper-17fe3897":""},["group"])]),e("pre",{"q-code":"html","data-quickpaper-17fe3897":""},["\x3c!-- 里面的组件可以成为一组 --\x3e↵<group>↵    ......↵</group>"])])])};t.default=i},28:function(e,t,a){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var n="http://www.w3.org/2000/svg";t.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+t,a):e.addEventListener(t,a,!1);else for(var n=0;n<e.length;n++)this.bind(e[n],t,a)},unbind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener(t,a,!1);else for(var n=0;n<e.length;n++)this.unbind(e[n],t,a)},find:function(e,t,a){if(!this.isNode(e))return[];for(var n=e.getElementsByTagName(a||"*"),r=[],i=0;i<n.length;i++)this.isNode(n[i])&&("function"!=typeof t||t(n[i]))&&r.push(n[i]);return r},children:function(e,t){for(var a=e.childNodes,n=[],r=0;r<a.length;r++)this.isNode(a[r])&&("function"!=typeof t||t(a[r]))&&n.push(a[r]);return n},hasClass:function(e,t,a){t.constructor!==Array&&(t=[t]);for(var n=" "+(e.getAttribute("class")||"")+" ",r=0;r<t.length;r++)if(n.indexOf(" "+t[r]+" ")>=0){if(a)return!0}else if(!a)return!1;return!0},removeClass:function(e,t){var a=(" "+(e.getAttribute("class")||"")+" ").replace(" "+t.trim()+" "," ");e.setAttribute("class",a.trim())},addClass:function(e,t){if(!this.hasClass(e,t)){var a=e.getAttribute("class")||"";e.setAttribute("class",a+" "+t)}},toNode:function(e,t){var a;(a=t?document.createElementNS(n,"svg"):document.createElement("div")).innerHTML=e;for(var r=a.childNodes,i=0;i<r.length;i++)if(this.isNode(r[i]))return r[i]},trigger:function(e,t){if(document.createEventObject)e.fireEvent("on"+t,document.createEventObject());else{var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!1),e.dispatchEvent(a)}},getStyle:function(e,t){var a=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof t?a.getPropertyValue(t):a},offsetPosition:function(e){var t=0,a=0;for(a=e.offsetTop,t=e.offsetLeft,e=e.offsetParent;e;)a+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{left:t,top:a}},mousePosition:function(e,t){var a=e.getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-a.left,y:t.clientY-a.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,t){for(var a in t)e.style[a]=t[a]},size:function(e,t){var a,n;return"content"==t?(n=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),a=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==t?(n=e.clientWidth,a=e.clientHeight):"border"==t?(n=e.offsetWidth,a=e.offsetHeight):"scroll"==t?(n=e.scrollWidth,a=e.scrollHeight):(n=e.offsetWidth,a=e.offsetHeight),{width:n,height:a}},append:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.appendChild(a),a},prepend:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.insertBefore(a,e.childNodes[0]),a},after:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e.nextSibling),a},before:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e),a}}},29:function(e,t,a){"use strict";var n=a(28);t.a=function(e,t){for(var a=n.a.find(document.getElementById("root"),(function(t){return n.a.hasClass(t,e)})),r=0;r<a.length;r++)a[r].setAttribute("active","no");n.a.find(document.getElementById("root"),(function(a){return n.a.hasClass(a,[e,t])}))[0].setAttribute("active","yes")}},30:function(e,t,a){"use strict";var n=[],r=null;t.a=function(e,t){t=t||0,e=e||document.documentElement;var a,i,o=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}().fixed;if(o){var c=document.getElementById("fixed-"+o);if(c){var u=c.offsetTop-t,s=e.scrollTop||0;a=function(t){e.scrollTop=(u-s)*t+s},(i={timer:function(e,t,a){if(!e)throw new Error("Tick is required!");t=t||400;var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return n.push({id:r,createTime:new Date,tick:e,duration:t,callback:a}),i.start(),r},start:function(){r||(r=setInterval(i.tick,13))},tick:function(){var e,t,a,r,o,c,u,s=n;for((n=[]).length=0,t=0;t<s.length;t++)e=(o=s[t]).createTime,a=o.tick,c=o.duration,r=o.callback,u=(+new Date-e)/c,a(u=u>1?1:u),u<1&&o.id?n.push(o):r&&r(u);n.length<=0&&i.stop()},stop:function(){r&&(clearInterval(r),r=null)}}).timer((function(e){a(e)}),500,(function(){e.scrollTop=u}))}}else e.scrollTop=0}},42:function(e,t,a){var n=a(43);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(1).default)("data-quickpaper-17fe3897",n,!0)},43:function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"",""])}}]);