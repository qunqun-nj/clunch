(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{31:function(a,c,i){"use strict";var s=i(6),t=i.n(s);c.a=function(a,c){t()("."+a).attr("active","no"),t()("."+a+"."+c).attr("active","yes")}},32:function(a,c,i){"use strict";var s=i(6),t=i.n(s);c.a=function(a,c){c=c||0,a=a||document.documentElement;var i=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var c=a.split("&"),i={};return c.forEach((function(a){var c=a.split("=");i[c[0]]=c[1]})),i}().fixed;if(i){var s=t()("#fixed-"+i);if(s.length>0){var r=s[0].offsetTop-c,e=a.scrollTop||0;t.a.animation((function(c){a.scrollTop=(r-e)*c+e}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},47:function(a,c,i){var s=i(48);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,i(2).default)("data-icrush-33acc347",s,!0)},48:function(a,c,i){(a.exports=i(1)(!1)).push([a.i,"",""])},68:function(a,c,i){"use strict";i.r(c);var s=i(31),t=i(32),r={created:function(){Object(s.a)("menu-2","directive")},mounted:function(){Object(t.a)(document.getElementById("api-id"),44)}};i(47);r.render=function(a){return a("div",{class:"doc-view","data-icrush-33acc347":""},[a("header",{id:"fixed-top","data-icrush-33acc347":""},["指令"]),a("h2",{id:"fixed-expression","data-icrush-33acc347":""},["表达式"]),a("p",{"data-icrush-33acc347":""},["表达式",a("span",{class:"public","data-icrush-33acc347":""},["expression"]),"在接下来的文档中会多次提及，因此在开头进行说明。"]),a("p",{"data-icrush-33acc347":""},["一个合法的表达式几乎和普通的",a("span",{class:"important","data-icrush-33acc347":""},["JS表达式"]),"差不多，我们来列举几个正确的写法："]),a("pre",{"ui-code":"","data-icrush-33acc347":""},['key + 10↵dataList[0].value[keyName]↵!flag↵!flag[key][0].flag == 7 || ( flag.demo > 10 || key )↵"id" + index↵help[key] ? "red" : "white"']),a("h1",{id:"fixed-c-on","data-icrush-33acc347":""},["事件",a("span",{class:"sub-title","data-icrush-33acc347":""},["c-on"])]),a("pre",{"ui-code":"","data-icrush-33acc347":""},["<ui-demo c-on:eventName@regionNamee='doit' />"]),a("p",{"data-icrush-33acc347":""},["对于任意一个组件，如果希望在此组件的某个区域上绑定交换事件，可以用上面的c-on指令，其中",a("span",{class:"public","data-icrush-33acc347":""},["eventName"]),"是必输的，表示事件类型，支持如下几种："]),a("ul",{"data-icrush-33acc347":""},[a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["click"]),":点击"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["dblclick"]),":双击"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["mousemove"]),":鼠标移动"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["mousedown"]),":鼠标按下"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["mouseup"]),":鼠标放开"])]),a("p",{"data-icrush-33acc347":""},["此外，",a("span",{class:"public","data-icrush-33acc347":""},["regionName"]),"是可选的，无特殊说明，可以直接省略，表示触发默认区域（具体的请在",a("a",{href:"#/api/series?fixed=create",target:"_blank","data-icrush-33acc347":""},["自定义组件"]),"中查看），或者填写特定的区域名称。"]),a("p",{"data-icrush-33acc347":""},["对于上面的doit方法，有一个形参，格式如下："]),a("pre",{"ui-code":"","data-icrush-33acc347":""},['{series: "arc", region: "default", subRegion: "default", attr: {…}, left: 635, …}↵attr: {fill-color: "black", dash: Array(0), type: "fill", …}↵left: 635↵region: "default"↵series: "arc"↵subRegion: "default"↵top: 305']),a("ul",{"data-icrush-33acc347":""},[a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["attr"]),"：当前标签的属性；"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["left、top"]),"：触发事件的位置，注意是相对画布左上角的；"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["region"]),"：当前交互的区域名称；"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["series"]),"：组件名称；"]),a("li",{"data-icrush-33acc347":""},[a("span",{class:"important","data-icrush-33acc347":""},["subRegion"]),"：子区域名称。"])]),a("h1",{id:"fixed-c-for","data-icrush-33acc347":""},["迭代",a("span",{class:"sub-title","data-icrush-33acc347":""},["c-for"])]),a("pre",{"ui-code":"","data-icrush-33acc347":""},["<ui-demo c-for='(value, key) in dataList' />"]),a("p",{"data-icrush-33acc347":""},["或"]),a("pre",{"ui-code":"","data-icrush-33acc347":""},["<ui-demo c-for='value in dataList' />"]),a("p",{"data-icrush-33acc347":""},["其中",a("span",{class:"public","data-icrush-33acc347":""},["dataList"]),"可以是",a("span",{class:"important","data-icrush-33acc347":""},["数组"]),"或键值对形式的",a("span",{class:"important","data-icrush-33acc347":""},["JSON"]),"。"]),a("h1",{id:"fixed-c-if","data-icrush-33acc347":""},["是否显示",a("span",{class:"sub-title","data-icrush-33acc347":""},["c-if"])]),a("pre",{"ui-code":"","data-icrush-33acc347":""},["<ui-demo c-if='expression' />"]),a("p",{"data-icrush-33acc347":""},[a("span",{class:"public","data-icrush-33acc347":""},["expression"]),"应该是一个合法的表达式，如果为true表示显示，否则隐藏此图形组件。"]),a("h1",{id:"fixed-c-bind","data-icrush-33acc347":""},["数据绑定",a("span",{class:"sub-title","data-icrush-33acc347":""},["c-bind"])]),a("pre",{"ui-code":"","data-icrush-33acc347":""},["<ui-demo c-bind:attrName='expression' />"]),a("p",{"data-icrush-33acc347":""},[a("span",{class:"public","data-icrush-33acc347":""},["attrName"]),"表示属性名称，",a("span",{class:"public","data-icrush-33acc347":""},["expression"]),"是一个表达式，数据绑定可以自动监听数据改变来更新组件。"])])};c.default=r}}]);