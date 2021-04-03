(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(a,e,t){"use strict";t.r(e);var p=t(24),r=t(25),i={created:function(){Object(p.a)("menu-2","service")},mounted:function(){Object(r.a)(document.getElementById("api-id"),44)}};t(43);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-10262011":""},[a("div",{class:"doc-view","data-quickpaper-10262011":""},[a("header",{id:"fixed-top","data-quickpaper-10262011":""},["服务"]),a("h1",{id:"fixed-tree","data-quickpaper-10262011":""},["树图",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$tree"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},['var tree=$tree({↵↵    // 配置基本的数据结构（必输）↵    "root":function(initTree){ /*返回根结点*/ },↵    "id":function(treedata){ /*返回id*/ },↵    "child":function(parentTree, initTree){ /*返回孩子结点*/ },↵↵    // 配置树图结构（可选）↵    "type":LR|RL|BT|TB|circle,/*配置树图的类型（默认原始模型，会忽略下列全部设置）*/↵    "width":number,"height":number,/*设置树图的宽和高（如果类型是LR|RL|BT|TB需要设置）*/↵    "cx":number,"cy":number,/*设置圆心（如果类型是circle需要设置）*/↵    "radius":number,/*设置树图半径（如果类型是circle需要设置）*/↵    "begin-deg":number,"deg":number/*开始和跨越弧度（可选，如果类型是circle设置该参数有效）*/↵↵});']),a("p",{"data-quickpaper-10262011":""},["获取tree对象实例的时候需要传递",a("span",{class:"public","data-quickpaper-10262011":""},["配置"]),"来告诉对象如何去理解用户的意图。"]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["var resultData = tree(data);"]),a("p",{"data-quickpaper-10262011":""},["最后，传递给",a("span",{class:"important","data-quickpaper-10262011":""},["tree对象"]),"原始数据即可返回带有坐标信息等的绘图数据了。"]),a("h1",{id:"fixed-animation","data-quickpaper-10262011":""},["动画",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$animation"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["var stop = $animation(function(deep){↵    // deep取值0-1，表示动画进度↵}, speeds, function(deep){↵    // deep和上面一样，提供的原因是有时候结束回调是stop方法触发而不是动画结束了↵});"]),a("p",{"data-quickpaper-10262011":""},["该方法有三个参数：分别表示画帧方法、动画时长、动画结束回调（动画时长单位毫秒，最后两个均可选）。"]),a("p",{"data-quickpaper-10262011":""},["如果希望动画立刻结束，可以调用动画返回的方法主动停止："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["stop();"]),a("h1",{id:"fixed-cardinal","data-quickpaper-10262011":""},["函数插值",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$cardinal"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},['var cardinal = $cardinal({↵    // 该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重↵    "t": number↵});']),a("p",{"data-quickpaper-10262011":""},[a("span",{class:"important","data-quickpaper-10262011":""},["插值函数"]),"获取以后，还需要设置",a("span",{class:"important","data-quickpaper-10262011":""},["插值点"]),"："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["// 插值点可以重复设置，以最后一次设置的为准↵cardinal.setP([[X1,Y1],[X2,Y2],...,[Xn, Yn]]);"]),a("p",{"data-quickpaper-10262011":""},["设置好插值点以后，比如现在需要求解x=a（a必须属于闭区间",a("span",{class:"public","data-quickpaper-10262011":""},["[ X1 , Xn ]"]),"）对应的y值："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["var y = cardinal(a);"]),a("h1",{id:"fixed-rotate","data-quickpaper-10262011":""},["旋转",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$rotate"])]),a("p",{"data-quickpaper-10262011":""},["点（x,y）围绕中心（cx,cy）旋转deg度："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["$rotate(cx, cy, deg, x, y);"]),a("h1",{id:"fixed-move","data-quickpaper-10262011":""},["移动",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$move"])]),a("p",{"data-quickpaper-10262011":""},["点（x,y）沿着向量（ax,ay）方向移动距离d："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["$move(ax, ay, d, x, y);"]),a("h1",{id:"fixed-scale","data-quickpaper-10262011":""},["缩放",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$scale"])]),a("p",{"data-quickpaper-10262011":""},["点（x,y）围绕中心（cx,cy）缩放times倍："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["$scale(cx, cy, times, x, y);"]),a("h1",{id:"fixed-dot","data-quickpaper-10262011":""},["点对象",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$dot"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["var dot=$dot({↵    // 前进方向、中心坐标和当前位置（都可选，下列是缺省值）↵    d: [1, 1],c: [0, 0],p: [0, 0]↵});"]),a("p",{"data-quickpaper-10262011":""},["下列是",a("span",{class:"important","data-quickpaper-10262011":""},["一些变换方法"]),"，通过这些方法可以控制点dot的坐标改变或获取当前坐标。"]),a("p",{"data-quickpaper-10262011":""},["前进方向以当前位置为中心，旋转deg度（注意，改变的是前进方向，不是当前坐标）："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["dot.rotate(deg);"]),a("p",{"data-quickpaper-10262011":""},["沿着当前前进方向前进d："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["dot.move(d);"]),a("p",{"data-quickpaper-10262011":""},["围绕中心坐标缩放："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["dot.scale(times);"]),a("p",{"data-quickpaper-10262011":""},["在上述操作的任意时刻，如果希望",a("span",{class:"important","data-quickpaper-10262011":""},["获取当前点"]),"的坐标："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["var p=dot.value();"]),a("h1",{id:"fixed-formatColor","data-quickpaper-10262011":""},["格式化颜色",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$formatColor"])]),a("p",{"data-quickpaper-10262011":""},["给定任意一个合法的css颜色字符串，把颜色统一转变成rgba格式，返回一个数组[r,g,b,a]："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["$formatColor(colorString);"]),a("h1",{id:"fixed-getRandomColors","data-quickpaper-10262011":""},["随机颜色",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$getRandomColors"])]),a("p",{"data-quickpaper-10262011":""},["传递需要的颜色个数，返回一组随机色彩："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["// alpha可选，取值是0-1，表示颜色透明度↵$getRandomColors(number, alpha);"]),a("h1",{id:"fixed-getLoopColors","data-quickpaper-10262011":""},["循环颜色",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$getLoopColors"])]),a("p",{"data-quickpaper-10262011":""},["传递需要的颜色个数，返回一组循环的色彩："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["// alpha可选，取值是0-1，表示颜色透明度↵$getLoopColors(number, alpha);"]),a("h1",{id:"fixed-map","data-quickpaper-10262011":""},["地图",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$map"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},['var map=$map({↵↵    // 设置缩放比例，默认1↵    "scale":number,↵↵    // 设置旋转中心，你可以把你绘制的部分的中心的经纬度设置为中心，默认[107, 36]↵    "center":[number, number],↵↵    // 映射算法类型，默认\'eoap\',表示使用「等角斜方位投影」↵    "type":string↵↵});']),a("p",{"data-quickpaper-10262011":""},["获取map对象实例的时候需要传递配置来告诉对象如何去理解用户的意图。"]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["// 特别需要注意，计算出来的位置是偏离中心点的距离↵var d_xyz=map(longitude, latitude);"]),a("p",{"data-quickpaper-10262011":""},["最后，传递给map对象一个点的经纬度即可返回该点的绘图坐标。"]),a("h1",{id:"fixed-ruler","data-quickpaper-10262011":""},["刻度尺",a("span",{class:"sub-title","data-quickpaper-10262011":""},["$ruler"])]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["// 分别表示最大值，最小值和间隔数↵var rulerData = $ruler(maxValue, minValue, number);"]),a("p",{"data-quickpaper-10262011":""},["返回的数据格式如下："]),a("pre",{"q-code":"","data-quickpaper-10262011":""},["rulerData = {↵    min: number, // 最小值↵    max: number , // 最大值↵    distance: number , // 步进↵    num: number // 间隔数↵    ruler: Array<number> // 刻度数数组↵};"]),a("p",{class:"warn","data-quickpaper-10262011":""},["温馨提示：传递的间隔数对于最终计算只是作为一个参考，实际的间隔数以返回的结果为准。"])])])};e.default=i},24:function(a,e,t){"use strict";var p=t(3);e.a=function(a,e){for(var t=p.a.find(document.getElementById("root"),(function(e){return p.a.hasClass(e,a)})),r=0;r<t.length;r++)t[r].setAttribute("active","no");p.a.find(document.getElementById("root"),(function(t){return p.a.hasClass(t,[a,e])}))[0].setAttribute("active","yes")}},25:function(a,e,t){"use strict";var p=[],r=null;e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),t={};return e.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}().fixed;if(t){var i=document.getElementById("fixed-"+t);if(i){var c=i.offsetTop-e,d=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var i={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:r,createTime:new Date,tick:a,duration:e,callback:t}),i.start(),r},start:function(){r||(r=setInterval(i.tick,13))},tick:function(){var a,e,t,r,c,d,u,n=p;for((p=[]).length=0,e=0;e<n.length;e++)a=(c=n[e]).createTime,t=c.tick,d=c.duration,r=c.callback,!1,(u=(+new Date-a)/d)>=1&&!0,t(u=u>1?1:u),u<1&&c.id?p.push(c):r&&r(u);p.length<=0&&i.stop()},stop:function(){r&&(clearInterval(r),r=null)}},c=i.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(c-d)*e+d}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0}},43:function(a,e,t){var p=t(44);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(2).default)("data-quickpaper-10262011",p,!0)},44:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);