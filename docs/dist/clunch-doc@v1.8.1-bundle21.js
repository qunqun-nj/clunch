(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{79:function(e,t,a){var c=a(80);"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,a(1).default)("data-quickpaper-c67b8de6",c,!0)},80:function(e,t,a){(e.exports=a(0)(!1)).push([e.i,"\n    div {\n        width: 100vw;\n        height: 100vh;\n    }\n",""])},88:function(e,t,a){"use strict";a.r(t);var c=[{name:"ui-process-wave",attrs:{":process":"process",":deep":"deep",":cx":"0.5*_width",":cy":"0.5*_height",":radius":"0.45*_min"},children:[]},{name:"text",attrs:{":x":"0.5*_width",":y":"0.5*_height",":content":"process_value",align:"center","font-size":"50"},children:[]}],r=a(31),n=a.n(r),s=function(e,t,a,c,r,n,s,i){var o=e(t,a,(.5-n)*Math.PI,t+c,a),d=e(t,a,(1.5-n)*Math.PI,t+c,a);r.beginPath().moveTo(o[0],o[1]).arc(t,a,c,(.5-n)*Math.PI,2*n*Math.PI).bezierCurveTo(d[0]+.5*(o[0]-d[0])*s,o[1]+c*s*i*(n>.5?1-n:n),d[0]+.5*(o[0]-d[0])*(1+s),o[1]-c*(1-s)*i*(n>.5?1-n:n),o[0],o[1]).fill()},i=["number","$rotate",function(e,t){return{attrs:{process:e()(!0),cx:e()(!0),cy:e()(!0),radius:e()(!0),deep:e()(!0)},link:function(e,a){[["#fff7e9",a.radius],["#ffe1b1",.9*a.radius],["#ffffff",.78*a.radius]].forEach((function(t){e.config("fillStyle",t[0]).fillCircle(a.cx,a.cy,t[1])})),e.config({fillStyle:"#ff7f08","arc-start-cap":"round","arc-end-cap":"round"}).fillArc(a.cx,a.cy,.78*a.radius,.9*a.radius,-.5*Math.PI,2*-Math.PI*a.process);var c=a.deep,r=1;c>.5&&(c-=.5,r=-1),c*=2,s(t,a.cx,a.cy,.6*a.radius,e.config("fillStyle","#ff7f08"),a.process,c,r),s(t,a.cx,a.cy,.6*a.radius,e.config("fillStyle","#fead2e"),a.process,c,-r)}}}];n.a.series("ui-process-wave",i);var o={mounted:function(){var e=document.getElementById("examples-github-banner");e.style.display="block",e.setAttribute("href","https://github.com/hai2007/clunch/tree/master/docs/src/pages/examples/page5"),window.clunch=new n.a({el:document.getElementById("canvas"),render:c,time:2e3,data:function(){return{process:0,process_value:"0.00%",deep:0}},mounted:function(){var e=this;this.process=Math.random(),this.process_value=(100*this.process).toFixed(2)+"%",setInterval((function(){e.process=Math.random(),e.process_value=(100*e.process).toFixed(2)+"%"}),4e3),this.deep=1,setInterval((function(){e.deep=0==e.deep?1:0}),2e3)}})}};a(79);o.render=function(e){return e("div",{quickpaper:"","data-quickpaper-c67b8de6":""},[e("div",{id:"canvas","data-quickpaper-c67b8de6":""},[])])};t.default=o}}]);