(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,a,t){"use strict";t.r(a);var p=t(24),i=t(25),r={created:function(){Object(p.a)("menu-2","object")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};t(35);r.render=function(e){return e("div",{quickpaper:"","data-quickpaper-0e0e9613":""},[e("div",{class:"doc-view","data-quickpaper-0e0e9613":""},[e("header",{id:"fixed-top","data-quickpaper-0e0e9613":""},["绘图对象"]),e("p",{"data-quickpaper-0e0e9613":""},["此处用于列举所有可用的接口或配置项等，方便你在使用过程中查阅，如果你是新手，想学习如何使用",e("span",{class:"important","data-quickpaper-0e0e9613":""},["clunch.js"]),"的话，请移步到",e("a",{href:"#/course",target:"_blank","data-quickpaper-0e0e9613":""},["教程"]),"部分，谢谢！"]),e("h1",{id:"fixed-config","data-quickpaper-0e0e9613":""},["配置项",e("span",{class:"sub-title","data-quickpaper-0e0e9613":""},["option"])]),e("ul",{"data-quickpaper-0e0e9613":""},[e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["el"]),"：可选，页面挂载画布的结点。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["render"]),"：必输（如果template没有传递的话），表示当前图形内容，你可以在",e("a",{href:"#/api/series?fixed=top",target:"_blank","data-quickpaper-0e0e9613":""},["图形小组件"]),"部分了解更多细节。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["animation"]),"：可选，默认true，表示数据改变提供动画，如果设置为false，就会取消数据改变动画。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["time"]),"：可选，默认500，表示数据改变动画进行时长，单位ms。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["methods"]),"：格式如下：",e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["methods:{↵    doit1(){↵        // todo↵    },↵    ...↵}"]),"用于定义一些方法，姑且称之为",e("span",{class:"important","data-quickpaper-0e0e9613":""},["对象上的方法"]),"。",e("br",{"data-quickpaper-0e0e9613":""},[]),"可是，有时候方法里面可能需要借助一些",e("span",{class:"important","data-quickpaper-0e0e9613":""},["内置服务"]),"来计算：",e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},['methods:{↵    doit1:["server1Name", "server2Name", ..., function(server1, server2, ...){↵        return function(){↵            // todo↵        };↵    }]↵}']),"具体有哪些服务可以使用，请查看",e("a",{href:"#/api/service?fixed=top",target:"_blank","data-quickpaper-0e0e9613":""},["服务"]),"一节。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["data"]),":格式如下：",e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["data(){↵    return {↵        key1:value1,↵        // ...↵    };↵}"]),"用于定义一些数据，姑且称之为",e("span",{class:"important","data-quickpaper-0e0e9613":""},["对象上的数据"]),"。"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["钩子"]),":也就是",e("a",{href:"#/api/object?fixed=liefcycle",target:"_blank","data-quickpaper-0e0e9613":""},["生命周期"]),",用于提供在特定时期执行一些操作的能力。"])]),e("h2",{id:"fixed-template","data-quickpaper-0e0e9613":""},["template"]),e("p",{"data-quickpaper-0e0e9613":""},["在一般情况下，render由webpack配置的loader解析",e("span",{class:"public","data-quickpaper-0e0e9613":""},[".clunch文件"]),"自动生成，可是，如果你的项目不是基于webpack搭建的，就可以使用此属性。"]),e("p",{"data-quickpaper-0e0e9613":""},["此属性非常简单,就是把原本写在",e("span",{class:"public","data-quickpaper-0e0e9613":""},[".clunch文件"]),"中的代码以字符串的形式作为此配置项的值即可。"]),e("p",{class:"warn","data-quickpaper-0e0e9613":""},["温馨提示：template和render是两个互斥的选项，如果两个同时存在，由于render优先级更高，因此template会被忽略！"]),e("h1",{id:"fixed-liefcycle","data-quickpaper-0e0e9613":""},["生命周期"]),e("h2",{id:"fixed-what","data-quickpaper-0e0e9613":""},["有哪些钩子"]),e("p",{"data-quickpaper-0e0e9613":""},["对象创建和销毁、画布缩放、对象和页面关联和解关联、数据改变等，我们提供了以下钩子来帮助你在特定时机去触发必要的处理动作："]),e("ul",{"data-quickpaper-0e0e9613":""},[e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeCreate"]),":对象创建前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["created"]),":对象创建完毕"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeMount"]),":对象和页面关联前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["mounted"]),":对象和页面关联后"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeUnmount"]),":对象和页面解关联前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["unmounted"]),":对象和页面解关联后"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeUpdate"]),":数据改动前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["updated"]),":数据改动后"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeResize"]),":画布大小改变前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["resized"]),":画布大小改变后"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeDraw"]),":画布重绘前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["drawed"]),":画布重绘后"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeDestroy"]),":对象销毁前"]),e("li",{"data-quickpaper-0e0e9613":""},[e("span",{class:"important","data-quickpaper-0e0e9613":""},["destroyed"]),":对象销毁后"])]),e("h1",{id:"fixed-method","data-quickpaper-0e0e9613":""},["对象上的方法"]),e("h3",{id:"fixed-mount","data-quickpaper-0e0e9613":""},["$mount"]),e("p",{"data-quickpaper-0e0e9613":""},["对象配置项",e("span",{class:"public","data-quickpaper-0e0e9613":""},["option.el"]),"为非必输项，表示对象在页面中管理的区域或挂载点，如果创建的时候没有设置，那么也可以后续主动挂载："]),e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["this.$mount(el);"]),e("p",{"data-quickpaper-0e0e9613":""},["这个方法会导致在挂载前后分别触发",e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeMount"]),"和",e("span",{class:"important","data-quickpaper-0e0e9613":""},["mounted"]),"钩子。"]),e("h3",{id:"fixed-unmount","data-quickpaper-0e0e9613":""},["$unmount"]),e("p",{"data-quickpaper-0e0e9613":""},["当然，如果已经和页面关联起来了，也就是已经挂载的对象现在想解除关联，释放对某个区域的控制，只需要调用这个方法即可："]),e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["this.$unmount();"]),e("p",{"data-quickpaper-0e0e9613":""},["这个方法会导致在挂载前后分别触发",e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeUnmount"]),"和",e("span",{class:"important","data-quickpaper-0e0e9613":""},["unmounted"]),"钩子。"]),e("h3",{id:"fixed-resize","data-quickpaper-0e0e9613":""},["$resize"]),e("p",{"data-quickpaper-0e0e9613":""},["如果监听画布大小的机制失效了（比如IE浏览器），可以使用下面的方法主动更新画布大小："]),e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["this.$resize();"]),e("h3",{id:"fixed-destroy","data-quickpaper-0e0e9613":""},["$destroy"]),e("p",{"data-quickpaper-0e0e9613":""},["如果当前的绘图对象彻底失去了意义，为了释放资源，请直接调用下面方法："]),e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["this.$destroy();"]),e("p",{"data-quickpaper-0e0e9613":""},["这个方法会导致在挂载前后分别触发",e("span",{class:"important","data-quickpaper-0e0e9613":""},["beforeDestroy"]),"和",e("span",{class:"important","data-quickpaper-0e0e9613":""},["destroyed"]),"钩子。"]),e("h3",{id:"fixed-bind","data-quickpaper-0e0e9613":""},["$bind"]),e("p",{"data-quickpaper-0e0e9613":""},["虽然通过指令",e("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-0e0e9613":""},["c-on"]),"我们可以为图形小组件绑定事件，可是如果想给绘制的画布本身绑定事件，你需要这样做："]),e("pre",{"q-code":"","data-quickpaper-0e0e9613":""},["this.$bind(eventName, callback);"]),e("p",{"data-quickpaper-0e0e9613":""},["需要注意的是，无论是生命周期钩子还是这里绑定的方法，当前上下文this都是你创建的clunch对象。"])])])};a.default=r},24:function(e,a,t){"use strict";var p=t(3);a.a=function(e,a){for(var t=p.a.find(document.getElementById("root"),(function(a){return p.a.hasClass(a,e)})),i=0;i<t.length;i++)t[i].setAttribute("active","no");p.a.find(document.getElementById("root"),(function(t){return p.a.hasClass(t,[e,a])}))[0].setAttribute("active","yes")}},25:function(e,a,t){"use strict";var p=[],i=null;a.a=function(e,a){a=a||0,e=e||document.documentElement;var t,r,c=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var a=e.split("&"),t={};return a.forEach((function(e){var a=e.split("=");t[a[0]]=a[1]})),t}().fixed;if(c){var d=document.getElementById("fixed-"+c);if(d){var n=d.offsetTop-a,u=e.scrollTop||0;t=function(a){e.scrollTop=(n-u)*a+u},(r={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");a=a||400;var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:i,createTime:new Date,tick:e,duration:a,callback:t}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var e,a,t,i,c,d,n,u=p;for((p=[]).length=0,a=0;a<u.length;a++)e=(c=u[a]).createTime,t=c.tick,d=c.duration,i=c.callback,n=(+new Date-e)/d,t(n=n>1?1:n),n<1&&c.id?p.push(c):i&&i(n);p.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}}).timer((function(e){t(e)}),500,(function(){e.scrollTop=n}))}}else e.scrollTop=0}},35:function(e,a,t){var p=t(36);"string"==typeof p&&(p=[[e.i,p,""]]),p.locals&&(e.exports=p.locals);(0,t(2).default)("data-quickpaper-0e0e9613",p,!0)},36:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])}}]);