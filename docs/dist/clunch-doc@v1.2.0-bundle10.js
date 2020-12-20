(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(a,i,t){"use strict";t.r(i);var s=t(31),r=t(32),d={created:function(){Object(s.a)("menu-2","series-list")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};t(52);d.render=function(a){return a("div",{class:"doc-view","data-icrush-3475d776":""},[a("header",{id:"fixed-top","data-icrush-3475d776":""},["内置组件"]),a("h1",{id:"fixed-basic","data-icrush-3475d776":""},["单一组件"]),a("h3",{id:"fixed-arc","data-icrush-3475d776":""},["弧形",a("span",{class:"sub-title","data-icrush-3475d776":""},["arc"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：圆心坐标、内外半径和跨越弧度 --\x3e↵<arc cx='number' cy='number' radius1='number' radius2='number' deg='number' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["type"]),"：string，弧形类型，默认'fill'，还有二种类型可选：'stroke'和'full';"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["begin"]),"：number，弧度开始角度，默认0。"])]),a("h3",{id:"fixed-circle","data-icrush-3475d776":""},["圆",a("span",{class:"sub-title","data-icrush-3475d776":""},["circle"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：圆心坐标、半径 --\x3e↵<circle cx='number' cy='number' radius='number' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["type"]),"：string，圆形类型，默认'fill'，还有二种类型可选：'stroke'和'full'。"])]),a("h3",{id:"fixed-path","data-icrush-3475d776":""},["路径",a("span",{class:"sub-title","data-icrush-3475d776":""},["path"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["<path>↵↵    \x3c!-- 移动到指定点（画笔离开画布） --\x3e↵    <move-to x='number' y='number' />↵↵    \x3c!-- 连线到指定点（画笔没有离开画布） --\x3e↵    <line-to x='number' y='number' />↵↵    \x3c!--↵        cp1x和cp1y表示第一个控制点，必输，只有一个控制点就是二次贝塞尔到↵        cp2x和cp2y表示第二个控制点，非必输，如果设置了，表示三次贝塞尔到↵        x和y表示终点坐标，必输↵    --\x3e↵    <bezier-to x='number' y='number'↵        cp1x='number' cp1y='number' cp2x='number' cp2y='number' />↵↵</path>"]),a("p",{"data-icrush-3475d776":""},["路径是一种绘图方式，具体的绘图需要通过子标签的形式来表达（上面列举的子标签可以随意组合）。先来看看",a("span",{class:"public","data-icrush-3475d776":""},["path"]),"有哪些可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["type"]),"：string，图形类型，默认'stroke'，还有二种类型可选：'full'和'fill'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["close"]),"：boolean，是否闭合，默认false，不自动闭合。"])]),a("h3",{id:"fixed-rect","data-icrush-3475d776":""},["矩形",a("span",{class:"sub-title","data-icrush-3475d776":""},["rect"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：矩形坐标、宽和高 --\x3e↵<rect x='number' y='number' width='number' height='number' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["type"]),"：string，矩形类型，默认'fill'，还有二种类型可选：'stroke'和'full'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["align"]),"：string，水平对齐方式，默认'left'，还有二种类型可选：'center'和'right'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["baseline"]),"：string，垂直对齐方式，默认'top'，还有二种类型可选：'middle'和'bottom'。"])]),a("h3",{id:"fixed-text","data-icrush-3475d776":""},["文字",a("span",{class:"sub-title","data-icrush-3475d776":""},["text"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：文字坐标和内容 --\x3e↵<text x='number' y='number' content='string' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["font-size"]),"：number，文字大小，默认16；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["type"]),"：string，矩形类型，默认'full'，还有二种类型可选：'stroke'和'fill'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["font-family"]),"：string，字体类型，默认'sans-serif'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["align"]),"：string，文字水平对齐方式，默认'left'，还有二种类型可选：'center'和'right'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["baseline"]),"：string，文字垂直对齐方式，默认'middle'，还有二种类型可选：'top'和'bottom'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["deg"]),"：number，文字旋转角度，默认0。"])]),a("h1",{id:"fixed-combine","data-icrush-3475d776":""},["复合组件"]),a("h3",{id:"fixed-ruler","data-icrush-3475d776":""},["直线刻度尺",a("span",{class:"sub-title","data-icrush-3475d776":""},["ruler"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：刻度尺坐标、长度和数据 --\x3e↵<ruler x='number' y='number' length='number' value='array' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["direction"]),"：string，刻度尺的方向，默认'LR'，表示从左到右，还有三种方向可选：'RL'、'TB'和'BT'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["mark-direction"]),"：string，小刻度的位置，默认'right'，表示在前进方向右边，还有一种可选：'left'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["value-position"]),"：string，刻度文字的位置，默认'mark'，表示文字和刻度对齐，还有一种可选：'between'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["color"]),"：string，刻度尺颜色，默认'black'。"])]),a("h3",{id:"fixed-polar-ruler","data-icrush-3475d776":""},["弧形刻度尺",a("span",{class:"sub-title","data-icrush-3475d776":""},["polar-ruler"])]),a("pre",{"ui-code":"","data-icrush-3475d776":""},["\x3c!-- 分别表示：刻度尺圆心、半径和数据 --\x3e↵<polar-ruler cx='number' cy='number' radius='number' value='array' />"]),a("p",{"data-icrush-3475d776":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-icrush-3475d776":""},[a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["begin"]),"：number，开始弧度，默认0；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["deg"]),"：number，跨越弧度，默认2*Math.PI；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["mark-direction"]),"：string，小刻度的位置，默认'outer'，表示在刻度对外，还有一种可选：'inner'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["value-position"]),"：string，刻度文字的位置，默认'mark'，表示文字和刻度对齐，还有一种可选：'between'；"]),a("li",{"data-icrush-3475d776":""},[a("span",{class:"important","data-icrush-3475d776":""},["color"]),"：string，刻度尺颜色，默认'black'。"])])])};i.default=d},31:function(a,i,t){"use strict";var s=t(6),r=t.n(s);i.a=function(a,i){r()("."+a).attr("active","no"),r()("."+a+"."+i).attr("active","yes")}},32:function(a,i,t){"use strict";var s=t(6),r=t.n(s);i.a=function(a,i){i=i||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var i=a.split("&"),t={};return i.forEach((function(a){var i=a.split("=");t[i[0]]=i[1]})),t}().fixed;if(t){var s=r()("#fixed-"+t);if(s.length>0){var d=s[0].offsetTop-i,c=a.scrollTop||0;r.a.animation((function(i){a.scrollTop=(d-c)*i+c}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}},52:function(a,i,t){var s=t(53);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,t(2).default)("data-icrush-3475d776",s,!0)},53:function(a,i,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);