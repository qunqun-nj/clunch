(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{31:function(a,t,s){"use strict";var i=s(6),r=s.n(i);t.a=function(a,t){r()("."+a).attr("active","no"),r()("."+a+"."+t).attr("active","yes")}},32:function(a,t,s){"use strict";var i=s(6),r=s.n(i);t.a=function(a,t){t=t||0,a=a||document.documentElement;var s=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),s={};return t.forEach((function(a){var t=a.split("=");s[t[0]]=t[1]})),s}().fixed;if(s){var i=r()("#fixed-"+s);if(i.length>0){var b=i[0].offsetTop-t,c=a.scrollTop||0;r.a.animation((function(t){a.scrollTop=(b-c)*t+c}),500,(function(){a.scrollTop=b}))}}else a.scrollTop=0}},42:function(a,t,s){var i=s(43);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,s(2).default)("data-icrush-b3a6b7aa",i,!0)},43:function(a,t,s){(a.exports=s(1)(!1)).push([a.i,"",""])},99:function(a,t,s){"use strict";s.r(t);var i=s(31),r=s(32),b={created:function(){Object(i.a)("menu-2","object")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};s(42);b.render=function(a){return a("div",{class:"doc-view","data-icrush-b3a6b7aa":""},[a("header",{id:"fixed-top","data-icrush-b3a6b7aa":""},["绘图对象"]),a("p",{"data-icrush-b3a6b7aa":""},["此处用于列举所有可用的接口或配置项等，方便你在使用过程中查阅，如果你是新手，想学习如何使用",a("span",{class:"important","data-icrush-b3a6b7aa":""},["clunch.js"]),"的话，请移步到",a("a",{href:"#/course",target:"_blank","data-icrush-b3a6b7aa":""},["教程"]),"部分，谢谢！"]),a("h1",{id:"fixed-config","data-icrush-b3a6b7aa":""},["配置项",a("span",{class:"sub-title","data-icrush-b3a6b7aa":""},["option"])]),a("ul",{"data-icrush-b3a6b7aa":""},[a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["el"]),"：可选，页面挂载画布的结点。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["render"]),"：必输（如果template没有传递的话），表示当前图形内容，你可以在",a("a",{href:"#/api/series?fixed=top",target:"_blank","data-icrush-b3a6b7aa":""},["图形小组件"]),"部分了解更多细节。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["animation"]),"：可选，默认true，表示数据改变提供动画，如果设置为false，就会取消数据改变动画。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["time"]),"：可选，默认500，表示数据改变动画进行时长，单位ms。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["methods"]),"：格式如下：",a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["methods:{↵    doit1(){↵        // todo↵    },↵    ...↵}"]),"用于定义一些方法，姑且称之为",a("span",{class:"important","data-icrush-b3a6b7aa":""},["对象上的方法"]),"。",a("br",{"data-icrush-b3a6b7aa":""},[]),"可是，有时候方法里面可能需要借助一些",a("span",{class:"important","data-icrush-b3a6b7aa":""},["内置服务"]),"来计算：",a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},['methods:{↵    doit1:["server1Name", "server2Name", ..., function(server1, server2, ...){↵        return function(){↵            // todo↵        };↵    }]↵}']),"具体有哪些服务可以使用，请查看",a("a",{href:"#/api/service?fixed=top",target:"_blank","data-icrush-b3a6b7aa":""},["服务"]),"一节。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["data"]),":格式如下：",a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["data(){↵    return {↵        key1:value1,↵        // ...↵    };↵}"]),"用于定义一些数据，姑且称之为",a("span",{class:"important","data-icrush-b3a6b7aa":""},["对象上的数据"]),"。"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["钩子"]),":也就是",a("a",{href:"#/api/object?fixed=liefcycle",target:"_blank","data-icrush-b3a6b7aa":""},["生命周期"]),",用于提供在特定时期执行一些操作的能力。"])]),a("h2",{id:"fixed-template","data-icrush-b3a6b7aa":""},["template"]),a("p",{"data-icrush-b3a6b7aa":""},["在一般情况下，render由webpack配置的loader解析",a("span",{class:"public","data-icrush-b3a6b7aa":""},[".clunch文件"]),"自动生成，可是，如果你的项目不是基于webpack搭建的，就可以使用此属性。"]),a("p",{"data-icrush-b3a6b7aa":""},["此属性非常简单,就是把原本写在",a("span",{class:"public","data-icrush-b3a6b7aa":""},[".clunch文件"]),"中的代码以字符串的形式作为此配置项的值即可。"]),a("p",{class:"warn","data-icrush-b3a6b7aa":""},["温馨提示：template和render是两个互斥的选项，如果两个同时存在，由于render优先级更高，因此template会被忽略！"]),a("h1",{id:"fixed-liefcycle","data-icrush-b3a6b7aa":""},["生命周期"]),a("h2",{id:"fixed-what","data-icrush-b3a6b7aa":""},["有哪些钩子"]),a("p",{"data-icrush-b3a6b7aa":""},["对象创建和销毁、画布缩放、对象和页面关联和解关联、数据改变等，我们提供了以下钩子来帮助你在特定时机去触发必要的处理动作："]),a("ul",{"data-icrush-b3a6b7aa":""},[a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeCreate"]),":对象创建前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["created"]),":对象创建完毕"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeMount"]),":对象和页面关联前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["mounted"]),":对象和页面关联后"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeUnmount"]),":对象和页面解关联前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["unmounted"]),":对象和页面解关联后"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeUpdate"]),":数据改动前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["updated"]),":数据改动后"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeResize"]),":画布大小改变前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["resized"]),":画布大小改变后"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeDraw"]),":画布重绘前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["drawed"]),":画布重绘后"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeDestroy"]),":对象销毁前"]),a("li",{"data-icrush-b3a6b7aa":""},[a("span",{class:"important","data-icrush-b3a6b7aa":""},["destroyed"]),":对象销毁后"])]),a("h1",{id:"fixed-method","data-icrush-b3a6b7aa":""},["对象上的方法"]),a("h3",{id:"fixed-mount","data-icrush-b3a6b7aa":""},["$mount"]),a("p",{"data-icrush-b3a6b7aa":""},["对象配置项",a("span",{class:"public","data-icrush-b3a6b7aa":""},["option.el"]),"为非必输项，表示对象在页面中管理的区域或挂载点，如果创建的时候没有设置，那么也可以后续主动挂载："]),a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["this.$mount(el);"]),a("p",{"data-icrush-b3a6b7aa":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeMount"]),"和",a("span",{class:"important","data-icrush-b3a6b7aa":""},["mounted"]),"钩子。"]),a("h3",{id:"fixed-unmount","data-icrush-b3a6b7aa":""},["$unmount"]),a("p",{"data-icrush-b3a6b7aa":""},["当然，如果已经和页面关联起来了，也就是已经挂载的对象现在想解除关联，释放对某个区域的控制，只需要调用这个方法即可："]),a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["this.$unmount();"]),a("p",{"data-icrush-b3a6b7aa":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeUnmount"]),"和",a("span",{class:"important","data-icrush-b3a6b7aa":""},["unmounted"]),"钩子。"]),a("h3",{id:"fixed-resize","data-icrush-b3a6b7aa":""},["$resize"]),a("p",{"data-icrush-b3a6b7aa":""},["如果监听画布大小的机制失效了（比如IE浏览器），可以使用下面的方法主动更新画布大小："]),a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["this.$resize();"]),a("h3",{id:"fixed-destroy","data-icrush-b3a6b7aa":""},["$destroy"]),a("p",{"data-icrush-b3a6b7aa":""},["如果当前的绘图对象彻底失去了意义，为了释放资源，请直接调用下面方法："]),a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["this.$destroy();"]),a("p",{"data-icrush-b3a6b7aa":""},["这个方法会导致在挂载前后分别触发",a("span",{class:"important","data-icrush-b3a6b7aa":""},["beforeDestroy"]),"和",a("span",{class:"important","data-icrush-b3a6b7aa":""},["destroyed"]),"钩子。"]),a("h3",{id:"fixed-bind","data-icrush-b3a6b7aa":""},["$bind"]),a("p",{"data-icrush-b3a6b7aa":""},["虽然通过指令",a("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-icrush-b3a6b7aa":""},["c-on"]),"我们可以为图形小组件绑定事件，可是如果想给绘制的画布本身绑定事件，你需要这样做："]),a("pre",{"ui-code":"","data-icrush-b3a6b7aa":""},["this.$bind(eventName, callback);"]),a("p",{"data-icrush-b3a6b7aa":""},["需要注意的是，无论是生命周期钩子还是这里绑定的方法，当前上下文this都是你创建的clunch对象。"])])};t.default=b}}]);