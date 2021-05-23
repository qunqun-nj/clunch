(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(a,e,t){"use strict";t.r(e);var p=t(24),r=t(25),i={created:function(){Object(p.a)("menu-2","painter")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};t(39);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-0817a39a":""},[a("div",{class:"doc-view","data-quickpaper-0817a39a":""},[a("header",{id:"fixed-top","data-quickpaper-0817a39a":""},["画笔"]),a("h1",{id:"fixed-config","data-quickpaper-0817a39a":""},["配置画笔"]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},['painter.config({↵↵    // 填充色或图案，默认\'black\'↵    "fillStyle":string,↵↵    // 轮廓色或图案，默认\'black\'↵    "strokeStyle":string,↵↵    // 线条宽度(单位px，下同)默认1↵    "lineWidth":number,↵↵    // 文字水平对齐方式（"left"左对齐、"center"居中和"right"右对齐）默认\'left\'↵    "textAlign":string,↵↵    // 文字垂直对齐方式（"middle"垂直居中、"top"上对齐和"bottom"下对齐）默认\'middle\'↵    "textBaseline":string,↵↵    // 文字大小，默认16↵    "font-size":number,↵↵    // 字体，默认"sans-serif"↵    "font-family":string,↵↵    // 圆弧开始端闭合方式（"butt"直线闭合、"round"圆帽闭合）默认\'butt\'↵    "arc-start-cap":string,↵↵    // 圆弧结束端闭合方式，和上一个类似,默认\'butt\'↵    "arc-end-cap":string,↵↵    // 设置线条虚线，应该是一个数组[number,...]，默认[]↵    "lineDash":array,↵↵    // 阴影的模糊系数，默认0，也就是无阴影↵    "shadowBlur": 0,↵↵    // 阴影的颜色，默认\'black\'↵    "shadowColor": string↵↵});']),a("p",{"data-quickpaper-0817a39a":""},["你需要配置你绘制的图形需要的选项即可！"]),a("h2",{id:"fixed-gradient","data-quickpaper-0817a39a":""},["渐变色"]),a("p",{"data-quickpaper-0817a39a":""},["除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。"]),a("span",{class:"no-menu-title","data-quickpaper-0817a39a":""},["创建"]),a("p",{"data-quickpaper-0817a39a":""},[a("span",{class:"important","data-quickpaper-0817a39a":""},["线性渐变"]),"：四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["var gradient = painter.createLinearGradient(x1, y1, x2, y2);"]),a("p",{"data-quickpaper-0817a39a":""},[a("span",{class:"important","data-quickpaper-0817a39a":""},["环形渐变"]),"：三个参数分别表示渐变的圆心P(cx, cy)和半径r："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["var gradient = painter.createRadialGradient(cx, cy, r);"]),a("p",{class:"warn","data-quickpaper-0817a39a":""},["温馨提示：上述坐标的单位都是px，对于环形渐变而言，渐变的起点是圆心！"]),a("span",{class:"no-menu-title","data-quickpaper-0817a39a":""},["设置"]),a("p",{"data-quickpaper-0817a39a":""},["获取渐变对象以后，你需要添加渐变色，可以添加任意多个："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["gradient.addColorStop(deep, color);"]),a("p",{"data-quickpaper-0817a39a":""},["上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值（不可以是渐变色）。"]),a("span",{class:"no-menu-title","data-quickpaper-0817a39a":""},["获取"]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["var gradientColor = gradient.value();"]),a("h1",{id:"fixed-method","data-quickpaper-0817a39a":""},["绘图方法"]),a("h3",{id:"fixed-text","data-quickpaper-0817a39a":""},["文字"]),a("p",{"data-quickpaper-0817a39a":""},["在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fillText(text, x, y[, deg]);"]),a("p",{"data-quickpaper-0817a39a":""},["在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.strokeText(text, x, y[, deg]);"]),a("p",{"data-quickpaper-0817a39a":""},["在点(x, y)处绘制轮廓并填充的文字text；deg表示文字旋转角度，可选："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fullText(text, x, y[, deg]);"]),a("h3",{id:"fixed-arc","data-quickpaper-0817a39a":""},["弧形"]),a("p",{"data-quickpaper-0817a39a":""},["以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fillArc(cx, cy, r1, r2, beginDeg, deg);"]),a("p",{"data-quickpaper-0817a39a":""},["和fillArc方法类似，只不过绘制的是轮廓圆弧："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);"]),a("p",{"data-quickpaper-0817a39a":""},["和fillArc方法类似，只不过绘制的是轮廓并填充圆弧："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fullArc(cx, cy, r1, r2, beginDeg, deg);"]),a("h3",{id:"fixed-circle","data-quickpaper-0817a39a":""},["圆"]),a("p",{"data-quickpaper-0817a39a":""},["以(cx, cy)为圆心，半径r绘制填充圆形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fillCircle(cx, cy, r);"]),a("p",{"data-quickpaper-0817a39a":""},["以(cx, cy)为圆心，半径r绘制轮廓圆形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.strokeCircle(cx, cy, r);"]),a("p",{"data-quickpaper-0817a39a":""},["以(cx, cy)为圆心，半径r绘制轮廓并填充圆形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fullCircle(cx, cy, r);"]),a("h3",{id:"fixed-rect","data-quickpaper-0817a39a":""},["矩形"]),a("p",{"data-quickpaper-0817a39a":""},["以(x, y)为左上角，宽width，高height绘制填充矩形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fillRect(x, y, width, height);"]),a("p",{"data-quickpaper-0817a39a":""},["以(x, y)为左上角，宽width，高height绘制轮廓矩形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.strokeRect(x, y, width, height);"]),a("p",{"data-quickpaper-0817a39a":""},["以(x, y)为左上角，宽width，高height绘制轮廓并填充矩形："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fullRect(x, y, width, height);"]),a("h3",{id:"fixed-path","data-quickpaper-0817a39a":""},["路径"]),a("p",{"data-quickpaper-0817a39a":""},["基于路径可以绘制几乎大部分图形，你几乎可以描述任意一个区域。"]),a("p",{"data-quickpaper-0817a39a":""},["开始一段独立的路径："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.beginPath();"]),a("p",{"data-quickpaper-0817a39a":""},["闭合当前路径，也就是路径首尾闭合："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.closePath();"]),a("p",{"data-quickpaper-0817a39a":""},["画笔移动到点(x, y)，此时笔离开了画布："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.moveTo(x, y);"]),a("p",{"data-quickpaper-0817a39a":""},["画笔移动到点(x, y)，此时笔没有离开画布："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.lineTo(x, y);"]),a("p",{"data-quickpaper-0817a39a":""},["以(cx, cy)为圆心，半径r，从弧度beginDeg开始，跨越弧度deg画弧，此时笔没有离开画布："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.arc(cx, cy, r, beginDeg, deg);"]),a("p",{"data-quickpaper-0817a39a":""},["二次贝塞尔曲线到"]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.quadraticCurveTo(cpx, cpy, x, y);"]),a("p",{"data-quickpaper-0817a39a":""},["三次贝塞尔曲线到："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);"]),a("p",{"data-quickpaper-0817a39a":""},["把当前路径包裹的区域填充颜色："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.fill();"]),a("p",{"data-quickpaper-0817a39a":""},["把当前路径上色（轮廓线）："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.stroke();"]),a("p",{"data-quickpaper-0817a39a":""},["把当前路径画上轮廓线并填充颜色到当前路径所包裹的区域："]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.full();"]),a("p",{"data-quickpaper-0817a39a":""},["把图像、画布或视频绘制到画布的指定位置上："]),a("h3",{id:"fixed-image","data-quickpaper-0817a39a":""},["图片"]),a("pre",{"q-code":"","data-quickpaper-0817a39a":""},["painter.drawImage();"]),a("ul",{"data-quickpaper-0817a39a":""},[a("li",{"data-quickpaper-0817a39a":""},["(img, x, y):在画布上定位图像。"]),a("li",{"data-quickpaper-0817a39a":""},["(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。"]),a("li",{"data-quickpaper-0817a39a":""},["(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。"])])])])};e.default=i},24:function(a,e,t){"use strict";var p=t(3);e.a=function(a,e){for(var t=p.a.find(document.getElementById("root"),(function(e){return p.a.hasClass(e,a)})),r=0;r<t.length;r++)t[r].setAttribute("active","no");p.a.find(document.getElementById("root"),(function(t){return p.a.hasClass(t,[a,e])}))[0].setAttribute("active","yes")}},25:function(a,e,t){"use strict";var p=[],r=null;e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),t={};return e.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}().fixed;if(t){var i=document.getElementById("fixed-"+t);if(i){var c=i.offsetTop-e,d=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var i={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:r,createTime:new Date,tick:a,duration:e,callback:t}),i.start(),r},start:function(){r||(r=setInterval(i.tick,13))},tick:function(){var a,e,t,r,c,d,n,u=p;for((p=[]).length=0,e=0;e<u.length;e++)a=(c=u[e]).createTime,t=c.tick,d=c.duration,r=c.callback,!1,(n=(+new Date-a)/d)>=1&&!0,t(n=n>1?1:n),n<1&&c.id?p.push(c):r&&r(n);p.length<=0&&i.stop()},stop:function(){r&&(clearInterval(r),r=null)}},c=i.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(c-d)*e+d}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},39:function(a,e,t){var p=t(40);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(2).default)("data-quickpaper-0817a39a",p,!0)},40:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);