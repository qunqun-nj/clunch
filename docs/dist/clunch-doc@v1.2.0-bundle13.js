(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{31:function(a,t,c){"use strict";var i=c(6),s=c.n(i);t.a=function(a,t){s()("."+a).attr("active","no"),s()("."+a+"."+t).attr("active","yes")}},32:function(a,t,c){"use strict";var i=c(6),s=c.n(i);t.a=function(a,t){t=t||0,a=a||document.documentElement;var c=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),c={};return t.forEach((function(a){var t=a.split("=");c[t[0]]=t[1]})),c}().fixed;if(c){var i=s()("#fixed-"+c);if(i.length>0){var d=i[0].offsetTop-t,r=a.scrollTop||0;s.a.animation((function(t){a.scrollTop=(d-r)*t+r}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}},58:function(a,t,c){var i=c(59);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,c(2).default)("data-icrush-7134838d",i,!0)},59:function(a,t,c){(a.exports=c(1)(!1)).push([a.i,"",""])},96:function(a,t,c){"use strict";c.r(t);var i=c(31),s=c(32),d={created:function(){Object(i.a)("menu-2","install")},mounted:function(){Object(s.a)(document.getElementById("course-id"),44)}};c(58);d.render=function(a){return a("div",{class:"doc-view","data-icrush-7134838d":""},[a("header",{id:"fixed-top","data-icrush-7134838d":""},["说明"]),a("h1",{id:"fixed-compatibility","data-icrush-7134838d":""},["兼容性"]),a("p",{"data-icrush-7134838d":""},["本项目不支持 IE9 以下版本（IE9支持），因为 IE9 以下对",a("a",{href:"https://caniuse.com/#search=canvas",target:"_blank","data-icrush-7134838d":""},["Canvans"]),"本身就没有很好的支持，而且使用的人越来越少，没有太多兼容的意义。"]),a("h1",{id:"fixed-log","data-icrush-7134838d":""},["更新日志"]),a("p",{"data-icrush-7134838d":""},["每个版本的更新日志见：",a("a",{href:"https://github.com/hai2007/clunch/blob/master/CHANGELOG",target:"_blank","data-icrush-7134838d":""},["Github"])]),a("h2",{id:"fixed-script","data-icrush-7134838d":""},["直接用",a("span",{class:"important","data-icrush-7134838d":""},["script"]),"引入"]),a("p",{"data-icrush-7134838d":""},["直接下载并用script标签引入，",a("span",{class:"important","data-icrush-7134838d":""},["Clunch"]),"会被注册为一个全局变量。"]),a("h1",{id:"fixed-cnd","data-icrush-7134838d":""},["CDN"]),a("pre",{"ui-code":"","data-icrush-7134838d":""},['<script src="https://cdn.jsdelivr.net/npm/clunch"><\/script>']),a("h2",{id:"fixed-npm","data-icrush-7134838d":""},["通过",a("span",{class:"important","data-icrush-7134838d":""},["NPM"]),"方式管理"]),a("p",{"data-icrush-7134838d":""},["同样的，你可以使用 NPM 安装。"]),a("pre",{"ui-code":"","data-icrush-7134838d":""},["npm install --save clunch"]),a("p",{"data-icrush-7134838d":""},["安装好了以后，在需要的地方引入即可："]),a("pre",{"ui-code":"","data-icrush-7134838d":""},["import Clunch from 'clunch';"]),a("h1",{id:"fixed-types","data-icrush-7134838d":""},["对不同构建版本的解释"]),a("p",{"data-icrush-7134838d":""},["在打包后的文件夹",a("span",{class:"important","data-icrush-7134838d":""},["dist/"]),"下有很多不同类型的clunch.js打包文件，我们下面对其进行解释："]),a("ul",{"data-icrush-7134838d":""},[a("li",{"data-icrush-7134838d":""},[a("span",{class:"important","data-icrush-7134838d":""},["clunch.core.js"]),"：只包含最核心的部分,不支持template属性。"]),a("li",{"data-icrush-7134838d":""},[a("span",{class:"important","data-icrush-7134838d":""},["clunch-template.core.js"]),"：只包含最核心的内容，支持template属性。"]),a("li",{"data-icrush-7134838d":""},[a("span",{class:"important","data-icrush-7134838d":""},["clunch.js"]),"：包含了全部的功能，不支持template属性。"]),a("li",{"data-icrush-7134838d":""},[a("span",{class:"important","data-icrush-7134838d":""},["clunch-template.js"]),"：包含了全部的功能，支持template属性。"])]),a("p",{class:"warn","data-icrush-7134838d":""},["温馨提示：同名带",a("span",{class:"public","data-icrush-7134838d":""},["clunch.xxx.min.js"]),"的表示压缩文件。"]),a("p",{"data-icrush-7134838d":""},["我们默认导出的是",a("span",{class:"important","data-icrush-7134838d":""},["clunch.min.js"]),"文件，在实际项目中，请根据具体情况调整，这有益于减小打包后的体积。"]),a("h3",{id:"fixed-types-webpack","data-icrush-7134838d":""},["webpack"]),a("p",{"data-icrush-7134838d":""},["如果你使用npm安装后，基于webpack搭建开发环境，你可以这样修改默认导出文件："]),a("pre",{"ui-code":"","data-icrush-7134838d":""},["...↵    resolve: {↵        alias: {↵            // 比如我们当前希望基于此进行二次开发↵            'clunch': require('path').resolve('clunch/dist/clunch.core.min.js')↵        }↵    },↵..."]),a("div",{class:"bottom-link","data-icrush-7134838d":""},[a("a",{href:"#/course/author?fixed=top",target:"_blank",class:"left","data-icrush-7134838d":""},["上一节：关于我们"]),a("a",{href:"#/course/introduce?fixed=top",target:"_blank",class:"right","data-icrush-7134838d":""},["下一节：开始使用"])])])};t.default=d}}]);