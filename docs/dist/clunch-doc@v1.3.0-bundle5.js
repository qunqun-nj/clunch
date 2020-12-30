(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(a,c,t){"use strict";t.r(c);var s=t(31),i=t(32),r={created:function(){Object(s.a)("menu-2","object")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};t(42);r.render=function(a){return a("div",{class:"doc-view","data-icrush-5fc58742":""},[a("header",{id:"fixed-top","data-icrush-5fc58742":""},["绘图对象"]),a("p",{"data-icrush-5fc58742":""},["此处用于列举所有可用的接口或配置项等，方便你在使用过程中查阅，如果你是新手，想学习如何使用",a("span",{class:"important","data-icrush-5fc58742":""},["clunch.js"]),"的话，请移步到",a("a",{href:"#/course",target:"_blank","data-icrush-5fc58742":""},["教程"]),"部分，谢谢！"]),a("h1",{id:"fixed-config","data-icrush-5fc58742":""},["配置项",a("span",{class:"sub-title","data-icrush-5fc58742":""},["option"])]),a("ul",{"data-icrush-5fc58742":""},[a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["el"]),"：可选，页面挂载画布的结点。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["render"]),"：必输（如果template没有传递的话），表示当前图形内容，你可以在",a("a",{href:"#/api/series?fixed=top",target:"_blank","data-icrush-5fc58742":""},["图形小组件"]),"部分了解更多细节。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["animation"]),"：可选，默认true，表示数据改变提供动画，如果设置为false，就会取消数据改变动画。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["time"]),"：可选，默认500，表示数据改变动画进行时长，单位ms。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["methods"]),"：格式如下：",a("pre",{"ui-code":"","data-icrush-5fc58742":""},["methods:{↵    doit1(){↵        // todo↵    },↵    ...↵}"]),"用于定义一些方法，姑且称之为",a("span",{class:"important","data-icrush-5fc58742":""},["对象上的方法"]),"。",a("br",{"data-icrush-5fc58742":""},[]),"可是，有时候方法里面可能需要借助一些",a("span",{class:"important","data-icrush-5fc58742":""},["内置服务"]),"来计算：",a("pre",{"ui-code":"","data-icrush-5fc58742":""},['methods:{↵    doit1:["server1Name", "server2Name", ..., function(server1, server2, ...){↵        return function(){↵            // todo↵        };↵    }]↵}']),"具体有哪些服务可以使用，请查看",a("a",{href:"#/api/service?fixed=top",target:"_blank","data-icrush-5fc58742":""},["服务"]),"一节。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["data"]),":格式如下：",a("pre",{"ui-code":"","data-icrush-5fc58742":""},["data(){↵    return {↵        key1:value1,↵        // ...↵    };↵}"]),"用于定义一些数据，姑且称之为",a("span",{class:"important","data-icrush-5fc58742":""},["对象上的数据"]),"。"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["钩子"]),":也就是",a("a",{href:"#/api/object?fixed=liefcycle",target:"_blank","data-icrush-5fc58742":""},["生命周期"]),",用于提供在特定时期执行一些操作的能力。"])]),a("h2",{id:"fixed-template","data-icrush-5fc58742":""},["template"]),a("p",{"data-icrush-5fc58742":""},["在一般情况下，render由webpack配置的loader解析",a("span",{class:"public","data-icrush-5fc58742":""},[".clunch文件"]),"自动生成，可是，如果你的项目不是基于webpack搭建的，就可以使用此属性。"]),a("p",{"data-icrush-5fc58742":""},["此属性非常简单,就是把原本写在",a("span",{class:"public","data-icrush-5fc58742":""},[".clunch文件"]),"中的代码以字符串的形式作为此配置项的值即可。"]),a("p",{class:"warn","data-icrush-5fc58742":""},["温馨提示：template和render是两个互斥的选项，如果两个同时存在，由于render优先级更高，因此template会被忽略！"]),a("h1",{id:"fixed-liefcycle","data-icrush-5fc58742":""},["生命周期"]),a("h2",{id:"fixed-what","data-icrush-5fc58742":""},["有哪些钩子"]),a("p",{"data-icrush-5fc58742":""},["对象创建和销毁、画布缩放、对象和页面关联和解关联、数据改变等，我们提供了以下钩子来帮助你在特定时机去触发必要的处理动作："]),a("ul",{"data-icrush-5fc58742":""},[a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeCreate"]),":对象创建前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["created"]),":对象创建完毕"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeMount"]),":对象和页面关联前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["mounted"]),":对象和页面关联后"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeUnmount"]),":对象和页面解关联前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["unmounted"]),":对象和页面解关联后"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeUpdate"]),":数据改动前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["updated"]),":数据改动后"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeResize"]),":画布大小改变前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["resized"]),":画布大小改变后"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeDraw"]),":画布重绘前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["drawed"]),":画布重绘后"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["beforeDestroy"]),":对象销毁前"]),a("li",{"data-icrush-5fc58742":""},[a("span",{class:"important","data-icrush-5fc58742":""},["destroyed"]),":对象销毁后"])]),a("h1",{id:"fixed-method","data-icrush-5fc58742":""},["对象上的方法"]),a("h3",{id:"fixed-mount","data-icrush-5fc58742":""},["$mount"]),a("p",{"data-icrush-5fc58742":""},["对象配置项",a("span",{class:"public","data-icrush-5fc58742":""},["option.el"]),"为非必输项，表示对象在页面中管理的区域或挂载点，如果创建的时候没有设置，那么也可以后续主动挂载："]),a("pre",{"ui-code":"","data-icrush-5fc58742":""},["this.$mount(el);"]),a("p",{"data-icrush-5fc58742":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-5fc58742":""},["beforeMount"]),"和",a("span",{class:"important","data-icrush-5fc58742":""},["mounted"]),"钩子。"]),a("h3",{id:"fixed-unmount","data-icrush-5fc58742":""},["$unmount"]),a("p",{"data-icrush-5fc58742":""},["当然，如果已经和页面关联起来了，也就是已经挂载的对象现在想解除关联，释放对某个区域的控制，只需要调用这个方法即可："]),a("pre",{"ui-code":"","data-icrush-5fc58742":""},["this.$unmount();"]),a("p",{"data-icrush-5fc58742":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-5fc58742":""},["beforeUnmount"]),"和",a("span",{class:"important","data-icrush-5fc58742":""},["unmounted"]),"钩子。"]),a("h3",{id:"fixed-resize","data-icrush-5fc58742":""},["$resize"]),a("p",{"data-icrush-5fc58742":""},["如果监听画布大小的机制失效了（比如IE浏览器），可以使用下面的方法主动更新画布大小："]),a("pre",{"ui-code":"","data-icrush-5fc58742":""},["this.$resize();"]),a("h3",{id:"fixed-destroy","data-icrush-5fc58742":""},["$destroy"]),a("p",{"data-icrush-5fc58742":""},["如果当前的绘图对象彻底失去了意义，为了释放资源，请直接调用下面方法："]),a("pre",{"ui-code":"","data-icrush-5fc58742":""},["this.$destroy();"]),a("p",{"data-icrush-5fc58742":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-5fc58742":""},["beforeDestroy"]),"和",a("span",{class:"important","data-icrush-5fc58742":""},["destroyed"]),"钩子。"]),a("h3",{id:"fixed-bind","data-icrush-5fc58742":""},["$bind"]),a("p",{"data-icrush-5fc58742":""},["虽然通过指令",a("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-icrush-5fc58742":""},["c-on"]),"我们可以为图形小组件绑定事件，可是如果想给绘制的画布本身绑定事件，你需要这样做："]),a("pre",{"ui-code":"","data-icrush-5fc58742":""},["this.$bind(eventName, callback);"]),a("p",{"data-icrush-5fc58742":""},["需要注意的是，无论是生命周期钩子还是这里绑定的方法，当前上下文this都是你创建的clunch对象。"])])};c.default=r},31:function(a,c,t){"use strict";var s=t(6),i=t.n(s);c.a=function(a,c){i()("."+a).attr("active","no"),i()("."+a+"."+c).attr("active","yes")}},32:function(a,c,t){"use strict";var s=t(6),i=t.n(s);c.a=function(a,c){c=c||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var c=a.split("&"),t={};return c.forEach((function(a){var c=a.split("=");t[c[0]]=c[1]})),t}().fixed;if(t){var s=i()("#fixed-"+t);if(s.length>0){var r=s[0].offsetTop-c,e=a.scrollTop||0;i.a.animation((function(c){a.scrollTop=(r-e)*c+e}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},42:function(a,c,t){var s=t(43);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,t(2).default)("data-icrush-5fc58742",s,!0)},43:function(a,c,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);