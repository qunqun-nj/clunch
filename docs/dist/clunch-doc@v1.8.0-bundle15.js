(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{28:function(e,t,a){"use strict";
/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */var n="http://www.w3.org/2000/svg";t.a={stopPropagation:function(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1},isNode:function(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)},bind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.attachEvent?e.attachEvent("on"+t,a):e.addEventListener(t,a,!1);else for(var n=0;n<e.length;n++)this.bind(e[n],t,a)},unbind:function(e,t,a){if(e.constructor!==Array&&e.constructor!==NodeList)window.detachEvent?e.detachEvent("on"+t,a):e.removeEventListener(t,a,!1);else for(var n=0;n<e.length;n++)this.unbind(e[n],t,a)},find:function(e,t,a){if(!this.isNode(e))return[];for(var n=e.getElementsByTagName(a||"*"),i=[],c=0;c<n.length;c++)this.isNode(n[c])&&("function"!=typeof t||t(n[c]))&&i.push(n[c]);return i},children:function(e,t){for(var a=e.childNodes,n=[],i=0;i<a.length;i++)this.isNode(a[i])&&("function"!=typeof t||t(a[i]))&&n.push(a[i]);return n},hasClass:function(e,t,a){t.constructor!==Array&&(t=[t]);for(var n=" "+(e.getAttribute("class")||"")+" ",i=0;i<t.length;i++)if(n.indexOf(" "+t[i]+" ")>=0){if(a)return!0}else if(!a)return!1;return!0},removeClass:function(e,t){var a=(" "+(e.getAttribute("class")||"")+" ").replace(" "+t.trim()+" "," ");e.setAttribute("class",a.trim())},addClass:function(e,t){if(!this.hasClass(e,t)){var a=e.getAttribute("class")||"";e.setAttribute("class",a+" "+t)}},toNode:function(e,t){var a;(a=t?document.createElementNS(n,"svg"):document.createElement("div")).innerHTML=e;for(var i=a.childNodes,c=0;c<i.length;c++)if(this.isNode(i[c]))return i[c]},trigger:function(e,t){if(document.createEventObject)e.fireEvent("on"+t,document.createEventObject());else{var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!1),e.dispatchEvent(a)}},getStyle:function(e,t){var a=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null):e.currentStyle;return"string"==typeof t?a.getPropertyValue(t):a},offsetPosition:function(e){var t=0,a=0;for(a=e.offsetTop,t=e.offsetLeft,e=e.offsetParent;e;)a+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;return{left:t,top:a}},mousePosition:function(e,t){var a=e.getBoundingClientRect();if(!t||!t.clientX)throw new Error("Event is necessary!");return{x:t.clientX-a.left,y:t.clientY-a.top}},remove:function(e){e.parentNode.removeChild(e)},setStyles:function(e,t){for(var a in t)e.style[a]=t[a]},size:function(e,t){var a,n;return"content"==t?(n=e.clientWidth-(this.getStyle(e,"padding-left")+"").replace("px","")-(this.getStyle(e,"padding-right")+"").replace("px",""),a=e.clientHeight-(this.getStyle(e,"padding-top")+"").replace("px","")-(this.getStyle(e,"padding-bottom")+"").replace("px","")):"padding"==t?(n=e.clientWidth,a=e.clientHeight):"border"==t?(n=e.offsetWidth,a=e.offsetHeight):"scroll"==t?(n=e.scrollWidth,a=e.scrollHeight):(n=e.offsetWidth,a=e.offsetHeight),{width:n,height:a}},append:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.appendChild(a),a},prepend:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.insertBefore(a,e.childNodes[0]),a},after:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e.nextSibling),a},before:function(e,t){var a=this.isNode(t)?t:this.toNode(t);return e.parentNode.insertBefore(a,e),a}}},29:function(e,t,a){"use strict";var n=a(28);t.a=function(e,t){for(var a=n.a.find(document.getElementById("root"),(function(t){return n.a.hasClass(t,e)})),i=0;i<a.length;i++)a[i].setAttribute("active","no");n.a.find(document.getElementById("root"),(function(a){return n.a.hasClass(a,[e,t])}))[0].setAttribute("active","yes")}},30:function(e,t,a){"use strict";var n=[],i=null;t.a=function(e,t){t=t||0,e=e||document.documentElement;var a,c,r=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}().fixed;if(r){var o=document.getElementById("fixed-"+r);if(o){var p=o.offsetTop-t,d=e.scrollTop||0;a=function(t){e.scrollTop=(p-d)*t+d},(c={timer:function(e,t,a){if(!e)throw new Error("Tick is required!");t=t||400;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return n.push({id:i,createTime:new Date,tick:e,duration:t,callback:a}),c.start(),i},start:function(){i||(i=setInterval(c.tick,13))},tick:function(){var e,t,a,i,r,o,p,d=n;for((n=[]).length=0,t=0;t<d.length;t++)e=(r=d[t]).createTime,a=r.tick,o=r.duration,i=r.callback,p=(+new Date-e)/o,a(p=p>1?1:p),p<1&&r.id?n.push(r):i&&i(p);n.length<=0&&c.stop()},stop:function(){i&&(clearInterval(i),i=null)}}).timer((function(e){a(e)}),500,(function(){e.scrollTop=p}))}}else e.scrollTop=0}},60:function(e,t,a){var n=a(61);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(1).default)("data-quickpaper-68e99f7c",n,!0)},61:function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"",""])},87:function(e,t,a){"use strict";a.r(t);var n,i,c,r,o=a(29),p=a(30),d=a(31),l=a.n(d),u=[{name:"text",attrs:{"c-bind:x":"value * 5",align:"center",y:"3","c-bind:content":'"当前随机生成的值：" + value',baseline:"top"},children:[]},{name:"rect",attrs:{"c-bind:width":"value * 5",height:"20",x:"0",y:"20",type:"fill","fill-color":"red"},children:[]},{name:"rect",attrs:{width:"500",height:"20",x:"0",y:"20",type:"stroke"},children:[]}],s=[{name:"text",attrs:{"c-bind:x":"value * 5","c-bind:align":'value>83?"right":(value<16?"left":"center")',y:"3","c-bind:content":'"当前随机生成的值：" + value',baseline:"top"},children:[]},{name:"rect",attrs:{"c-bind:width":"value * 5",height:"20",x:"0",y:"20",type:"fill","fill-color":"red"},children:[]},{name:"rect",attrs:{width:"500",height:"20",x:"0",y:"20",type:"stroke"},children:[]}],f={created:function(){Object(o.a)("menu-2","introduce")},beforeDestroy:function(){clearInterval(n),clearInterval(i),c.$destroy(),r.$destroy()},mounted:function(){Object(p.a)(document.getElementById("course-id"),44),c=new l.a({el:document.getElementById("canvas-1"),render:u,data:function(){return{value:0}},mounted:function(){var e=this;n=setInterval((function(){e.value=(100*Math.random()).toFixed(0)}),1500)}}),r=new l.a({el:document.getElementById("canvas-2"),render:s,filter:{calcAlign:function(e){return e>83?"right":e<16?"left":"center"}},data:function(){return{value:0}},mounted:function(){var e=this;i=setInterval((function(){e.value=(100*Math.random()).toFixed(0)}),1500)}})}};a(60);f.render=function(e){return e("div",{quickpaper:"","data-quickpaper-68e99f7c":""},[e("div",{class:"doc-view","data-quickpaper-68e99f7c":""},[e("header",{id:"fixed-top","data-quickpaper-68e99f7c":""},["开始使用"]),e("h1",{id:"fixed-environment","data-quickpaper-68e99f7c":""},["环境搭建"]),e("h3",{id:"fixed-normal","data-quickpaper-68e99f7c":""},["普通环境"]),e("p",{"data-quickpaper-68e99f7c":""},["由于本身",e("span",{class:"public","data-quickpaper-68e99f7c":""},["clunch.js"]),"不基于任何库或框架等，因此，你引入以后，直接通过",e("span",{class:"important","data-quickpaper-68e99f7c":""},["new Clunch(option)"]),"的方式即可："]),e("pre",{"q-code":"","data-quickpaper-68e99f7c":""},["new Clunch({↵    el:挂载点,↵    template:模板字符串,↵    ......↵});"]),e("p",{class:"warn","data-quickpaper-68e99f7c":""},["温馨提示：需要注意的是，你需要引入支持template属性的包。"]),e("h3",{id:"fixed-webpack","data-quickpaper-68e99f7c":""},["webpack"]),e("p",{"data-quickpaper-68e99f7c":""},["由于我们目前推荐基于",e("span",{class:"important","data-quickpaper-68e99f7c":""},["webpack"]),"开发，因此，后续的演示都是基于webpack搭建的开发环境。"]),e("p",{class:"warn","data-quickpaper-68e99f7c":""},["温馨提示：前端框架是选择vue、react或者没有框架都无所谓。"]),e("p",{"data-quickpaper-68e99f7c":""},["首先，你需要安装clunch.js:"]),e("pre",{"q-code":"","data-quickpaper-68e99f7c":""},["npm install --save clunch"]),e("p",{"data-quickpaper-68e99f7c":""},["安装好了以后，直接在",e("span",{class:"important","data-quickpaper-68e99f7c":""},["webpack.config.js"]),"配置文件中添加loader配置："]),e("pre",{"q-code":"","data-quickpaper-68e99f7c":""},["module.exports = {↵    ......↵    module: {↵        rules:[↵            {↵                test: /\\.clunch$/,↵                exclude: /node_modules/,↵                loader: ['clunch/loader.js']↵            },↵            ......↵        ]↵};"]),e("p",{"data-quickpaper-68e99f7c":""},["经过上面的配置以后，环境就搭建好了。"]),e("h1",{id:"fixed-simple-example","data-quickpaper-68e99f7c":""},["一个简单的例子"]),e("p",{"data-quickpaper-68e99f7c":""},["假如现在有一个这样的需求：一个进度条，范围是0~100，我们每隔1.5s随机生成一个数（值的范围是0~100），进度实时显示。"]),e("h3",{id:"fixed-simple-example-file","data-quickpaper-68e99f7c":""},["第一步：编辑clunch文件"]),e("p",{"data-quickpaper-68e99f7c":""},["你需要新建一个",e("span",{class:"important","data-quickpaper-68e99f7c":""},[".clunch文件"]),"，比如",e("span",{class:"public","data-quickpaper-68e99f7c":""},["demo1.clunch"]),"，然后在里面添加下列代码："]),e("pre",{"q-code":"html","data-quickpaper-68e99f7c":""},["\x3c!-- 显示当前的值 --\x3e↵<text c-bind:x='value * 5' align='center' y='0'↵      c-bind:content='\"当前随机生成的值：\" + value' baseline='top'/>↵↵\x3c!-- 进度条值,因为总长度是500，值的范围是0~100，实际宽就应该乘以5 --\x3e↵<rect c-bind:width='value * 5' height='20' x='0' y='20' type='fill' fill-color='red'/>↵↵\x3c!-- 进度条轮廓 --\x3e↵<rect width='500' height='20' x='0' y='20' type='stroke'/>"]),e("h3",{id:"fixed-simple-example-canvas","data-quickpaper-68e99f7c":""},["第二步：准备画布"]),e("p",{"data-quickpaper-68e99f7c":""},["可能叫挂载点更合适，我们需要在页面上准备好挂载的地方，比如有一个div，给他设置了大小（这个div的大小直接决定了最终绘图画布的大小）："]),e("pre",{"q-code":"html","data-quickpaper-68e99f7c":""},["<div id='canvas-1' style='width:500px;height:40px;'></div>"]),e("h3",{id:"fixed-simple-example-object","data-quickpaper-68e99f7c":""},["第三步：创建clunch对象"]),e("p",{"data-quickpaper-68e99f7c":""},["比如在和上述",e("span",{class:"important","data-quickpaper-68e99f7c":""},[".clunch文件"]),"同级目录的",e("span",{class:"important","data-quickpaper-68e99f7c":""},[".js文件"]),"里面："]),e("pre",{"q-code":"","data-quickpaper-68e99f7c":""},["import Clunch from 'clunch';↵import demo1 from './demo1.clunch';↵↵new Clunch({↵    el:document.getElementById('canvas-1'),↵    render:demo1,↵    data(){↵        return {↵            value:0↵        };↵    },↵    mounted(){↵↵        // 每隔1500毫秒改变一下数据↵        setInterval(()=>{↵            this.value = (Math.random() * 100).toFixed(0);↵        },1500);↵    }↵});"]),e("h2",{id:"fixed-simple-example-show1","data-quickpaper-68e99f7c":""},["运行效果一"]),e("p",{"data-quickpaper-68e99f7c":""},["到这里，简单的例子就写完了，下面是运行效果："]),e("div",{id:"canvas-1",style:"width:500px;height:40px;","data-quickpaper-68e99f7c":""},[]),e("h3",{id:"fixed-simple-example-filter","data-quickpaper-68e99f7c":""},["第四步：三元表达式"]),e("p",{"data-quickpaper-68e99f7c":""},["在上面的例子我们发现，如果随机数过小或过大的时候，文字有部分显示不出来，因为我们设置的文字水平对齐方式是固定居中的。"]),e("p",{"data-quickpaper-68e99f7c":""},["幸运的是，c-bind指令可以解析一个合法的js表达式，因此，只需要对.clunch进行简单的修改即可（此次修改只涉及",e("span",{class:"public","data-quickpaper-68e99f7c":""},["text标签"]),"，别的不列出了）："]),e("pre",{"q-code":"html","data-quickpaper-68e99f7c":""},['<text c-bind:x=\'value * 5\'↵    c-bind:align=\'value>83?"right":(value<16?"left":"center")\' ... />']),e("h2",{id:"fixed-simple-example-show2","data-quickpaper-68e99f7c":""},["运行效果二"]),e("p",{"data-quickpaper-68e99f7c":""},["然后我们看看现在的效果："]),e("div",{id:"canvas-2",style:"width:500px;height:40px;","data-quickpaper-68e99f7c":""},[]),e("h1",{id:"fixed-simple-example-end","data-quickpaper-68e99f7c":""},["小结"]),e("p",{"data-quickpaper-68e99f7c":""},["经过上面的学习，我们主要让你感受一下clunch是如何设计绘图方式的，也就是",e("span",{class:"important","data-quickpaper-68e99f7c":""},["数据驱动绘图"]),"的方式，使用者专注业务代码的开发即可！"]),e("p",{"data-quickpaper-68e99f7c":""},["在实际开发中，会遇到很多种情况，为了兼容这些，我们在下列两方面进行了探索："]),e("ul",{"data-quickpaper-68e99f7c":""},[e("li",{"data-quickpaper-68e99f7c":""},["首先，图形交互、画布自适应大小、过渡动画和浏览器兼容等问题，我们通过配置、指令、服务等方式主动提供，避免clunch使用者再去考虑，降低了难度。"]),e("li",{"data-quickpaper-68e99f7c":""},["其次，虽然上面只使用了",e("span",{class:"public","data-quickpaper-68e99f7c":""},["text"]),"和",e("span",{class:"public","data-quickpaper-68e99f7c":""},["rect"]),"标签，实际项目这些基本的可能无法完成，通过",e("span",{class:"important","data-quickpaper-68e99f7c":""},["自定义小组件"]),"等方式，提高了代码的复用性。"])]),e("p",{"data-quickpaper-68e99f7c":""},["当然，一切都在探索中，我们会根据反馈不断迭代更新。"]),e("div",{class:"bottom-link","data-quickpaper-68e99f7c":""},[e("a",{href:"#/course/install?fixed=top",target:"_blank",class:"left","data-quickpaper-68e99f7c":""},["上一节：说明"])])])])};t.default=f}}]);