(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(a,e,t){"use strict";t.r(e);var i=t(24),p=t(25),d={created:function(){Object(i.a)("menu-2","directive")},mounted:function(){Object(p.a)(document.getElementById("api-id"),44)}};t(41);d.render=function(a){return a("div",{quickpaper:"","data-quickpaper-d27fb912":""},[a("div",{class:"doc-view","data-quickpaper-d27fb912":""},[a("header",{id:"fixed-top","data-quickpaper-d27fb912":""},["指令"]),a("h2",{id:"fixed-expression","data-quickpaper-d27fb912":""},["表达式"]),a("p",{"data-quickpaper-d27fb912":""},["表达式",a("span",{class:"public","data-quickpaper-d27fb912":""},["expression"]),"在接下来的文档中会多次提及，因此在开头进行说明。"]),a("p",{"data-quickpaper-d27fb912":""},["一个合法的表达式几乎和普通的",a("span",{class:"important","data-quickpaper-d27fb912":""},["JS表达式"]),"差不多，我们来列举几个正确的写法："]),a("pre",{"q-code":"","data-quickpaper-d27fb912":""},['key + 10↵dataList[0].value[keyName]↵!flag↵!flag[key][0].flag == 7 || ( flag.demo > 10 || key )↵"id" + index↵help[key] ? "red" : "white"']),a("h1",{id:"fixed-c-on","data-quickpaper-d27fb912":""},["事件",a("span",{class:"sub-title","data-quickpaper-d27fb912":""},["c-on"])]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo c-on:eventName@regionNamee='doit' />"]),a("p",{"data-quickpaper-d27fb912":""},["对于任意一个组件，如果希望在此组件的某个区域上绑定交换事件，可以用上面的c-on指令，其中",a("span",{class:"public","data-quickpaper-d27fb912":""},["eventName"]),"是必输的，表示事件类型，支持如下几种："]),a("ul",{"data-quickpaper-d27fb912":""},[a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["click"]),":点击"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["dblclick"]),":双击"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["mousemove"]),":鼠标移动"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["mousedown"]),":鼠标按下"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["mouseup"]),":鼠标放开"])]),a("p",{"data-quickpaper-d27fb912":""},["此外，",a("span",{class:"public","data-quickpaper-d27fb912":""},["regionName"]),"是可选的，无特殊说明，可以直接省略，表示触发默认区域（具体的请在",a("a",{href:"#/api/series?fixed=create",target:"_blank","data-quickpaper-d27fb912":""},["自定义组件"]),"中查看），或者填写特定的区域名称。"]),a("p",{"data-quickpaper-d27fb912":""},["对于上面的doit方法，有一个形参，格式如下："]),a("pre",{"q-code":"","data-quickpaper-d27fb912":""},['{series: "arc", region: "default", subRegion: "default", attr: {…}, left: 635, …}↵attr: {fill-color: "black", dash: Array(0), type: "fill", …}↵left: 635↵region: "default"↵series: "arc"↵subRegion: "default"↵top: 305↵data:"来自子区域的第二个参数data"']),a("ul",{"data-quickpaper-d27fb912":""},[a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["attr"]),"：当前标签的属性；"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["left、top"]),"：触发事件的位置，注意是相对画布左上角的；"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["region"]),"：当前交互的区域名称；"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["series"]),"：组件名称；"]),a("li",{"data-quickpaper-d27fb912":""},[a("span",{class:"important","data-quickpaper-d27fb912":""},["subRegion"]),"：子区域名称。"])]),a("h1",{id:"fixed-c-for","data-quickpaper-d27fb912":""},["迭代",a("span",{class:"sub-title","data-quickpaper-d27fb912":""},["c-for"])]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo c-for='(value, key) in dataList' />"]),a("p",{"data-quickpaper-d27fb912":""},["或"]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo c-for='value in dataList' />"]),a("p",{"data-quickpaper-d27fb912":""},["其中",a("span",{class:"public","data-quickpaper-d27fb912":""},["dataList"]),"可以是",a("span",{class:"important","data-quickpaper-d27fb912":""},["数组"]),"或键值对形式的",a("span",{class:"important","data-quickpaper-d27fb912":""},["JSON"]),"。"]),a("h1",{id:"fixed-c-if","data-quickpaper-d27fb912":""},["是否显示",a("span",{class:"sub-title","data-quickpaper-d27fb912":""},["c-if"])]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo c-if='expression' />"]),a("p",{"data-quickpaper-d27fb912":""},[a("span",{class:"public","data-quickpaper-d27fb912":""},["expression"]),"应该是一个合法的表达式，如果为true表示显示，否则隐藏此图形组件。"]),a("h1",{id:"fixed-c-bind","data-quickpaper-d27fb912":""},["数据绑定",a("span",{class:"sub-title","data-quickpaper-d27fb912":""},["c-bind"])]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo c-bind:attrName='expression' />"]),a("p",{"data-quickpaper-d27fb912":""},[a("span",{class:"public","data-quickpaper-d27fb912":""},["attrName"]),"表示属性名称，",a("span",{class:"public","data-quickpaper-d27fb912":""},["expression"]),"是一个表达式，数据绑定可以自动监听数据改变来更新组件。"]),a("p",{"data-quickpaper-d27fb912":""},["此外，由于此指令使用较多，你可以使用简写形式："]),a("pre",{"q-code":"html","data-quickpaper-d27fb912":""},["<ui-demo :attrName='expression' />"])])])};e.default=d},24:function(a,e,t){"use strict";var i=t(3);e.a=function(a,e){for(var t=i.a.find(document.getElementById("root"),(function(e){return i.a.hasClass(e,a)})),p=0;p<t.length;p++)t[p].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,[a,e])}))[0].setAttribute("active","yes")}},25:function(a,e,t){"use strict";var i=[],p=null;e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),t={};return e.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}().fixed;if(t){var d=document.getElementById("fixed-"+t);if(d){var r=d.offsetTop-e,c=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var d={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var p=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:p,createTime:new Date,tick:a,duration:e,callback:t}),d.start(),p},start:function(){p||(p=setInterval(d.tick,13))},tick:function(){var a,e,t,p,r,c,n,s=i;for((i=[]).length=0,e=0;e<s.length;e++)a=(r=s[e]).createTime,t=r.tick,c=r.duration,p=r.callback,!1,(n=(+new Date-a)/c)>=1&&!0,t(n=n>1?1:n),n<1&&r.id?i.push(r):p&&p(n);i.length<=0&&d.stop()},stop:function(){p&&(clearInterval(p),p=null)}},r=d.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(r-c)*e+c}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},41:function(a,e,t){var i=t(42);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,t(2).default)("data-quickpaper-d27fb912",i,!0)},42:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);