(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{85:function(e,n,i){var t=i(86);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i(2).default)("data-quickpaper-b55fe264",t,!0)},86:function(e,n,i){(e.exports=i(1)(!1)).push([e.i,"\r\n    div {\r\n        width: 100vw;\r\n        height: 100vh;\r\n    }\r\n",""])},98:function(e,n,i){"use strict";i.r(n);var t=[{name:"ui-line",attrs:{"c-for":"(value, key) in lct.lines",":begin":"lct.nodes[value.begin].position",":end":"lct.nodes[value.end].position",":info":"value.info"},children:[]},{name:"ui-node",attrs:{"c-for":"(value, key) in lct.nodes","c-on:mousedown":"doSelectWhoDrag",":_id":"key",":type":"value.type",":title":"value.title",":x":"value.position.x",":y":"value.position.y"},children:[]},{name:"text",attrs:{x:"50",y:"30"},children:["温馨提示：你可以试着拖拽一下结点！"]}],o=i(26),l=i.n(o),a=["json","string","$dot","$move",function(e,n,i,t){return{attrs:{begin:e(),end:e(),info:n(void 0)},region:{default:function(e,n){e().beginPath().config({lineWidth:20}).moveTo(n.begin.x,n.begin.y).lineTo(n.end.x,n.end.y).stroke()}},link:function(e,n){e.config({strokeStyle:"#3a88cb",fillStyle:"#3a88cb"}),e.beginPath().moveTo(n.begin.x,n.begin.y).lineTo(n.end.x,n.end.y).stroke();var o=i({d:[n.end.x-n.begin.x,n.end.y-n.begin.y],c:[.5*(n.begin.x+n.end.x),.5*(n.begin.y+n.end.y)],p:[.5*(n.begin.x+n.end.x),.5*(n.begin.y+n.end.y)]}),l=o.move(6).value(),a=o.move(-6).rotate(Math.PI/3*2).move(6).value(),d=o.move(-6).rotate(Math.PI/3*2).move(6).value();if(e.beginPath().moveTo(l[0],l[1]).lineTo(a[0],a[1]).lineTo(d[0],d[1]).fill(),null!=n.info){var s=t(n.end.x-n.begin.x,n.end.y-n.begin.y,50,n.begin.x,n.begin.y);e.config({"font-size":12,textAlign:"left",textBaseline:"middle",fillStyle:"#07566c"}).fillText(n.info,s[0],s[1])}}}}],d=["number","string",function(e,n){return{attrs:{type:n(),title:n(),x:e(),y:e()},region:{default:function(e,n){e().fillRect(n.x-50,n.y-15,100,30)}},link:function(e,n){switch(e.config({fillStyle:"#096ec8"}),n.type){case"begin-end":e.beginPath().moveTo(n.x-35,n.y-15).lineTo(n.x+35,n.y-15).arc(n.x+35,n.y,15,-Math.PI/2,Math.PI).lineTo(n.x-35,n.y+15).arc(n.x-35,n.y,15,Math.PI/2,Math.PI).fill();break;case"estimate":e.fillRect(n.x-50,n.y-15,100,30);break;case"calc":e.beginPath().moveTo(n.x,n.y-15).lineTo(n.x+50,n.y).lineTo(n.x,n.y+15).lineTo(n.x-50,n.y).fill();break;case"exec":e.beginPath().moveTo(n.x-35,n.y-15).lineTo(n.x+50,n.y-15).lineTo(n.x+35,n.y+15).lineTo(n.x-50,n.y+15).fill()}e.config({textAlign:"center",textBaseline:"middle","font-size":12,fillStyle:"white"}).fillText(n.title,n.x,n.y)}}}],s={nodes:{no1:{title:"开始",type:"begin-end",position:{x:303,y:78}},no2:{title:"初始化",type:"estimate",position:{x:297,y:168}},no3:{title:"检查状态",type:"exec",position:{x:299,y:288}},no4:{title:"是否正常?",type:"calc",position:{x:431,y:210}},no5:{title:"加载数据",type:"estimate",position:{x:572,y:139}},no6:{title:"运行",type:"exec",position:{x:570,y:251}},no7:{title:"是否完成?",type:"calc",position:{x:709,y:196}},no8:{title:"结束",type:"begin-end",position:{x:871,y:202}}},lines:{line1:{begin:"no1",end:"no2",info:""},line2:{begin:"no2",end:"no3",info:""},line3:{begin:"no3",end:"no4",info:""},line4:{begin:"no4",end:"no2",info:"否"},line5:{begin:"no4",end:"no5",info:"是"},line6:{begin:"no5",end:"no6",info:""},line7:{begin:"no6",end:"no7",info:""},line8:{begin:"no7",end:"no5",info:"否"},line9:{begin:"no7",end:"no8",info:"是"}}};l.a.series("ui-node",d).series("ui-line",a);var c={mounted:function(){var e=document.getElementById("examples-github-banner");e.style.display="block",e.setAttribute("href","https://github.com/hai2007/clunch/tree/master/docs/src/pages/examples/page6"),window.clunch=new l.a({el:document.getElementById("canvas"),render:t,animation:!1,data:function(){return{lct:s,dragNodeId:null,help:0}},methods:{doSelectWhoDrag:function(e){this.dragNodeId=e.id}}}).$bind("mousemove",(function(e){null!=this.dragNodeId&&(this.lct.nodes[this.dragNodeId].position={x:e.left,y:e.top},this.help=(new Date).valueOf())})).$bind("mouseup",(function(){this.dragNodeId=null}))}};i(85);c.render=function(e){return e("div",{quickpaper:"","data-quickpaper-b55fe264":""},[e("div",{id:"canvas","data-quickpaper-b55fe264":""},[])])};n.default=c}}]);