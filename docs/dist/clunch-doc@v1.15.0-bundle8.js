(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{111:function(a,t,e){"use strict";e.r(t);var c=e(24),i=e(25),r={created:function(){Object(c.a)("menu-2","series")},mounted:function(){Object(i.a)(document.getElementById("api-id"),44)}};e(37);r.render=function(a){return a("div",{quickpaper:"","data-quickpaper-79bca74b":""},[a("div",{class:"doc-view","data-quickpaper-79bca74b":""},[a("header",{id:"fixed-top","data-quickpaper-79bca74b":""},["图形小组件"]),a("h1",{id:"fixed-create","data-quickpaper-79bca74b":""},["如何自定义小组件"]),a("pre",{"q-code":"","data-quickpaper-79bca74b":""},["Clunch.series('ui-demo',[\"type1\",...,\"server1\", ..., function($type1,...,server1, ...){↵    return {↵        // 定义属性，可选↵        attrs:{↵            // 自定义的图形组件上的属性都需要提前在这里配置↵            // $type1表示类型生成方法，↵            // 一共有这些type:'boolean', 'number', 'json', 'string', 'color', 'any'↵            // 类型生成方法的参数defaultValue可选，如果没有默认值可以不传递，表示必输↵            // 类型生成方法执行以后返回的是一个函数，↵            // 如果此属性参与动画，可以传递true或函数，否则可以省略：$type1(defaultValue)↵            // 如果传递函数，格式：(newValue, oldValue, deep)=>{ 返回结果 }↵            attrName1:$type1(defaultValue)(boolean|function),↵            ......↵        },↵        // 子组件配置，可选↵        subAttrs: {↵            \"子组件名称1\":{↵                ......↵                // 这里是子组件属性，和attr一样↵            },↵            ......↵        },↵        // 定义区域或子区域，可选↵        region:{↵            default: function (render, attr) {↵                // 获取画笔，用这只画笔绘制的区域就被标识为默认区域↵                // 其中subRegionName表示子区域表示，可选，可以是任意字符串↵                // 这意味着一个区域可以有任意多的子区域↵                // data，可选，子区域传递给交互事件的数据，这里传递的话，可以在交互方法的形参里面获取到↵                var painter=render(subRegionName, data);↵            },↵↵            // 除了默认区域外，我们还可以添加待名称的区域↵            regionName1: function (render, attr) {},↵            ......↵        },↵        // 具体的绘制方法，必输↵        link(painter, attr) {↵            // 绘制↵        }↵    };↵}]);"]),a("p",{class:"warn","data-quickpaper-79bca74b":""},["温馨提示：上面的",a("span",{class:"public","data-quickpaper-79bca74b":""},["server1"]),"表示服务，所有可以使用的内置服务请查看",a("a",{href:"#/api/service?fixed=top",target:"_blank","data-quickpaper-79bca74b":""},["服务"]),"一节。"]),a("h1",{id:"fixed-attribute","data-quickpaper-79bca74b":""},["组件属性"]),a("p",{"data-quickpaper-79bca74b":""},["需要说明的是以下几点："]),a("ul",{"data-quickpaper-79bca74b":""},[a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["$开头的"]),"或",a("span",{class:"important","data-quickpaper-79bca74b":""},["_开头的"]),"：已经被clunch内部特殊使用了，请勿使用；"]),a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["#"]),"、",a("span",{class:"important","data-quickpaper-79bca74b":""},[":"]),"和",a("span",{class:"important","data-quickpaper-79bca74b":""},["@"]),"：已经作为特殊的属性切割符了，请勿在自定义组件的属性名中出现；"]),a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["c-开头的"]),"：作为clunch内置指令保留字段，也请勿使用；"])]),a("h3",{id:"fixed-number","data-quickpaper-79bca74b":""},["number类型"]),a("ul",{"data-quickpaper-79bca74b":""},[a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["deg"]),"：表示角度，例如2deg；"]),a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["pi"]),"：表示弧度，例如2pi。"])]),a("h3",{id:"fixed-inner-attr","data-quickpaper-79bca74b":""},["内置属性"]),a("p",{"data-quickpaper-79bca74b":""},["对于所有的组件，除了组件自己定义的特殊属性外，还有一类他们共有的属性，这些属性由框架本身提供，用于提供特殊的支持。下面来一一说明："]),a("h4",{"data-quickpaper-79bca74b":""},["_id"]),a("p",{"data-quickpaper-79bca74b":""},["组件的唯一标识（组件的子组件属性也支持这个属性），可选，默认由框架自动给出。"]),a("h4",{"data-quickpaper-79bca74b":""},["_animation"]),a("p",{"data-quickpaper-79bca74b":""},["表示当前组件参与动画的方式，也就是数据改变导致的过渡动画如何运行，有如下值可以选择："]),a("ul",{"data-quickpaper-79bca74b":""},[a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["lazy"]),"：懒惰的，比如一个组件存在c-if指令，由于数据改变由隐藏变成显示，会等动画结束后再显示，缺省值；"]),a("li",{"data-quickpaper-79bca74b":""},[a("span",{class:"important","data-quickpaper-79bca74b":""},["quick"]),"：快速的，比如一个组件存在c-if指令，由于数据改变由隐藏变成显示，会立刻显示。"])]),a("h1",{id:"fixed-core","data-quickpaper-79bca74b":""},["核心组件"]),a("h3",{id:"fixed-group","data-quickpaper-79bca74b":""},["组",a("span",{class:"sub-title","data-quickpaper-79bca74b":""},["group"])]),a("pre",{"q-code":"html","data-quickpaper-79bca74b":""},["\x3c!-- 里面的组件可以成为一组 --\x3e↵<group>↵    ......↵</group>"])])])};t.default=r},24:function(a,t,e){"use strict";var c=e(3);t.a=function(a,t){for(var e=c.a.find(document.getElementById("root"),(function(t){return c.a.hasClass(t,a)})),i=0;i<e.length;i++)e[i].setAttribute("active","no");c.a.find(document.getElementById("root"),(function(e){return c.a.hasClass(e,[a,t])}))[0].setAttribute("active","yes")}},25:function(a,t,e){"use strict";var c=[],i=null;t.a=function(a,t){t=t||0,a=a||document.documentElement;var e=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var t=a.split("&"),e={};return t.forEach((function(a){var t=a.split("=");e[t[0]]=t[1]})),e}().fixed;if(e){var r=document.getElementById("fixed-"+e);if(r){var p=r.offsetTop-t,n=a.scrollTop||0;!function(a,t,e){arguments.length<2&&(t=400);var r={timer:function(a,t,e){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return c.push({id:i,createTime:new Date,tick:a,duration:t,callback:e}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var a,t,e,i,p,n,u,d=c;for((c=[]).length=0,t=0;t<d.length;t++)a=(p=d[t]).createTime,e=p.tick,n=p.duration,i=p.callback,!1,(u=(+new Date-a)/n)>=1&&!0,e(u=u>1?1:u),u<1&&p.id?c.push(p):i&&i(u);c.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}},p=r.timer((function(t){a(t)}),t,e)}((function(t){a.scrollTop=(p-n)*t+n}),500,(function(){a.scrollTop=p}))}}else a.scrollTop=0;document.getElementById("root-view").scrollTop=0}},37:function(a,t,e){var c=e(38);"string"==typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);(0,e(2).default)("data-quickpaper-79bca74b",c,!0)},38:function(a,t,e){(a.exports=e(1)(!1)).push([a.i,"",""])}}]);