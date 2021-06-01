(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,a,c){"use strict";c.r(a);var t=c(24),p=c(25),r={created:function(){Object(t.a)("menu-2","painter")},mounted:function(){Object(p.a)(document.getElementById("api-id"),44)}};c(39);r.render=function(e){return e("div",{quickpaper:"","data-quickpaper-25e4c667":""},[e("div",{class:"doc-view","data-quickpaper-25e4c667":""},[e("header",{id:"fixed-top","data-quickpaper-25e4c667":""},["画笔"]),e("h1",{id:"fixed-config","data-quickpaper-25e4c667":""},["配置画笔"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},['painter.config({↵↵    // 填充色或图案，默认\'black\'↵    "fillStyle":string,↵↵    // 轮廓色或图案，默认\'black\'↵    "strokeStyle":string,↵↵    // 线条宽度(单位px，下同)默认1↵    "lineWidth":number,↵↵    // 文字水平对齐方式（"left"左对齐、"center"居中和"right"右对齐）默认\'left\'↵    "textAlign":string,↵↵    // 文字垂直对齐方式（"middle"垂直居中、"top"上对齐和"bottom"下对齐）默认\'middle\'↵    "textBaseline":string,↵↵    // 文字大小，默认16↵    "font-size":number,↵↵    // 字体，默认"sans-serif"↵    "font-family":string,↵↵    // 圆弧开始端闭合方式（"butt"直线闭合、"round"圆帽闭合）默认\'butt\'↵    "arc-start-cap":string,↵↵    // 圆弧结束端闭合方式，和上一个类似,默认\'butt\'↵    "arc-end-cap":string,↵↵    // 设置线条虚线，应该是一个数组[number,...]，默认[]↵    "lineDash":array,↵↵    // 阴影的模糊系数，默认0，也就是无阴影↵    "shadowBlur": 0,↵↵    // 阴影的颜色，默认\'black\'↵    "shadowColor": string↵↵});']),e("p",{"data-quickpaper-25e4c667":""},["你需要配置你绘制的图形需要的选项即可！"]),e("h2",{id:"fixed-gradient","data-quickpaper-25e4c667":""},["渐变色"]),e("p",{"data-quickpaper-25e4c667":""},["除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["创建"]),e("p",{"data-quickpaper-25e4c667":""},[e("span",{class:"important","data-quickpaper-25e4c667":""},["线性渐变"]),"：四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradient = painter.createLinearGradient(x1, y1, x2, y2);"]),e("p",{"data-quickpaper-25e4c667":""},[e("span",{class:"important","data-quickpaper-25e4c667":""},["环形渐变"]),"：三个参数分别表示渐变的圆心P(cx, cy)和半径r："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradient = painter.createRadialGradient(cx, cy, r);"]),e("p",{class:"warn","data-quickpaper-25e4c667":""},["温馨提示：上述坐标的单位都是px，对于环形渐变而言，渐变的起点是圆心！"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["设置"]),e("p",{"data-quickpaper-25e4c667":""},["获取渐变对象以后，你需要添加渐变色，可以添加任意多个："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["gradient.addColorStop(deep, color);"]),e("p",{"data-quickpaper-25e4c667":""},["上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值（不可以是渐变色）。"]),e("span",{class:"no-menu-title","data-quickpaper-25e4c667":""},["获取"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["var gradientColor = gradient.value();"]),e("h1",{id:"fixed-method","data-quickpaper-25e4c667":""},["绘图方法"]),e("h3",{id:"fixed-text","data-quickpaper-25e4c667":""},["文字"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillText(text, x, y[, deg]);"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeText(text, x, y[, deg]);"]),e("p",{"data-quickpaper-25e4c667":""},["在点(x, y)处绘制轮廓并填充的文字text；deg表示文字旋转角度，可选："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullText(text, x, y[, deg]);"]),e("h3",{id:"fixed-arc","data-quickpaper-25e4c667":""},["弧形"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillArc(cx, cy, r1, r2, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["和fillArc方法类似，只不过绘制的是轮廓圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["和fillArc方法类似，只不过绘制的是轮廓并填充圆弧："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullArc(cx, cy, r1, r2, beginDeg, deg);"]),e("h3",{id:"fixed-circle","data-quickpaper-25e4c667":""},["圆"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制填充圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillCircle(cx, cy, r);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制轮廓圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeCircle(cx, cy, r);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r绘制轮廓并填充圆形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullCircle(cx, cy, r);"]),e("h3",{id:"fixed-rect","data-quickpaper-25e4c667":""},["矩形"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制填充矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fillRect(x, y, width, height);"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制轮廓矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.strokeRect(x, y, width, height);"]),e("p",{"data-quickpaper-25e4c667":""},["以(x, y)为左上角，宽width，高height绘制轮廓并填充矩形："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fullRect(x, y, width, height);"]),e("h3",{id:"fixed-path","data-quickpaper-25e4c667":""},["路径"]),e("p",{"data-quickpaper-25e4c667":""},["基于路径可以绘制几乎大部分图形，你几乎可以描述任意一个区域。"]),e("p",{"data-quickpaper-25e4c667":""},["开始一段独立的路径："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.beginPath();"]),e("p",{"data-quickpaper-25e4c667":""},["闭合当前路径，也就是路径首尾闭合："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.closePath();"]),e("p",{"data-quickpaper-25e4c667":""},["画笔移动到点(x, y)，此时笔离开了画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.moveTo(x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["画笔移动到点(x, y)，此时笔没有离开画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.lineTo(x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["以(cx, cy)为圆心，半径r，从弧度beginDeg开始，跨越弧度deg画弧，此时笔没有离开画布："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.arc(cx, cy, r, beginDeg, deg);"]),e("p",{"data-quickpaper-25e4c667":""},["二次贝塞尔曲线到"]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.quadraticCurveTo(cpx, cpy, x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["三次贝塞尔曲线到："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径包裹的区域填充颜色："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.fill();"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径上色（轮廓线）："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.stroke();"]),e("p",{"data-quickpaper-25e4c667":""},["把当前路径画上轮廓线并填充颜色到当前路径所包裹的区域："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.full();"]),e("h3",{id:"fixed-image","data-quickpaper-25e4c667":""},["图片"]),e("p",{"data-quickpaper-25e4c667":""},["把图像、画布或视频绘制到画布的指定位置上："]),e("pre",{"q-code":"","data-quickpaper-25e4c667":""},["painter.drawImage();"]),e("ul",{"data-quickpaper-25e4c667":""},[e("li",{"data-quickpaper-25e4c667":""},["(img, x, y):在画布上定位图像。"]),e("li",{"data-quickpaper-25e4c667":""},["(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。"]),e("li",{"data-quickpaper-25e4c667":""},["(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。"])])])])};a.default=r},24:function(e,a,c){"use strict";var t=c(3);a.a=function(e,a){for(var c=t.a.find(document.getElementById("root"),(function(a){return t.a.hasClass(a,e)})),p=0;p<c.length;p++)c[p].setAttribute("active","no");t.a.find(document.getElementById("root"),(function(c){return t.a.hasClass(c,[e,a])}))[0].setAttribute("active","yes")}},25:function(e,a,c){"use strict";var t=[],p=null;a.a=function(e,a){a=a||0,e=e||document.documentElement;var c=function(){var e=window.location.href.split("?")[1]||"";if(""==e)return{};var a=e.split("&"),c={};return a.forEach((function(e){var a=e.split("=");c[a[0]]=a[1]})),c}().fixed;if(c){var r=document.getElementById("fixed-"+c);if(r){var i=r.offsetTop-a,d=e.scrollTop||0;!function(e,a,c){arguments.length<2&&(a=400);var r={timer:function(e,a,c){if(!e)throw new Error("Tick is required!");var p=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:p,createTime:new Date,tick:e,duration:a,callback:c}),r.start(),p},start:function(){p||(p=setInterval(r.tick,13))},tick:function(){var e,a,c,p,i,d,n,u=t;for((t=[]).length=0,a=0;a<u.length;a++)e=(i=u[a]).createTime,c=i.tick,d=i.duration,p=i.callback,!1,(n=(+new Date-e)/d)>=1&&!0,c(n=n>1?1:n),n<1&&i.id?t.push(i):p&&p(n);t.length<=0&&r.stop()},stop:function(){p&&(clearInterval(p),p=null)}},i=r.timer((function(a){e(a)}),a,c)}((function(a){e.scrollTop=(i-d)*a+d}),500,(function(){e.scrollTop=i}))}}else e.scrollTop=0;document.getElementById("root-view").scrollTop=0}},39:function(e,a,c){var t=c(40);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,c(2).default)("data-quickpaper-25e4c667",t,!0)},40:function(e,a,c){(e.exports=c(1)(!1)).push([e.i,"",""])}}]);