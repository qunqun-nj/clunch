(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{117:function(a,t,e){"use strict";e.r(t);var c=e(24),n=e(25),i={created:function(){Object(c.a)("menu-2","enhance-platform")},mounted:function(){Object(n.a)(document.getElementById("api-id"),44)}};e(49);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-9aacc372":""},[a("div",{class:"doc-view","data-quickpaper-9aacc372":""},[a("header",{id:"fixed-top","data-quickpaper-9aacc372":""},["兼容更多平台"]),a("h1",{id:"fixed-uni-app","data-quickpaper-9aacc372":""},["uni-app"]),a("p",{"data-quickpaper-9aacc372":""},["我们提供的是一个uni-app组件，引入以后需要进行注册："]),a("pre",{"q-code":"javascript","data-quickpaper-9aacc372":""},["import uiClunch from 'clunch/platform/uni-app/index.vue';↵↵export default {↵    components:{↵        uiClunch↵    }↵};"]),a("p",{"data-quickpaper-9aacc372":""},["注册完毕就可以在页面中使用了："]),a("pre",{"q-code":"html","data-quickpaper-9aacc372":""},["<ui-clunch ref='clunch' width='100vw' height='100vh-10px'></ui-clunch>"]),a("p",{class:"warn","data-quickpaper-9aacc372":""},["温馨提示：上面的宽、高属性支持常见的运算，除了数字外，还支持px、vh、vw和rpx等单位。"]),a("p",{"data-quickpaper-9aacc372":""},["最后，启动绘图："]),a("pre",{"q-code":"javascript","data-quickpaper-9aacc372":""},["this.$refs.clunch.new({↵    // 目前只支持mousemove事件↵    template:``,↵    // ......↵},seriesList);"]),a("p",{class:"warn","data-quickpaper-9aacc372":""},["温馨提示：seriesList可选，表示绘图中除了基本的内置组件外使用到的自定义组件！"])])])};t.default=i},24:function(a,t,e){"use strict";var c=e(3);t.a=function(a,t){for(var e=c.a.find(document.getElementById("root"),(function(t){return c.a.hasClass(t,a)})),n=0;n<e.length;n++)e[n].setAttribute("active","no");c.a.find(document.getElementById("root"),(function(e){return c.a.hasClass(e,[a,t])}))[0].setAttribute("active","yes")}},25:function(a,t,e){"use strict";var c=[],n=null;t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var i=document.getElementById("fixed-"+e);if(i){var r=i.offsetTop-t,o=a.scrollTop||0;!function(a,t,e){arguments.length<2&&(t=400);var i={timer:function(a,t,e){if(!a)throw new Error("Tick is required!");var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return c.push({id:n,createTime:new Date,tick:a,duration:t,callback:e}),i.start(),n},start:function(){n||(n=setInterval(i.tick,13))},tick:function(){var a,t,e,n,r,o,u,p=c;for((c=[]).length=0,t=0;t<p.length;t++)a=(r=p[t]).createTime,e=r.tick,o=r.duration,n=r.callback,!1,(u=(+new Date-a)/o)>=1&&!0,e(u=u>1?1:u),u<1&&r.id?c.push(r):n&&n(u);c.length<=0&&i.stop()},stop:function(){n&&(clearInterval(n),n=null)}},r=i.timer((function(t){a(t)}),t,e)}((function(t){a.scrollTop=(r-o)*t+o}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},49:function(a,t,e){var c=e(50);"string"==typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);(0,e(2).default)("data-quickpaper-9aacc372",c,!0)},50:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"",""])}}]);