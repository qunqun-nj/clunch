(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{119:function(a,t,p){"use strict";p.r(t);var i=p(24),e=p(25),r={created:function(){Object(i.a)("menu-2","series-list")},mounted:function(){Object(e.a)(document.getElementById("api-id"),44)}};p(45);r.render=function(a){return a("div",{quickpaper:"","data-quickpaper-503b149a":""},[a("div",{class:"doc-view","data-quickpaper-503b149a":""},[a("header",{id:"fixed-top","data-quickpaper-503b149a":""},["内置组件"]),a("h1",{id:"fixed-basic","data-quickpaper-503b149a":""},["单一组件"]),a("h3",{id:"fixed-arc","data-quickpaper-503b149a":""},["弧形",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["arc"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：圆心坐标、内外半径和跨越弧度 --\x3e↵<arc cx='number' cy='number' radius1='number' radius2='number' deg='number' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["type"]),"：string，弧形类型，默认'fill'，还有二种类型可选：'stroke'和'full';"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["begin"]),"：number，弧度开始角度，默认0。"])]),a("button",{"ui-goto-example":"arc","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h3",{id:"fixed-circle","data-quickpaper-503b149a":""},["圆",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["circle"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：圆心坐标、半径 --\x3e↵<circle cx='number' cy='number' radius='number' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["type"]),"：string，圆形类型，默认'fill'，还有二种类型可选：'stroke'和'full'。"])]),a("button",{"ui-goto-example":"circle","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h3",{id:"fixed-path","data-quickpaper-503b149a":""},["路径",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["path"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["<path>↵↵    \x3c!-- 移动到指定点（画笔离开画布） --\x3e↵    <move-to x='number' y='number' />↵↵    \x3c!-- 连线到指定点（画笔没有离开画布） --\x3e↵    <line-to x='number' y='number' />↵↵    \x3c!--↵        cp1x和cp1y表示第一个控制点，必输，只有一个控制点就是二次贝塞尔到↵        cp2x和cp2y表示第二个控制点，非必输，如果设置了，表示三次贝塞尔到↵        x和y表示终点坐标，必输↵    --\x3e↵    <bezier-to x='number' y='number'↵        cp1x='number' cp1y='number' cp2x='number' cp2y='number' />↵↵</path>"]),a("p",{"data-quickpaper-503b149a":""},["路径是一种绘图方式，具体的绘图需要通过子标签的形式来表达（上面列举的子标签可以随意组合）。先来看看",a("span",{class:"public","data-quickpaper-503b149a":""},["path"]),"有哪些可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["type"]),"：string，图形类型，默认'stroke'，还有二种类型可选：'full'和'fill'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["close"]),"：boolean，是否闭合，默认false，不自动闭合。"])]),a("button",{"ui-goto-example":"path","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h3",{id:"fixed-rect","data-quickpaper-503b149a":""},["矩形",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["rect"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：矩形坐标、宽和高 --\x3e↵<rect x='number' y='number' width='number' height='number' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["type"]),"：string，矩形类型，默认'fill'，还有二种类型可选：'stroke'和'full'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["align"]),"：string，水平对齐方式，默认'left'，还有二种类型可选：'center'和'right'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["baseline"]),"：string，垂直对齐方式，默认'top'，还有二种类型可选：'middle'和'bottom'。"])]),a("button",{"ui-goto-example":"rect","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h3",{id:"fixed-text","data-quickpaper-503b149a":""},["文字",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["text"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：文字坐标和内容 --\x3e↵<text x='number' y='number' content='string' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["fill-color"]),"：string，填充颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["stroke-color"]),"：string，轮廓颜色，默认'black'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["line-width"]),"：number，线条粗细程度，默认1；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["dash"]),"：array，线条类型，默认[]，表示实线；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["font-size"]),"：number，文字大小，默认16；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["type"]),"：string，矩形类型，默认'full'，还有二种类型可选：'stroke'和'fill'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["font-family"]),"：string，字体类型，默认'sans-serif'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["align"]),"：string，文字水平对齐方式，默认'left'，还有二种类型可选：'center'和'right'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["baseline"]),"：string，文字垂直对齐方式，默认'middle'，还有二种类型可选：'top'和'bottom'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["deg"]),"：number，文字旋转角度，默认0。"])]),a("button",{"ui-goto-example":"text","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h1",{id:"fixed-combine","data-quickpaper-503b149a":""},["复合组件"]),a("h3",{id:"fixed-ruler","data-quickpaper-503b149a":""},["直线刻度尺",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["ruler"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：刻度尺坐标、长度和数据 --\x3e↵<ruler x='number' y='number' length='number' value='array' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["direction"]),"：string，刻度尺的方向，默认'LR'，表示从左到右，还有三种方向可选：'RL'、'TB'和'BT'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["mark-direction"]),"：string，小刻度的位置，默认'right'，表示在前进方向右边，还有一种可选：'left'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["value-position"]),"：string，刻度文字的位置，默认'mark'，表示文字和刻度对齐，还有一种可选：'between'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["color"]),"：string，刻度尺颜色，默认'black'。"])]),a("button",{"ui-goto-example":"ruler","data-quickpaper-503b149a":""},["查看用例>>>"]),a("h3",{id:"fixed-polar-ruler","data-quickpaper-503b149a":""},["弧形刻度尺",a("span",{class:"sub-title","data-quickpaper-503b149a":""},["polar-ruler"])]),a("pre",{"q-code":"html","data-quickpaper-503b149a":""},["\x3c!-- 分别表示：刻度尺圆心、半径和数据 --\x3e↵<polar-ruler cx='number' cy='number' radius='number' value='array' />"]),a("p",{"data-quickpaper-503b149a":""},["除了上面那些必输项外，还有以下可选参数："]),a("ul",{"data-quickpaper-503b149a":""},[a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["begin"]),"：number，开始弧度，默认0；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["deg"]),"：number，跨越弧度，默认2*Math.PI；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["mark-direction"]),"：string，小刻度的位置，默认'outer'，表示在刻度对外，还有一种可选：'inner'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["value-position"]),"：string，刻度文字的位置，默认'mark'，表示文字和刻度对齐，还有一种可选：'between'；"]),a("li",{"data-quickpaper-503b149a":""},[a("span",{class:"important","data-quickpaper-503b149a":""},["color"]),"：string，刻度尺颜色，默认'black'。"])]),a("button",{"ui-goto-example":"polar-ruler","data-quickpaper-503b149a":""},["查看用例>>>"])])])};t.default=r},24:function(a,t,p){"use strict";var i=p(3);t.a=function(a,t){for(var p=i.a.find(document.getElementById("root"),(function(t){return i.a.hasClass(t,a)})),e=0;e<p.length;e++)p[e].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(p){return i.a.hasClass(p,[a,t])}))[0].setAttribute("active","yes")}},25:function(a,t,p){"use strict";var i=[],e=null;t.a=function(a,t){t=t||0,a=a||document.documentElement;var p=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),p={};return t.forEach((function(a){var t=a.split("=");p[t[0]]=t[1]})),p}().fixed;if(p){var r=document.getElementById("fixed-"+p);if(r){var c=r.offsetTop-t,n=a.scrollTop||0;!function(a,t,p){arguments.length<2&&(t=400);var r={timer:function(a,t,p){if(!a)throw new Error("Tick is required!");var e=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:e,createTime:new Date,tick:a,duration:t,callback:p}),r.start(),e},start:function(){e||(e=setInterval(r.tick,13))},tick:function(){var a,t,p,e,c,n,u,l=i;for((i=[]).length=0,t=0;t<l.length;t++)a=(c=l[t]).createTime,p=c.tick,n=c.duration,e=c.callback,!1,(u=(+new Date-a)/n)>=1&&!0,p(u=u>1?1:u),u<1&&c.id?i.push(c):e&&e(u);i.length<=0&&r.stop()},stop:function(){e&&(clearInterval(e),e=null)}},c=r.timer((function(t){a(t)}),t,p)}((function(t){a.scrollTop=(c-n)*t+n}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},45:function(a,t,p){var i=p(46);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(2).default)("data-quickpaper-503b149a",i,!0)},46:function(a,t,p){(a.exports=p(1)(!1)).push([a.i,"",""])}}]);