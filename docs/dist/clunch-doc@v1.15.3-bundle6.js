(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(a,t,e){"use strict";e.r(t);var p=e(24),i=e(25),r={created:function(){Object(p.a)("menu-2","object")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};e(35);r.render=function(a){return a("div",{quickpaper:"","data-quickpaper-a75fb142":""},[a("div",{class:"doc-view","data-quickpaper-a75fb142":""},[a("header",{id:"fixed-top","data-quickpaper-a75fb142":""},["绘图对象"]),a("p",{"data-quickpaper-a75fb142":""},["此处用于列举所有可用的接口或配置项等，方便你在使用过程中查阅，如果你是新手，想学习如何使用",a("span",{class:"important","data-quickpaper-a75fb142":""},["clunch.js"]),"的话，请移步到",a("a",{href:"#/course",target:"_blank","data-quickpaper-a75fb142":""},["教程"]),"部分，谢谢！"]),a("h1",{id:"fixed-config","data-quickpaper-a75fb142":""},["配置项",a("span",{class:"sub-title","data-quickpaper-a75fb142":""},["option"])]),a("ul",{"data-quickpaper-a75fb142":""},[a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["el"]),"：可选，页面挂载画布的结点。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["render"]),"：必输（如果template没有传递的话），表示当前图形内容，你可以在",a("a",{href:"#/api/series?fixed=top",target:"_blank","data-quickpaper-a75fb142":""},["图形小组件"]),"部分了解更多细节。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["animation"]),"：可选，默认true，表示数据改变提供动画，如果设置为false，就会取消数据改变动画。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["time"]),"：可选，默认500，表示数据改变动画进行时长，单位ms。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["methods"]),"：格式如下：",a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["methods:{↵    doit1(){↵        // todo↵    },↵    ...↵}"]),"用于定义一些方法，姑且称之为",a("span",{class:"important","data-quickpaper-a75fb142":""},["对象上的方法"]),"。",a("br",{"data-quickpaper-a75fb142":""},[]),"可是，有时候方法里面可能需要借助一些",a("span",{class:"important","data-quickpaper-a75fb142":""},["内置服务"]),"来计算：",a("pre",{"q-code":"","data-quickpaper-a75fb142":""},['methods:{↵    doit1:["server1Name", "server2Name", ..., function(server1, server2, ...){↵        return function(){↵            // todo↵        };↵    }]↵}']),"具体有哪些服务可以使用，请查看",a("a",{href:"#/api/service?fixed=top",target:"_blank","data-quickpaper-a75fb142":""},["服务"]),"一节。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["data"]),":格式如下：",a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["data(){↵    return {↵        key1:value1,↵        // ...↵    };↵}"]),"用于定义一些数据，姑且称之为",a("span",{class:"important","data-quickpaper-a75fb142":""},["对象上的数据"]),"。"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["钩子"]),":也就是",a("a",{href:"#/api/object?fixed=liefcycle",target:"_blank","data-quickpaper-a75fb142":""},["生命周期"]),",用于提供在特定时期执行一些操作的能力。"])]),a("h2",{id:"fixed-template","data-quickpaper-a75fb142":""},["template"]),a("p",{"data-quickpaper-a75fb142":""},["在一般情况下，render由webpack配置的loader解析",a("span",{class:"public","data-quickpaper-a75fb142":""},[".clunch文件"]),"自动生成，可是，如果你的项目不是基于webpack搭建的，就可以使用此属性。"]),a("p",{"data-quickpaper-a75fb142":""},["此属性非常简单,就是把原本写在",a("span",{class:"public","data-quickpaper-a75fb142":""},[".clunch文件"]),"中的代码以字符串的形式作为此配置项的值即可。"]),a("p",{class:"warn","data-quickpaper-a75fb142":""},["温馨提示：template和render是两个互斥的选项，如果两个同时存在，由于render优先级更高，因此template会被忽略！"]),a("h1",{id:"fixed-liefcycle","data-quickpaper-a75fb142":""},["生命周期"]),a("h2",{id:"fixed-what","data-quickpaper-a75fb142":""},["有哪些钩子"]),a("p",{"data-quickpaper-a75fb142":""},["对象创建和销毁、画布缩放、对象和页面关联和解关联、数据改变等，我们提供了以下钩子来帮助你在特定时机去触发必要的处理动作："]),a("ul",{"data-quickpaper-a75fb142":""},[a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeCreate"]),":对象创建前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["created"]),":对象创建完毕"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeMount"]),":对象和页面关联前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["mounted"]),":对象和页面关联后"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeUnmount"]),":对象和页面解关联前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["unmounted"]),":对象和页面解关联后"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeUpdate"]),":数据改动前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["updated"]),":数据改动后"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeResize"]),":画布大小改变前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["resized"]),":画布大小改变后"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeDraw"]),":画布重绘前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["drawed"]),":画布重绘后"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeDestroy"]),":对象销毁前"]),a("li",{"data-quickpaper-a75fb142":""},[a("span",{class:"important","data-quickpaper-a75fb142":""},["destroyed"]),":对象销毁后"])]),a("h1",{id:"fixed-method","data-quickpaper-a75fb142":""},["对象上的方法"]),a("h3",{id:"fixed-mount","data-quickpaper-a75fb142":""},["$mount"]),a("p",{"data-quickpaper-a75fb142":""},["对象配置项",a("span",{class:"public","data-quickpaper-a75fb142":""},["option.el"]),"为非必输项，表示对象在页面中管理的区域或挂载点，如果创建的时候没有设置，那么也可以后续主动挂载："]),a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["this.$mount(el);"]),a("p",{"data-quickpaper-a75fb142":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeMount"]),"和",a("span",{class:"important","data-quickpaper-a75fb142":""},["mounted"]),"钩子。"]),a("h3",{id:"fixed-unmount","data-quickpaper-a75fb142":""},["$unmount"]),a("p",{"data-quickpaper-a75fb142":""},["当然，如果已经和页面关联起来了，也就是已经挂载的对象现在想解除关联，释放对某个区域的控制，只需要调用这个方法即可："]),a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["this.$unmount();"]),a("p",{"data-quickpaper-a75fb142":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeUnmount"]),"和",a("span",{class:"important","data-quickpaper-a75fb142":""},["unmounted"]),"钩子。"]),a("h3",{id:"fixed-resize","data-quickpaper-a75fb142":""},["$resize"]),a("p",{"data-quickpaper-a75fb142":""},["如果监听画布大小的机制失效了（比如IE浏览器），可以使用下面的方法主动更新画布大小："]),a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["this.$resize();"]),a("h3",{id:"fixed-destroy","data-quickpaper-a75fb142":""},["$destroy"]),a("p",{"data-quickpaper-a75fb142":""},["如果当前的绘图对象彻底失去了意义，为了释放资源，请直接调用下面方法："]),a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["this.$destroy();"]),a("p",{"data-quickpaper-a75fb142":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-quickpaper-a75fb142":""},["beforeDestroy"]),"和",a("span",{class:"important","data-quickpaper-a75fb142":""},["destroyed"]),"钩子。"]),a("h3",{id:"fixed-bind","data-quickpaper-a75fb142":""},["$bind"]),a("p",{"data-quickpaper-a75fb142":""},["虽然通过指令",a("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-a75fb142":""},["c-on"]),"我们可以为图形小组件绑定事件，可是如果想给绘制的画布本身绑定事件，你需要这样做："]),a("pre",{"q-code":"","data-quickpaper-a75fb142":""},["this.$bind(eventName, callback);"]),a("p",{"data-quickpaper-a75fb142":""},["需要注意的是，无论是生命周期钩子还是这里绑定的方法，当前上下文this都是你创建的clunch对象。"])])])};t.default=r},24:function(a,t,e){"use strict";var p=e(3);t.a=function(a,t){for(var e=p.a.find(document.getElementById("root"),(function(t){return p.a.hasClass(t,a)})),i=0;i<e.length;i++)e[i].setAttribute("active","no");p.a.find(document.getElementById("root"),(function(e){return p.a.hasClass(e,[a,t])}))[0].setAttribute("active","yes")}},25:function(a,t,e){"use strict";var p=[],i=null;t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var r=document.getElementById("fixed-"+e);if(r){var c=r.offsetTop-t,n=a.scrollTop||0;!function(a,t,e){arguments.length<2&&(t=400);var r={timer:function(a,t,e){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:i,createTime:new Date,tick:a,duration:t,callback:e}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var a,t,e,i,c,n,d,u=p;for((p=[]).length=0,t=0;t<u.length;t++)a=(c=u[t]).createTime,e=c.tick,n=c.duration,i=c.callback,!1,(d=(+new Date-a)/n)>=1&&!0,e(d=d>1?1:d),d<1&&c.id?p.push(c):i&&i(d);p.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}},c=r.timer((function(t){a(t)}),t,e)}((function(t){a.scrollTop=(c-n)*t+n}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},35:function(a,t,e){var p=e(36);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,e(2).default)("data-quickpaper-a75fb142",p,!0)},36:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"",""])}}]);