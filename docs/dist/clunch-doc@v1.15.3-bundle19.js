(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,a,t){"use strict";t.r(a);var d=t(24),i=t(25),r=t(26),n=t.n(r);n.a.series("ui-rects",["number","json",function(e,a){return{attrs:{x:e(0)(!0),y:e(0)(!0),width:e(700)(!0),height:e(360)(!0),data:a(),ruler:a()},region:{default:function(e,a){for(var t=(a.width-100)/a.data.length,d=0;d<a.data.length;d++)e("no-"+d,{value:a.data[d]}).fillRect(a.x+50+t*(d+.1),a.y+a.height-50,.8*t,-.005*a.data[d]*(a.height-100))}},link:function(e,a){for(var t=(a.width-100)/a.data.length,d=0;d<a.data.length;d++)e.config("fillStyle","rgba(220, 220, 220, 0.8)").fillRect(a.x+50+t*(d+.1),a.y+50,.8*t,a.height-100),e.config("fillStyle","red").fillRect(a.x+50+t*(d+.1),a.y+a.height-50,.8*t,-.005*a.data[d]*(a.height-100));this.$reuseSeriesLink("ruler",{attr:{x:a.x+50,y:a.y+a.height-50,length:a.width-100,value:a.ruler,"value-position":"between"}})}}}]);var p=[{name:"ui-rects",attrs:{":data":"values",ruler:'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',"c-on:click":"doit"},children:[]}],c={created:function(){Object(d.a)("menu-2","series")},mounted:function(){Object(i.a)(document.getElementById("course-id"),44),new n.a({el:document.getElementById("canvas-5"),render:p,data:function(){return{values:[120,200,150,80,70,110,130]}},methods:{doit:function(e){console.log(e)}}})}};t(61);c.render=function(e){return e("div",{quickpaper:"","data-quickpaper-6de16d46":""},[e("div",{class:"doc-view","data-quickpaper-6de16d46":""},[e("header",{id:"fixed-top","data-quickpaper-6de16d46":""},["自定义图形组件"]),e("p",{"data-quickpaper-6de16d46":""},["虽然通过",e("a",{href:"#/api/series-list?fixed=top",target:"_blank","data-quickpaper-6de16d46":""},["内置组件"]),"也可以绘制各种图表，可是如果我们希望拥有带着一定业务场景的组件，被我们很方便的复用，那就必须学习如何自定义组件了。"]),e("h1",{id:"fixed-what","data-quickpaper-6de16d46":""},["需求分析"]),e("p",{"data-quickpaper-6de16d46":""},["为了方便说明，我们就决定对",e("a",{href:"#/course/event?fixed=top",target:"_blank","data-quickpaper-6de16d46":""},["上一节：如何添加图形交互事件"]),"中柱状图进行封装。"]),e("p",{"data-quickpaper-6de16d46":""},["我们定义这个图形的名称为：",e("span",{class:"public","data-quickpaper-6de16d46":""},["ui-rects"]),"，图形可以通过",e("a",{href:"#/api/directive?fixed=c-on",target:"_blank",class:"link","data-quickpaper-6de16d46":""},["c-on"]),"添加交互，并且回调数据里面包含了有用的信息（由于当前组件是单一的，我们需要知道点击的具体小矩形的信息）。"]),e("h1",{id:"fixed-define","data-quickpaper-6de16d46":""},["定义组件"]),e("h3",{id:"fixed-define-frame","data-quickpaper-6de16d46":""},["基本结构"]),e("p",{"data-quickpaper-6de16d46":""},["下面是本次定义组件部分代码的主体结构："]),e("pre",{"q-code":"","data-quickpaper-6de16d46":""},["import Clunch from 'clunch';↵Clunch.series('ui-rects', [\"number\", \"json\", function ($number, $json) {↵    return {↵        // 定义属性↵        attrs: {},↵        // 定义区域或子区域↵        region: {↵            default: function (render, attr) {}↵        },↵        // 具体的绘制方法↵        link(painter, attr) {}↵    };↵}]);"]),e("p",{"data-quickpaper-6de16d46":""},["主要分三个配置项："]),e("ul",{"data-quickpaper-6de16d46":""},[e("li",{"data-quickpaper-6de16d46":""},[e("span",{class:"important","data-quickpaper-6de16d46":""},["attrs"]),"：规定使用此组件的时候应该配置哪些属性。"]),e("li",{"data-quickpaper-6de16d46":""},[e("span",{class:"important","data-quickpaper-6de16d46":""},["link"]),"：根据属性绘图，也就是这里规定了你的组件长什么样子。"]),e("li",{"data-quickpaper-6de16d46":""},[e("span",{class:"important","data-quickpaper-6de16d46":""},["region"]),"：用于管理哪些区域被标记了，只有标记的区域才可以有交互。"])]),e("p",{"data-quickpaper-6de16d46":""},["接下来，我们分别说明这三个地方的代码。"]),e("h3",{id:"fixed-define-attrs","data-quickpaper-6de16d46":""},["定义属性"]),e("pre",{"q-code":"","data-quickpaper-6de16d46":""},["attrs: {↵    x: $number(0)(true),↵    y: $number(0)(true),↵    width: $number(700)(true),↵    height: $number(360)(true),↵    data: $json(),↵    ruler: $json()↵}"]),e("p",{"data-quickpaper-6de16d46":""},[e("span",{class:"public","data-quickpaper-6de16d46":""},["x"]),"、",e("span",{class:"public","data-quickpaper-6de16d46":""},["y"]),"分别表示图形左上角的位置，",e("span",{class:"public","data-quickpaper-6de16d46":""},["width"]),"、",e("span",{class:"public","data-quickpaper-6de16d46":""},["height"]),"表示图形的大小，都参与动画（参与动画的意思是，数据改变后会一点点改变，不会突然改变）且都有默认值，因此非必输。"]),e("p",{"data-quickpaper-6de16d46":""},[e("span",{class:"public","data-quickpaper-6de16d46":""},["data"]),"和",e("span",{class:"public","data-quickpaper-6de16d46":""},["ruler"]),"分别表示矩形数据和刻度尺的数据，必输。"]),e("h3",{id:"fixed-define-link","data-quickpaper-6de16d46":""},["具体的绘制方法"]),e("pre",{"q-code":"","data-quickpaper-6de16d46":""},["link(painter, attr) {↵↵    // 得出每个小条目的宽(包括了两边的留白)↵    let disWidth = (attr.width - 100) / attr.data.length;↵↵    for (let i = 0; i < attr.data.length; i++) {↵↵        // 背景灰色↵        painter.config('fillStyle', 'rgba(220, 220, 220, 0.8)').fillRect(↵            attr.x + 50 + disWidth * (i + 0.1), attr.y + 50,↵            disWidth * 0.8, attr.height - 100↵        );↵↵        // 值红色↵        painter.config('fillStyle', 'red').fillRect(↵            attr.x + 50 + disWidth * (i + 0.1), attr.y + attr.height - 50,↵            disWidth * 0.8, -0.005 * attr.data[i] * (attr.height - 100)↵        );↵↵    }↵↵    // 横坐标↵    this.$reuseSeriesLink('ruler', {↵        attr: {↵            x: attr.x + 50,↵            y: attr.y + attr.height - 50,↵            length: attr.width - 100,↵            value: attr.ruler,↵            \"value-position\": 'between'↵        }↵    });↵↵}"]),e("p",{"data-quickpaper-6de16d46":""},["简单的看就是使用",e("a",{href:"#/api/painter?fixed=top",target:"_blank","data-quickpaper-6de16d46":""},["painter"]),"这只画笔来绘制图形。除此之外，你还可以复用已有的组件，使用",e("a",{href:"#/api/series-reuse?fixed=top",target:"_blank","data-quickpaper-6de16d46":""},["this.$reuseSeriesLink"]),"方法来实现复用。"]),e("h3",{id:"fixed-define-region","data-quickpaper-6de16d46":""},["定义区域或子区域"]),e("p",{"data-quickpaper-6de16d46":""},["最后是区域，区域其实也是绘制，只不过是通过绘图的方式记录区域，还是看看代码："]),e("pre",{"q-code":"","data-quickpaper-6de16d46":""},['region: {↵    default: function (render, attr) {↵↵        // 得出每个小条目的宽(包括了两边的留白)↵        let disWidth = (attr.width - 100) / attr.data.length;↵↵        for (let i = 0; i < attr.data.length; i++) {↵↵            // 定义子区域↵            render("no-"+i,{↵                // 记录当前的值↵                value:attr.data[i]↵            })↵↵            // 绘制子区域↵            .fillRect(↵                attr.x + 50 + disWidth * (i + 0.1), attr.y + attr.height - 50,↵                disWidth * 0.8, -0.005 * attr.data[i] * (attr.height - 100)↵            );↵↵        }↵    }↵}']),e("p",{"data-quickpaper-6de16d46":""},["因为有很多个条目，我们给每个小条目起了个名字：",e("span",{class:"public","data-quickpaper-6de16d46":""},['"no"+i']),"，并且把数据保存起来了，在接下来使用中你可以对比看一下打印结果。"]),e("h1",{id:"fixed-use","data-quickpaper-6de16d46":""},["使用组件"]),e("p",{"data-quickpaper-6de16d46":""},["还是先看看",e("span",{class:"important","data-quickpaper-6de16d46":""},[".clunch文件"]),"的内容（当前，别忘了引入刚刚定义的组件）："]),e("p",{"data-quickpaper-6de16d46":""},["其余的和之前的一样，下面是运行效果："]),e("pre",{"q-code":"html","data-quickpaper-6de16d46":""},['<ui-rects :data=\'values\' ruler=\'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]\' c-on:click=\'doit\' />']),e("h2",{"data-quickpaper-6de16d46":""},["运行效果"]),e("div",{id:"canvas-5",style:"height:360px;","data-quickpaper-6de16d46":""},[]),e("p",{"data-quickpaper-6de16d46":""},["打开控制台，点击的时候就会打印你点击结点的信息："]),e("pre",{"q-code":"","data-quickpaper-6de16d46":""},['attr: {x: 0, y: 0, width: 700, height: 360, data: Array(7), …}↵data: {value: 120}↵id: "0"↵left: 105↵region: "default"↵series: "ui-rects"↵subRegion: "no-0"↵top: 182↵__proto__: Object']),e("p",{"data-quickpaper-6de16d46":""},["我们点击的是第一个组件，可以看见子组件名称是",e("span",{class:"public","data-quickpaper-6de16d46":""},["no-0"]),"，没有问题，记录的数据data是",e("span",{class:"public","data-quickpaper-6de16d46":""},["{value:120}"]),"，也没有问题。我们推荐你打开控制台，点击不同的地方看看打印的结果。"]),e("h1",{id:"fixed-series-end","data-quickpaper-6de16d46":""},["小结"]),e("p",{"data-quickpaper-6de16d46":""},["到这里，你就学会了如何自定义组件、如何复用组件、区域如何定义、定义区域的时候如何传递数据给事件回调和自定义组件的属性如何配置等基本使用。"]),e("div",{class:"bottom-link","data-quickpaper-6de16d46":""},[e("a",{href:"#/course/event?fixed=top",target:"_blank",class:"left","data-quickpaper-6de16d46":""},["上一节：如何添加图形交互事件"])])])])};a.default=c},24:function(e,a,t){"use strict";var d=t(3);a.a=function(e,a){for(var t=d.a.find(document.getElementById("root"),(function(a){return d.a.hasClass(a,e)})),i=0;i<t.length;i++)t[i].setAttribute("active","no");d.a.find(document.getElementById("root"),(function(t){return d.a.hasClass(t,[e,a])}))[0].setAttribute("active","yes")}},25:function(e,a,t){"use strict";var d=[],i=null;a.a=function(e,a){a=a||0,e=e||document.documentElement;var t=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var a=e.split("&"),t={};return a.forEach((function(e){var a=e.split("=");t[a[0]]=a[1]})),t}().fixed;if(t){var r=document.getElementById("fixed-"+t);if(r){var n=r.offsetTop-a,p=e.scrollTop||0;!function(e,a,t){arguments.length<2&&(a=400);var r={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return d.push({id:i,createTime:new Date,tick:e,duration:a,callback:t}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var e,a,t,i,n,p,c,u=d;for((d=[]).length=0,a=0;a<u.length;a++)e=(n=u[a]).createTime,t=n.tick,p=n.duration,i=n.callback,!1,(c=(+new Date-e)/p)>=1&&!0,t(c=c>1?1:c),c<1&&n.id?d.push(n):i&&i(c);d.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}},n=r.timer((function(a){e(a)}),a,t)}((function(a){e.scrollTop=(n-p)*a+p}),500,(function(){e.scrollTop=n}))}}else e.scrollTop=0;document.getElementById("root-view").scrollTop=0}},61:function(e,a,t){var d=t(62);"string"==typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);(0,t(2).default)("data-quickpaper-6de16d46",d,!0)},62:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])}}]);