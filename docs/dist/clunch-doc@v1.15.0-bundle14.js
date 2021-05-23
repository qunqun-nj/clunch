(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(a,t,e){"use strict";e.r(t);var i=e(24),r=e(25),n={created:function(){Object(i.a)("menu-2","author")},mounted:function(){Object(r.a)(document.getElementById("course-id"),44)}};e(53);n.render=function(a){return a("div",{quickpaper:"","data-quickpaper-9a818578":""},[a("div",{class:"doc-view","data-quickpaper-9a818578":""},[a("header",{id:"fixed-top","data-quickpaper-9a818578":""},["关于我们"]),a("p",{"data-quickpaper-9a818578":""},["此项目始于2018年，经过多个版本迭代，由最初的图形库",a("a",{href:"https://hai2007.gitee.io/image2d/",target:"_blank","data-quickpaper-9a818578":""},["image2D"]),"到如今的图形框架，全部由",a("a",{href:"https://hai2007.gitee.io/sweethome/",target:"_blank","data-quickpaper-9a818578":""},["你好2007"]),"设计、开发和维护。"]),a("h1",{id:"fixed-projects","data-quickpaper-9a818578":""},["当前在做什么？"]),a("p",{"data-quickpaper-9a818578":""},["目前的主要任务包括相关产品的开发和维护，文档编辑，问题修复等。"]),a("p",{"data-quickpaper-9a818578":""},["经过前置多个版本的迭代，以前单一的库设计方案虽然解决了难的问题，但对于日常开发依旧是非常繁琐的，因此，此版本主要是在前置成果上解决麻烦的问题，让绘图速度更快。"]),a("p",{"data-quickpaper-9a818578":""},["虽然目前主体已经稳定，但是由于是全新的设计，根据实际反馈迭代优化框架便是当前最重要的任务。"]),a("h1",{id:"fixed-new-task","data-quickpaper-9a818578":""},["新任务如何产生？"]),a("p",{"data-quickpaper-9a818578":""},["主要来自",a("a",{href:"https://github.com/hai2007/clunch/issues",target:"_blank","data-quickpaper-9a818578":""},["issue"]),"和前端本身的发展（可能一些新的技术等原因，催促一些改变是有意义的），如果你对未来版本有什么期望，也可以告诉我们。"]),a("h1",{id:"fixed-join-us","data-quickpaper-9a818578":""},["加入我们"]),a("p",{"data-quickpaper-9a818578":""},["你可以通过提",a("a",{href:"https://github.com/hai2007/clunch/issues",target:"_blank","data-quickpaper-9a818578":""},["issue"]),"来给我们提意见，或者，你希望直接参与项目的开发维护？"]),a("p",{"data-quickpaper-9a818578":""},["同时，也非常欢迎你加入我们，和我们一起维护。不过，加入我们并不意味着就是代码的维护，你可以选择下列一项或多项进行参与："]),a("ul",{"data-quickpaper-9a818578":""},[a("li",{"data-quickpaper-9a818578":""},[a("span",{class:"important","data-quickpaper-9a818578":""},["代码维护"]),"：由于新功能或一些BUG的出现，对代码进行维护和升级。"]),a("li",{"data-quickpaper-9a818578":""},[a("span",{class:"important","data-quickpaper-9a818578":""},["文档编辑"]),"：主要是接口文档和教程需要编辑，这很重要。"]),a("li",{"data-quickpaper-9a818578":""},[a("span",{class:"important","data-quickpaper-9a818578":""},["用例开发和测试"]),"：测试是为了保证代码的正确，用例是为了扩展或探索业务场景。"]),a("li",{"data-quickpaper-9a818578":""},[a("span",{class:"important","data-quickpaper-9a818578":""},["参与讨论"]),"：主要是讨论clunch.js未来如何发展，改造的方向等。"])]),a("div",{class:"bottom-link","data-quickpaper-9a818578":""},[a("a",{class:"left","data-quickpaper-9a818578":""},[]),a("a",{href:"#/course/install?fixed=top",target:"_blank",class:"right","data-quickpaper-9a818578":""},["下一节：基本说明"])])])])};t.default=n},24:function(a,t,e){"use strict";var i=e(3);t.a=function(a,t){for(var e=i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,a)})),r=0;r<e.length;r++)e[r].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(e){return i.a.hasClass(e,[a,t])}))[0].setAttribute("active","yes")}},25:function(a,t,e){"use strict";var i=[],r=null;t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var n=document.getElementById("fixed-"+e);if(n){var c=n.offsetTop-t,p=a.scrollTop||0;!function(a,t,e){arguments.length<2&&(t=400);var n={timer:function(a,t,e){if(!a)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:r,createTime:new Date,tick:a,duration:t,callback:e}),n.start(),r},start:function(){r||(r=setInterval(n.tick,13))},tick:function(){var a,t,e,r,c,p,u,o=i;for((i=[]).length=0,t=0;t<o.length;t++)a=(c=o[t]).createTime,e=c.tick,p=c.duration,r=c.callback,!1,(u=(+new Date-a)/p)>=1&&!0,e(u=u>1?1:u),u<1&&c.id?i.push(c):r&&r(u);i.length<=0&&n.stop()},stop:function(){r&&(clearInterval(r),r=null)}},c=n.timer((function(t){a(t)}),t,e)}((function(t){a.scrollTop=(c-p)*t+p}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},53:function(a,t,e){var i=e(54);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,e(2).default)("data-quickpaper-9a818578",i,!0)},54:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"",""])}}]);