(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{110:function(e,a,c){"use strict";c.r(a);var i=c(24),t=c(25),p={data:function(){return{page:null}},created:function(){Object(i.a)("menu-1","course")},mounted:function(){var e=this;this.loadRouter((function(a){return e.page=a}),2)},beforeDestroy:function(){this.page.beforeDestroy&&this.page.beforeDestroy()},methods:{openRouter:function(e){var a=this;this.goRouter((function(e){return a.page=e}),["course",e]),this.doScroll("top")},doScroll:function(e){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+e,Object(t.a)(document.getElementById("course-id"),44)}}};c(49);p.render=function(e){return e("div",{quickpaper:"","data-quickpaper-51bfe835":""},[e("div",{class:"menu-view","data-quickpaper-51bfe835":""},[e("div",{"data-quickpaper-51bfe835":""},[e("h2",{"data-quickpaper-51bfe835":""},["写在前面"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h3",{"@click":'openRouter("author")',class:"menu-2 author","data-quickpaper-51bfe835":""},["关于我们"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("projects")',"data-quickpaper-51bfe835":""},["当前在做什么？"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("new-task")',"data-quickpaper-51bfe835":""},["新任务如何产生？"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("join-us")',"data-quickpaper-51bfe835":""},["加入我们"])])])])]),e("h2",{"data-quickpaper-51bfe835":""},["基础"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h3",{"@click":'openRouter("install")',class:"menu-2 install","data-quickpaper-51bfe835":""},["基本说明"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("compatibility")',"data-quickpaper-51bfe835":""},["兼容性"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("log")',"data-quickpaper-51bfe835":""},["更新日志"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("script")',"data-quickpaper-51bfe835":""},["直接用 script 引入"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("cdn")',"data-quickpaper-51bfe835":""},["CDN"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("npm")',"data-quickpaper-51bfe835":""},["通过 NPM 方式管理"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("types")',"data-quickpaper-51bfe835":""},["对不同构建版本的解释"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("types-webpack")',"data-quickpaper-51bfe835":""},["webpack"])])])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h3",{"@click":'openRouter("introduce")',class:"menu-2 introduce","data-quickpaper-51bfe835":""},["环境搭建和基本使用"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("environment")',"data-quickpaper-51bfe835":""},["环境搭建"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("normal")',"data-quickpaper-51bfe835":""},["普通环境"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("webpack")',"data-quickpaper-51bfe835":""},["webpack"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("simple-example")',"data-quickpaper-51bfe835":""},["一个简单的例子"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-file")',"data-quickpaper-51bfe835":""},["第一步：编辑clunch文件"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-canvas")',"data-quickpaper-51bfe835":""},["第二步：准备画布"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-object")',"data-quickpaper-51bfe835":""},["第三步：创建clunch对象"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-show1")',class:"sub","data-quickpaper-51bfe835":""},["运行效果一"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-filter")',"data-quickpaper-51bfe835":""},["第四步：三元表达式"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("simple-example-show2")',class:"sub","data-quickpaper-51bfe835":""},["运行效果二"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("simple-example-end")',"data-quickpaper-51bfe835":""},["小结"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h3",{"@click":'openRouter("event")',class:"menu-2 event","data-quickpaper-51bfe835":""},["如何添加图形交互事件"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("no-event")',"data-quickpaper-51bfe835":""},["一个柱状图"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("event")',"data-quickpaper-51bfe835":""},["添加点击事件"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("bind")',"data-quickpaper-51bfe835":""},["使用c-on指令明确绑定的组件"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("methods")',"data-quickpaper-51bfe835":""},["添加回调方法"])])])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h3",{"@click":'openRouter("series")',class:"menu-2 series","data-quickpaper-51bfe835":""},["自定义图形组件"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("what")',"data-quickpaper-51bfe835":""},["需求分析"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("define")',"data-quickpaper-51bfe835":""},["定义组件"]),e("ul",{"data-quickpaper-51bfe835":""},[e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("define-frame")',"data-quickpaper-51bfe835":""},["基本结构"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("define-attrs")',"data-quickpaper-51bfe835":""},["定义属性"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("define-line")',"data-quickpaper-51bfe835":""},["具体的绘制方法"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h5",{"@click":'doScroll("define-region")',"data-quickpaper-51bfe835":""},["定义区域或子区域"])])])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("use")',"data-quickpaper-51bfe835":""},["使用组件"])]),e("li",{"data-quickpaper-51bfe835":""},[e("h4",{"@click":'doScroll("series-end")',"data-quickpaper-51bfe835":""},["小结"])])])])])]),e("div",{id:"course-id","data-quickpaper-51bfe835":""},[e("component",{":is":"page","data-quickpaper-51bfe835":""},[])])])])};a.default=p},24:function(e,a,c){"use strict";var i=c(3);a.a=function(e,a){for(var c=i.a.find(document.getElementById("root"),(function(a){return i.a.hasClass(a,e)})),t=0;t<c.length;t++)c[t].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(c){return i.a.hasClass(c,[e,a])}))[0].setAttribute("active","yes")}},25:function(e,a,c){"use strict";var i=[],t=null;a.a=function(e,a){a=a||0,e=e||document.documentElement;var c=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var a=e.split("&"),c={};return a.forEach((function(e){var a=e.split("=");c[a[0]]=a[1]})),c}().fixed;if(c){var p=document.getElementById("fixed-"+c);if(p){var r=p.offsetTop-a,l=e.scrollTop||0;!function(e,a,c){arguments.length<2&&(a=400);var p={timer:function(e,a,c){if(!e)throw new Error("Tick is required!");var t=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:t,createTime:new Date,tick:e,duration:a,callback:c}),p.start(),t},start:function(){t||(t=setInterval(p.tick,13))},tick:function(){var e,a,c,t,r,l,u,o=i;for((i=[]).length=0,a=0;a<o.length;a++)e=(r=o[a]).createTime,c=r.tick,l=r.duration,t=r.callback,!1,(u=(+new Date-e)/l)>=1&&!0,c(u=u>1?1:u),u<1&&r.id?i.push(r):t&&t(u);i.length<=0&&p.stop()},stop:function(){t&&(clearInterval(t),t=null)}},r=p.timer((function(a){e(a)}),a,c)}((function(a){e.scrollTop=(r-l)*a+l}),500,(function(){e.scrollTop=r}))}}else e.scrollTop=0}},49:function(e,a,c){var i=c(50);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,c(2).default)("data-quickpaper-51bfe835",i,!0)},50:function(e,a,c){(e.exports=c(1)(!1)).push([e.i,"\r\n    .sub {\r\n        padding-left: 1em;\r\n        text-decoration: underline;\r\n    }\r\n",""])}}]);