(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,n){"use strict";n.r(t);var i=[{name:"group",attrs:{"c-for":"(value,index) in values"},children:[{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-1 * ( _height - 100 )","fill-color":"rgba(220, 220, 220, 0.8)",type:"fill"},children:[]},{name:"rect",attrs:{":x":"( _width - 100 ) / values.length * ( index + 0.1 ) + 50",":y":"_height - 50",":width":"( _width - 100 ) / values.length * 0.8",":height":"-0.005 * value * ( _height - 100 ) * deep","fill-color":"red",type:"fill"},children:[]}]},{name:"ruler",attrs:{direction:"LR",x:"50",":y":"_height - 50",":length":"_width - 100",value:'["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]',"value-position":"between"},children:[]},{name:"ruler",attrs:{direction:"BT",x:"50",":y":"_height - 50",":length":"_height - 100",value:"[0,50,100,150,200]","mark-direction":"left"},children:[]}],a=n(26),r=n.n(a),h={mounted:function(){var e=document.getElementById("examples-github-banner");e.style.display="block",e.setAttribute("href","https://github.com/hai2007/clunch/tree/master/docs/src/pages/examples/page1"),window.clunch=new r.a({el:document.getElementById("canvas"),render:i,data:function(){return{deep:0,values:[120,200,150,80,70,110,130]}},mounted:function(){var e=this;setTimeout((function(){e.deep=1}),500)}})}};n(72);h.render=function(e){return e("div",{quickpaper:"","data-quickpaper-067e236e":""},[e("div",{id:"canvas","data-quickpaper-067e236e":""},[])])};t.default=h},72:function(e,t,n){var i=n(73);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("data-quickpaper-067e236e",i,!0)},73:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\r\n    div {\r\n        width: 100vw;\r\n        height: 100vh;\r\n    }\r\n",""])}}]);