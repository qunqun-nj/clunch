(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,a){"use strict";a.r(t);var i=a(24),n=a(25),r={created:function(){Object(i.a)("menu-2","series-reuse")},mounted:function(){Object(n.a)(document.getElementById("api-id"),44)}};a(47);r.render=function(e){return e("div",{quickpaper:"","data-quickpaper-7eedf6fb":""},[e("div",{class:"doc-view","data-quickpaper-7eedf6fb":""},[e("header",{id:"fixed-top","data-quickpaper-7eedf6fb":""},["组件复用"]),e("h2",{id:"fixed-option","data-quickpaper-7eedf6fb":""},["配置option前置说明"]),e("p",{"data-quickpaper-7eedf6fb":""},["由于下面要说明的方法中都会设计到这个选项，在这里提前统一说明一下："]),e("pre",{"q-code":"","data-quickpaper-7eedf6fb":""},['option = {↵    attr:{},↵    subSeries:[↵        {↵            name:"",↵            attr:{}↵        },↵        // ......↵    ],↵    texts:[]↵})']),e("ul",{"data-quickpaper-7eedf6fb":""},[e("li",{"data-quickpaper-7eedf6fb":""},[e("span",{class:"important","data-quickpaper-7eedf6fb":""},["option.attr"]),"：表示需要被复用的组件的属性配置。"]),e("li",{"data-quickpaper-7eedf6fb":""},[e("span",{class:"important","data-quickpaper-7eedf6fb":""},["option.subSeries"]),"：可选，表示需要被复用的组件的子组件，是一个数组，数组条目的",e("span",{class:"public","data-quickpaper-7eedf6fb":""},["name"]),"和",e("span",{class:"public","data-quickpaper-7eedf6fb":""},["attr"]),"方便表示子组件的名称和属性配置。"]),e("li",{"data-quickpaper-7eedf6fb":""},[e("span",{class:"important","data-quickpaper-7eedf6fb":""},["option.texts"]),"：可选，文本数组。"])]),e("h3",{id:"fixed-link","data-quickpaper-7eedf6fb":""},["图形复用"]),e("pre",{"q-code":"","data-quickpaper-7eedf6fb":""},["this.$reuseSeriesLink(seriesName, options);"]),e("p",{"data-quickpaper-7eedf6fb":""},["该方法表示复用组件",e("span",{class:"important","data-quickpaper-7eedf6fb":""},["seriesName"]),"，第二个参数按照开头说明的传递即可。"])])])};t.default=r},24:function(e,t,a){"use strict";var i=a(3);t.a=function(e,t){for(var a=i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,e)})),n=0;n<a.length;n++)a[n].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(a){return i.a.hasClass(a,[e,t])}))[0].setAttribute("active","yes")}},25:function(e,t,a){"use strict";var i=[],n=null;t.a=function(e,t){t=t||0,e=e||document.documentElement;var a=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var t=e.split("&"),a={};return t.forEach((function(e){var t=e.split("=");a[t[0]]=t[1]})),a}().fixed;if(a){var r=document.getElementById("fixed-"+a);if(r){var o=r.offsetTop-t,c=e.scrollTop||0;!function(e,t,a){arguments.length<2&&(t=400);var r={timer:function(e,t,a){if(!e)throw new Error("Tick is required!");var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:n,createTime:new Date,tick:e,duration:t,callback:a}),r.start(),n},start:function(){n||(n=setInterval(r.tick,13))},tick:function(){var e,t,a,n,o,c,p,d=i;for((i=[]).length=0,t=0;t<d.length;t++)e=(o=d[t]).createTime,a=o.tick,c=o.duration,n=o.callback,!1,(p=(+new Date-e)/c)>=1&&!0,a(p=p>1?1:p),p<1&&o.id?i.push(o):n&&n(p);i.length<=0&&r.stop()},stop:function(){n&&(clearInterval(n),n=null)}},o=r.timer((function(t){e(t)}),t,a)}((function(t){e.scrollTop=(o-c)*t+c}),500,(function(){e.scrollTop=o}))}}else e.scrollTop=0;document.getElementById("root-view").scrollTop=0}},47:function(e,t,a){var i=a(48);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(2).default)("data-quickpaper-7eedf6fb",i,!0)},48:function(e,t,a){(e.exports=a(1)(!1)).push([e.i,"",""])}}]);