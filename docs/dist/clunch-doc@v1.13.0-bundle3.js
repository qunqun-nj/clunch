(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(n,e,i){"use strict";i.r(e);var a=i(30),t=i(24),r={data:function(){return{page:null,version:a.version}},created:function(){Object(t.a)("menu-1","guide")}};i(31);r.render=function(n){return n("div",{quickpaper:"","data-quickpaper-31838cae":""},[n("div",{class:"root","data-quickpaper-31838cae":""},[n("header",{"data-quickpaper-31838cae":""},["clunch.js 官方文档",n("span",{"data-quickpaper-31838cae":""},["{{version}}"]),n("p",{"data-quickpaper-31838cae":""},["特别感谢",n("a",{href:"https://github.com/hai2007/algorithm.js",target:"_blank","data-quickpaper-31838cae":""},["algorithm.js"]),"提供底层技术支持！"])]),n("div",{class:"good","data-quickpaper-31838cae":""},[n("div",{"data-quickpaper-31838cae":""},[n("h2",{"data-quickpaper-31838cae":""},["数据驱动绘图"]),n("p",{"data-quickpaper-31838cae":""},["如果你可以正确的对业务数据进行修改，你就可以编辑一个交互的拖拽web应用。数据驱动绘图的设计，使得你只需把精力放在你的业务数据处理上，它负责绘图等比较难搞的部分。"]),n("a",{class:"demo index0",href:"#/examples/page6",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-31838cae":""},[]),n("p",{"data-quickpaper-31838cae":""},["上面是一个流程图，通过给每个节点和连线添加交互事件获取用户意图后，直接修改数据页面实时更新，就实现了一个简单的流程图编辑器。"])]),n("div",{"data-quickpaper-31838cae":""},[n("h2",{"data-quickpaper-31838cae":""},["复杂图形的区域管理"]),n("p",{"data-quickpaper-31838cae":""},["只要你可以对普通标签添加交互事件，就可以处理几乎任意图形的交互事件。通过对单一标签的画布进行抽象，我们提供了区域和子区域的概念，你可以像操作标签一样操作canvas画布中的具体图形。"]),n("a",{class:"demo index1",href:"#/examples/page4",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-31838cae":""},[]),n("p",{"data-quickpaper-31838cae":""},["上面是一份中国地图（未包括海洋等部分区域），通过",n("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-31838cae":""},["c-on"]),"指令就可以给某个省添加点击事件，点击以后提示你点击了谁。"])]),n("div",{"data-quickpaper-31838cae":""},[n("h2",{"data-quickpaper-31838cae":""},["内置差异对比和过渡动画"]),n("p",{"data-quickpaper-31838cae":""},["如果图形改变过于僵硬需要添加动画效果怎么办？clunch.js会自动启动数据改变前后差异分析，然后给出合适的过渡方案，启动过渡动画。"]),n("a",{class:"demo index2",href:"#/examples/page3",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-31838cae":""},[]),n("p",{"data-quickpaper-31838cae":""},["上面的树图，点击某个结点后删除对应结点的孩子以后，树图会自动过渡成删除后的树图而不是突然改变。"])])]),n("div",{class:"begin","data-quickpaper-31838cae":""},[n("h2",{"data-quickpaper-31838cae":""},["开始"]),n("p",{class:"info","data-quickpaper-31838cae":""},["除了上面提到的，我们还进行了一系列的优化，请在使用中感受。↵                初识clunch.js，可以先通过",n("a",{href:"#/course/introduce?fixed=top",target:"_blank","data-quickpaper-31838cae":""},["教程"]),"来了解基本的代码，学习整个绘图的基本流程。也可以",n("a",{href:"https://github.com/clunch-contrib",target:"_blank","data-quickpaper-31838cae":""},["访问组织"]),"获得更多交流。"]),n("p",{class:"logo","data-quickpaper-31838cae":""},[n("h3",{"data-quickpaper-31838cae":""},["探索clunch.js的使用"]),n("div",{"data-quickpaper-31838cae":""},["结合",n("a",{href:"#/api",target:"_blank","data-quickpaper-31838cae":""},["接口文档"]),"多做练习，有问题联系我们！"]),n("a",{href:"https://github.com/hai2007/clunch",target:"_blank","data-quickpaper-31838cae":""},["Github上查看源码"])])]),n("div",{class:"help","data-quickpaper-31838cae":""},[n("h2",{"data-quickpaper-31838cae":""},["需要帮助？"]),n("p",{"data-quickpaper-31838cae":""},["无论何时，出于什么原因，有任何需要帮助的，请来",n("a",{href:"https://github.com/hai2007/clunch",target:"_blank","data-quickpaper-31838cae":""},["issue"]),"告诉我们，包括一些好的建议！"])])])])};e.default=r},24:function(n,e,i){"use strict";var a=i(3);e.a=function(n,e){for(var i=a.a.find(document.getElementById("root"),(function(e){return a.a.hasClass(e,n)})),t=0;t<i.length;t++)i[t].setAttribute("active","no");a.a.find(document.getElementById("root"),(function(i){return a.a.hasClass(i,[n,e])}))[0].setAttribute("active","yes")}},27:function(n,e,i){n.exports=i.p+"dist/view6.png"},28:function(n,e,i){n.exports=i.p+"dist/view4.png"},29:function(n,e,i){n.exports=i.p+"dist/view3.png"},30:function(n){n.exports=JSON.parse('{"name":"clunch","version":"1.5.0","description":"🎨 The Progressive JavaScript Interactive Picture Framework.","main":"dist/clunch.min.js","typings":"types/index.d.ts","scripts":{"start":"npm install && npm run dev","dev":"rollup --config rollup.config.js -i ./src/entry-template.js -o ./dist/clunch-template.js --watch","dev:core":"rollup --config rollup.config.js -i ./src/entry.core.js -o ./dist/clunch.core.js --watch","build":"npm run rollup && npm run uglifyjs && hai2007_nodejs --config ./hai2007_nodejs.config.js","rollup":"npm run rollup:core && npm run rollup:clunch && npm run rollup:core@template && npm run rollup:clunch@template","rollup:clunch":"rollup --config rollup.config.js -i ./src/entry.js -o ./dist/clunch.js","rollup:clunch@template":"rollup --config rollup.config.js -i ./src/entry-template.js -o ./dist/clunch-template.js","rollup:core":"rollup --config rollup.config.js -i ./src/entry.core.js -o ./dist/clunch.core.js","rollup:core@template":"rollup --config rollup.config.js -i ./src/entry-template.core.js -o ./dist/clunch-template.core.js","uglifyjs":"npm run uglifyjs:core && npm run uglifyjs:clunch && npm run uglifyjs:core@template && npm run uglifyjs:clunch@template","uglifyjs:clunch":"uglifyjs ./dist/clunch.js -m -o ./dist/clunch.min.js","uglifyjs:clunch@template":"uglifyjs ./dist/clunch-template.js -m -o ./dist/clunch-template.min.js","uglifyjs:core":"uglifyjs ./dist/clunch.core.js -m -o ./dist/clunch.core.min.js","uglifyjs:core@template":"uglifyjs ./dist/clunch-template.core.js -m -o ./dist/clunch-template.core.min.js"},"repository":{"type":"git","url":"git+https://github.com/hai2007/clunch.git"},"keywords":["javascript","framework","picture","image"],"author":"你好2007","license":"MIT","bugs":{"url":"https://github.com/hai2007/clunch/issues"},"homepage":"https://hai2007.gitee.io/clunch/","devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@hai2007/nodejs":"^0.1.0","@hai2007/tool":"^0.6.2","@rollup/plugin-babel":"^5.2.1","rollup":"^2.33.2","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.11.6"},"dependencies":{"@hai2007/algorithm":"^0.5.1"}}')},31:function(n,e,i){var a=i(32);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,i(2).default)("data-quickpaper-31838cae",a,!0)},32:function(n,e,i){e=n.exports=i(1)(!1);var a=i(5),t=a(i(6)),r=a(i(27)),o=a(i(28)),c=a(i(29));e.push([n.i,"\n    p.warn {\n        color: rgb(252, 2, 2);\n        font-size: 12px;\n        margin-left: 10px;\n        font-weight: 800;\n    }\n\n    div.root>div.help {\n        background-color: white;\n        text-align: center;\n        padding: .5rem 0;\n    }\n\n    div.root>div.help>h2 {\n        font-weight: 300;\n        font-size: .3rem;\n    }\n\n    div.root>div.help>p {\n        line-height: 3em;\n    }\n\n    div.root>div.help a {\n        color: red;\n        font-weight: 800;\n        padding: 0 .05rem;\n    }\n\n    div.root>div.begin>p.info {\n        line-height: 1.6em;\n    }\n\n    div.root>div.begin {\n        padding: .15rem .5rem;\n        color: #3a585f;\n        text-align: center;\n        width: 8rem;\n        margin: auto;\n        margin-bottom: .5rem;\n    }\n\n    div.root>div.begin>h2 {\n        margin: .4rem 0 .2rem 0;\n        font-weight: 300;\n        font-size: .4rem;\n    }\n\n    div.root>div.begin>p.logo>h3 {\n        margin: .4rem 0 .2rem 0;\n        font-weight: 800;\n        font-size: .26rem;\n    }\n\n    div.root>div.begin>p.logo>div {\n        line-height: 1.8em;\n        text-align: left;\n        text-indent: 2em;\n    }\n\n    div.root>div.begin>p.logo>a {\n        text-decoration: none;\n        height: .4rem;\n        line-height: .4rem;\n        padding: 0 .2rem;\n        border-radius: .1rem;\n        display: inline-block;\n        background-color: rgb(49, 152, 236);\n        color: white;\n        margin-top: .1rem;\n    }\n\n    div.root>div.begin>p.logo {\n        margin-top: .3rem;\n        padding-left: 3rem;\n        background-image: url("+t+");\n        background-repeat: no-repeat;\n        background-position: 1.5rem center;\n        background-size: auto 140px;\n    }\n\n    div.root>div.begin>p a {\n        color: blue;\n        text-decoration: underline;\n    }\n\n    div.root>div.good {\n        background-color: #fff;\n        padding: .15rem .5rem;\n        color: #3a585f;\n        text-align: center;\n    }\n\n    div.root>div.good>div {\n        width: 8rem;\n        margin: auto;\n        line-height: 1.6em;\n    }\n\n    div.root>div.good>div:not(:last-child) {\n        border-bottom: 1px solid gray;\n        padding-bottom: 1rem;\n    }\n\n    div.root>div.good>div>h2 {\n        margin: .4rem 0 .2rem 0;\n        font-weight: 300;\n        font-size: .4rem;\n    }\n\n    div.root>div.good>div>p {\n        text-align: left;\n        text-indent: 2em;\n    }\n\n    div.root>div.good>div>p>a {\n        color: blue;\n        text-decoration: underline;\n    }\n\n    div.root>div.good>div>.demo {\n        display: block;\n        height: 300px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        cursor: pointer;\n        position: relative;\n    }\n\n    div.root>div.good>div>.demo.index0 {\n        background-size: auto 300px;\n        background-image: url("+r+");\n        height: 200px;\n    }\n\n    div.root>div.good>div>.demo.index1 {\n        background-size: auto 90%;\n        background-image: url("+o+");\n    }\n\n    div.root>div.good>div>.demo.index2 {\n        background-size: auto 85%;\n        background-image: url("+c+");\n    }\n\n    div.root {\n        background: #f1f0f0;\n        min-height: calc(100vh - .44rem);\n    }\n\n    div.root>header {\n        text-align: center;\n        font-size: .3rem;\n        line-height: 1.5em;\n        padding: .3rem 0;\n    }\n\n    div.root>header>span {\n        border: 1px solid gray;\n        background-color: white;\n        font-size: .12rem;\n        vertical-align: middle;\n        margin-left: .1rem;\n        padding: .03rem .06rem;\n        border-radius: .03rem;\n    }\n\n    div.root>header>p>a {\n        color: rgb(21, 113, 233);\n        padding: 0 .1rem;\n        text-decoration: underline;\n    }\n\n    div.root>header>p {\n        font-size: .16rem;\n    }\n",""])}}]);