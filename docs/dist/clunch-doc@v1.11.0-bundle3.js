(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{24:function(r,n,e){"use strict";var i=e(3);n.a=function(r,n){for(var e=i.a.find(document.getElementById("root"),(function(n){return i.a.hasClass(n,r)})),t=0;t<e.length;t++)e[t].setAttribute("active","no");i.a.find(document.getElementById("root"),(function(e){return i.a.hasClass(e,[r,n])}))[0].setAttribute("active","yes")}},27:function(r,n,e){r.exports=e.p+"dist/view6.png"},28:function(r,n,e){r.exports=e.p+"dist/view4.png"},29:function(r,n,e){r.exports=e.p+"dist/view3.png"},30:function(r){r.exports=JSON.parse('{"name":"clunch","version":"1.4.4","description":"🎨 The Progressive JavaScript Interactive Picture Framework.","main":"dist/clunch.min.js","typings":"types/index.d.ts","scripts":{"start":"npm install && npm run dev","dev":"rollup --config rollup.config.js -i ./src/entry-template.js -o ./dist/clunch-template.js --watch","dev:core":"rollup --config rollup.config.js -i ./src/entry.core.js -o ./dist/clunch.core.js --watch","build":"npm run rollup && npm run uglifyjs && hai2007_nodejs --config ./hai2007_nodejs.config.js","rollup":"npm run rollup:core && npm run rollup:clunch && npm run rollup:core@template && npm run rollup:clunch@template","rollup:clunch":"rollup --config rollup.config.js -i ./src/entry.js -o ./dist/clunch.js","rollup:clunch@template":"rollup --config rollup.config.js -i ./src/entry-template.js -o ./dist/clunch-template.js","rollup:core":"rollup --config rollup.config.js -i ./src/entry.core.js -o ./dist/clunch.core.js","rollup:core@template":"rollup --config rollup.config.js -i ./src/entry-template.core.js -o ./dist/clunch-template.core.js","uglifyjs":"npm run uglifyjs:core && npm run uglifyjs:clunch && npm run uglifyjs:core@template && npm run uglifyjs:clunch@template","uglifyjs:clunch":"uglifyjs ./dist/clunch.js -m -o ./dist/clunch.min.js","uglifyjs:clunch@template":"uglifyjs ./dist/clunch-template.js -m -o ./dist/clunch-template.min.js","uglifyjs:core":"uglifyjs ./dist/clunch.core.js -m -o ./dist/clunch.core.min.js","uglifyjs:core@template":"uglifyjs ./dist/clunch-template.core.js -m -o ./dist/clunch-template.core.min.js"},"repository":{"type":"git","url":"git+https://github.com/hai2007/clunch.git"},"keywords":["javascript","framework","picture","image"],"author":"你好2007","license":"MIT","bugs":{"url":"https://github.com/hai2007/clunch/issues"},"homepage":"https://hai2007.gitee.io/clunch/","devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@hai2007/nodejs":"^0.1.0","@hai2007/tool":"^0.6.2","@rollup/plugin-babel":"^5.2.1","rollup":"^2.33.2","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-node-resolve":"^5.2.0","uglify-js":"^3.11.6"},"dependencies":{"@hai2007/algorithm":"^0.5.1"}}')},31:function(r,n,e){var i=e(32);"string"==typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);(0,e(2).default)("data-quickpaper-19625dd4",i,!0)},32:function(r,n,e){n=r.exports=e(1)(!1);var i=e(5),t=i(e(6)),o=i(e(27)),a=i(e(28)),d=i(e(29));n.push([r.i,"\r\n    p.warn {\r\n        color: rgb(252, 2, 2);\r\n        font-size: 12px;\r\n        margin-left: 10px;\r\n        font-weight: 800;\r\n    }\r\n\r\n    div.root>div.help {\r\n        background-color: white;\r\n        text-align: center;\r\n        padding: .5rem 0;\r\n    }\r\n\r\n    div.root>div.help>h2 {\r\n        font-weight: 300;\r\n        font-size: .3rem;\r\n    }\r\n\r\n    div.root>div.help>p {\r\n        line-height: 3em;\r\n    }\r\n\r\n    div.root>div.help a {\r\n        color: red;\r\n        font-weight: 800;\r\n        padding: 0 .05rem;\r\n    }\r\n\r\n    div.root>div.footer {\r\n        text-align: center;\r\n        background-color: #fafafa;\r\n        border-top: 1px solid #d3d0d0;\r\n        line-height: 2em;\r\n        padding: .2rem 0;\r\n        font-size: .14rem;\r\n    }\r\n\r\n    div.root>div.footer a {\r\n        padding: 0 .05rem;\r\n    }\r\n\r\n    div.root>div.begin>p.info {\r\n        line-height: 1.6em;\r\n    }\r\n\r\n    div.root>div.begin {\r\n        padding: .15rem .5rem;\r\n        color: #3a585f;\r\n        text-align: center;\r\n        width: 8rem;\r\n        margin: auto;\r\n        margin-bottom: .5rem;\r\n    }\r\n\r\n    div.root>div.begin>h2 {\r\n        margin: .4rem 0 .2rem 0;\r\n        font-weight: 300;\r\n        font-size: .4rem;\r\n    }\r\n\r\n    div.root>div.begin>p.logo>h3 {\r\n        margin: .4rem 0 .2rem 0;\r\n        font-weight: 800;\r\n        font-size: .26rem;\r\n    }\r\n\r\n    div.root>div.begin>p.logo>div {\r\n        line-height: 1.8em;\r\n        text-align: left;\r\n        text-indent: 2em;\r\n    }\r\n\r\n    div.root>div.begin>p.logo>a {\r\n        text-decoration: none;\r\n        height: .4rem;\r\n        line-height: .4rem;\r\n        padding: 0 .2rem;\r\n        border-radius: .1rem;\r\n        display: inline-block;\r\n        background-color: rgb(49, 152, 236);\r\n        color: white;\r\n        margin-top: .1rem;\r\n    }\r\n\r\n    div.root>div.begin>p.logo {\r\n        margin-top: .3rem;\r\n        padding-left: 3rem;\r\n        background-image: url("+t+");\r\n        background-repeat: no-repeat;\r\n        background-position: 1.5rem center;\r\n        background-size: auto 140px;\r\n    }\r\n\r\n    div.root>div.begin>p a {\r\n        color: blue;\r\n        text-decoration: underline;\r\n    }\r\n\r\n    div.root>div.good {\r\n        background-color: #fff;\r\n        padding: .15rem .5rem;\r\n        color: #3a585f;\r\n        text-align: center;\r\n    }\r\n\r\n    div.root>div.good>div {\r\n        width: 8rem;\r\n        margin: auto;\r\n        line-height: 1.6em;\r\n    }\r\n\r\n    div.root>div.good>div:not(:last-child) {\r\n        border-bottom: 1px solid gray;\r\n        padding-bottom: 1rem;\r\n    }\r\n\r\n    div.root>div.good>div>h2 {\r\n        margin: .4rem 0 .2rem 0;\r\n        font-weight: 300;\r\n        font-size: .4rem;\r\n    }\r\n\r\n    div.root>div.good>div>p {\r\n        text-align: left;\r\n        text-indent: 2em;\r\n    }\r\n\r\n    div.root>div.good>div>p>a {\r\n        color: blue;\r\n        text-decoration: underline;\r\n    }\r\n\r\n    div.root>div.good>div>.demo {\r\n        display: block;\r\n        height: 300px;\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n        cursor: pointer;\r\n        position: relative;\r\n    }\r\n\r\n    div.root>div.good>div>.demo.index0 {\r\n        background-size: auto 300px;\r\n        background-image: url("+o+");\r\n        height: 200px;\r\n    }\r\n\r\n    div.root>div.good>div>.demo.index1 {\r\n        background-size: auto 90%;\r\n        background-image: url("+a+");\r\n    }\r\n\r\n    div.root>div.good>div>.demo.index2 {\r\n        background-size: auto 85%;\r\n        background-image: url("+d+");\r\n    }\r\n\r\n    div.root {\r\n        background: #f1f0f0;\r\n        min-height: calc(100vh - .44rem);\r\n    }\r\n\r\n    div.root>header {\r\n        text-align: center;\r\n        font-size: .3rem;\r\n        line-height: 1.5em;\r\n        padding: .3rem 0;\r\n    }\r\n\r\n    div.root>header>span {\r\n        border: 1px solid gray;\r\n        background-color: white;\r\n        font-size: .12rem;\r\n        vertical-align: middle;\r\n        margin-left: .1rem;\r\n        padding: .03rem .06rem;\r\n        border-radius: .03rem;\r\n    }\r\n\r\n    div.root>header>p>a {\r\n        color: rgb(21, 113, 233);\r\n        padding: 0 .1rem;\r\n        text-decoration: underline;\r\n    }\r\n\r\n    div.root>header>p {\r\n        font-size: .16rem;\r\n    }\r\n",""])},95:function(r,n,e){"use strict";e.r(n);var i=e(30),t=e(24),o={data:function(){return{page:null,version:i.version}},created:function(){Object(t.a)("menu-1","guide")}};e(31);o.render=function(r){return r("div",{quickpaper:"","data-quickpaper-19625dd4":""},[r("div",{class:"root","data-quickpaper-19625dd4":""},[r("header",{"data-quickpaper-19625dd4":""},["clunch.js 官方文档",r("span",{"data-quickpaper-19625dd4":""},["{{version}}"]),r("p",{"data-quickpaper-19625dd4":""},["特别感谢",r("a",{href:"https://github.com/hai2007/algorithm.js",target:"_blank","data-quickpaper-19625dd4":""},["algorithm.js"]),"提供底层技术支持！"])]),r("div",{class:"good","data-quickpaper-19625dd4":""},[r("div",{"data-quickpaper-19625dd4":""},[r("h2",{"data-quickpaper-19625dd4":""},["数据驱动绘图"]),r("p",{"data-quickpaper-19625dd4":""},["如果你可以正确的对业务数据进行修改，你就可以编辑一个交互的拖拽web应用。数据驱动绘图的设计，使得你只需把精力放在你的业务数据处理上，它负责绘图等比较难搞的部分。"]),r("a",{class:"demo index0",href:"#/examples/page6",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-19625dd4":""},[]),r("p",{"data-quickpaper-19625dd4":""},["上面是一个流程图，通过给每个节点和连线添加交互事件获取用户意图后，直接修改数据页面实时更新，就实现了一个简单的流程图编辑器。"])]),r("div",{"data-quickpaper-19625dd4":""},[r("h2",{"data-quickpaper-19625dd4":""},["复杂图形的区域管理"]),r("p",{"data-quickpaper-19625dd4":""},["只要你可以对普通标签添加交互事件，就可以处理几乎任意图形的交互事件。通过对单一标签的画布进行抽象，我们提供了区域和子区域的概念，你可以像操作标签一样操作canvas画布中的具体图形。"]),r("a",{class:"demo index1",href:"#/examples/page4",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-19625dd4":""},[]),r("p",{"data-quickpaper-19625dd4":""},["上面是一份中国地图（未包括海洋等部分区域），通过",r("a",{href:"#/api/directive?fixed=c-on",target:"_blank","data-quickpaper-19625dd4":""},["c-on"]),"指令就可以给某个省添加点击事件，点击以后提示你点击了谁。"])]),r("div",{"data-quickpaper-19625dd4":""},[r("h2",{"data-quickpaper-19625dd4":""},["内置差异对比和过渡动画"]),r("p",{"data-quickpaper-19625dd4":""},["如果图形改变过于僵硬需要添加动画效果怎么办？clunch.js会自动启动数据改变前后差异分析，然后给出合适的过渡方案，启动过渡动画。"]),r("a",{class:"demo index2",href:"#/examples/page3",title:"点击可以查看运行效果",target:"_blank","data-quickpaper-19625dd4":""},[]),r("p",{"data-quickpaper-19625dd4":""},["上面的树图，点击某个结点后删除对应结点的孩子以后，树图会自动过渡成删除后的树图而不是突然改变。"])])]),r("div",{class:"begin","data-quickpaper-19625dd4":""},[r("h2",{"data-quickpaper-19625dd4":""},["开始"]),r("p",{class:"info","data-quickpaper-19625dd4":""},["除了上面提到的，我们还进行了一系列的优化，请在使用中感受。↵                初识clunch.js，可以先通过",r("a",{href:"#/course/introduce?fixed=top",target:"_blank","data-quickpaper-19625dd4":""},["教程"]),"来了解基本的代码，学习整个绘图的基本流程。"]),r("p",{class:"logo","data-quickpaper-19625dd4":""},[r("h3",{"data-quickpaper-19625dd4":""},["探索clunch.js的使用"]),r("div",{"data-quickpaper-19625dd4":""},["结合",r("a",{href:"#/api",target:"_blank","data-quickpaper-19625dd4":""},["接口文档"]),"多做练习，有问题联系我们！"]),r("a",{href:"https://github.com/hai2007/clunch",target:"_blank","data-quickpaper-19625dd4":""},["Github上查看源码"])])]),r("div",{class:"help","data-quickpaper-19625dd4":""},[r("h2",{"data-quickpaper-19625dd4":""},["需要帮助？"]),r("p",{"data-quickpaper-19625dd4":""},["无论何时，出于什么原因，有任何需要帮助的，请来",r("a",{href:"https://github.com/hai2007/clunch",target:"_blank","data-quickpaper-19625dd4":""},["issue"]),"告诉我们，包括一些好的建议！"])]),r("div",{class:"footer","data-quickpaper-19625dd4":""},["Copyright © 2020-2021",r("a",{href:"https://hai2007.gitee.io/sweethome/",target:"_blank","data-quickpaper-19625dd4":""},["hai2007 走一步，再走一步。"]),"All rights reserved.",r("br",{"data-quickpaper-19625dd4":""},[]),"本项目由“你好2007”设计、开发和维护"])])])};n.default=o}}]);