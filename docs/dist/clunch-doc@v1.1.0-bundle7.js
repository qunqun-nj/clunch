(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{31:function(a,e,t){"use strict";var c=t(6),i=t.n(c);e.a=function(a,e){i()("."+a).attr("active","no"),i()("."+a+"."+e).attr("active","yes")}},32:function(a,e,t){"use strict";var c=t(6),i=t.n(c);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var e=a.split("&"),t={};return e.forEach((function(a){var e=a.split("=");t[e[0]]=e[1]})),t}().fixed;if(t){var c=i()("#fixed-"+t);if(c.length>0){var r=c[0].offsetTop-e,s=a.scrollTop||0;i.a.animation((function(e){a.scrollTop=(r-s)*e+s}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}},44:function(a,e,t){var c=t(45);"string"==typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);(0,t(2).default)("data-icrush-9f7e8c1a",c,!0)},45:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])},98:function(a,e,t){"use strict";t.r(e);var c=t(31),i=t(32),r={created:function(){Object(c.a)("menu-2","series")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};t(44);r.render=function(a){return a("div",{class:"doc-view","data-icrush-9f7e8c1a":""},[a("header",{id:"fixed-top","data-icrush-9f7e8c1a":""},["图形小组件"]),a("h1",{id:"fixed-create","data-icrush-9f7e8c1a":""},["如何自定义小组件"]),a("pre",{"ui-code":"","data-icrush-9f7e8c1a":""},["Clunch.series('ui-demo',[\"type1\",...,\"server1\", ..., function($type1,...,server1, ...){↵    return {↵        // 定义属性，可选↵        attrs:{↵            // 自定义的图形组件上的属性都需要提前在这里配置↵            // $type1表示类型生成方法，↵            // 一共有这些type:'boolean', 'number', 'json', 'string', 'color', 'any'↵            // 类型生成方法的参数defaultValue可选，如果没有默认值可以不传递，表示必输↵            // 类型生成方法执行以后返回的是一个函数，↵            // 如果此属性参与动画，可以传递true或函数，否则可以省略：$type1(defaultValue)↵            // 如果传递函数，格式：(newValue, oldValue, depp)=>{ 返回结果 }↵            attrName1:$type1(defaultValue)(boolean|function),↵            ......↵        },↵        // 子组件配置，可选↵        subAttrs: {↵            \"子组件名称1\":{↵                ......↵                // 这里是子组件属性，和attr一样↵            },↵            ......↵        },↵        // 定义区域或子区域，可选↵        region:{↵            default: function (render, attr) {↵                // 获取画笔，用这只画笔绘制的区域就被标识为默认区域↵                // 其中subRegionName表示子区域表示，可选，可以是任意字符串↵                // 这意味着一个区域可以有任意多的子区域↵                var painter=render(subRegionName);↵            },↵↵            // 除了默认区域外，我们还可以添加待名称的区域↵            regionName1: function (render, attr) {},↵            ......↵        },↵        // 具体的绘制方法，必输↵        link(painter, attr) {↵            // 绘制↵        }↵    };↵}]);"]),a("p",{class:"warn","data-icrush-9f7e8c1a":""},["温馨提示：上面的",a("span",{class:"public","data-icrush-9f7e8c1a":""},["server1"]),"表示服务，所有可以使用的内置服务请查看",a("a",{href:"#/api/service?fixed=top",target:"_blank","data-icrush-9f7e8c1a":""},["服务"]),"一节。"]),a("h1",{id:"fixed-attribute","data-icrush-9f7e8c1a":""},["组件属性"]),a("p",{"data-icrush-9f7e8c1a":""},["需要说明的是以下几点："]),a("ul",{"data-icrush-9f7e8c1a":""},[a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["$开头的"]),"或",a("span",{class:"important","data-icrush-9f7e8c1a":""},["_开头的"]),"：已经被clunch内部特殊使用了，请勿使用；"]),a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["#"]),"、",a("span",{class:"important","data-icrush-9f7e8c1a":""},[":"]),"和",a("span",{class:"important","data-icrush-9f7e8c1a":""},["@"]),"：已经作为特殊的属性切割符了，请勿在自定义组件的属性名中出现；"]),a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["c-开头的"]),"：作为clunch内置指令保留字段，也请勿使用；"])]),a("h3",{id:"fixed-number","data-icrush-9f7e8c1a":""},["number类型"]),a("ul",{"data-icrush-9f7e8c1a":""},[a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["deg"]),"：表示角度，例如2deg；"]),a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["pi"]),"：表示弧度，例如2pi。"])]),a("h3",{id:"fixed-inner-attr","data-icrush-9f7e8c1a":""},["内置属性"]),a("p",{"data-icrush-9f7e8c1a":""},["对于所有的组件，除了组件自己定义的特殊属性外，还有一类他们共有的属性，这些属性由于框架本身提供，用于提供特殊的支持。"]),a("ul",{"data-icrush-9f7e8c1a":""},[a("li",{"data-icrush-9f7e8c1a":""},[a("span",{class:"important","data-icrush-9f7e8c1a":""},["$id"]),"：组件的唯一标识（组件的子组件属性也支持这个属性），可选，默认由框架自动给出。"])]),a("h1",{id:"fixed-core","data-icrush-9f7e8c1a":""},["核心组件"]),a("h3",{id:"fixed-group","data-icrush-9f7e8c1a":""},["组",a("span",{class:"sub-title","data-icrush-9f7e8c1a":""},["group"])]),a("pre",{"ui-code":"","data-icrush-9f7e8c1a":""},["\x3c!-- 里面的组件可以成为一组 --\x3e↵<group>↵    ......↵</group>"])])};e.default=r}}]);