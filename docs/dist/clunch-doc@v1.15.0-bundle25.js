(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,r){"use strict";r.r(t);var a=[{name:"ui-process-wave",attrs:{":process":"process",":deep":"deep",":cx":"0.5*_width",":cy":"0.5*_height",":radius":"0.45*_min"},children:[]},{name:"text",attrs:{":x":"0.5*_width",":y":"0.5*_height",":content":"process_value",align:"center","font-size":"50"},children:[]}],n=r(26),s=r.n(n),c=function(e,t,r,a,n,s,c,i){var o=e(t,r,(.5-s)*Math.PI,t+a,r),d=e(t,r,(1.5-s)*Math.PI,t+a,r);n.beginPath().moveTo(o[0],o[1]).arc(t,r,a,(.5-s)*Math.PI,2*s*Math.PI).bezierCurveTo(d[0]+.5*(o[0]-d[0])*c,o[1]+a*c*i*(s>.5?1-s:s),d[0]+.5*(o[0]-d[0])*(1+c),o[1]-a*(1-c)*i*(s>.5?1-s:s),o[0],o[1]).fill()},i=["number","$rotate",function(e,t){return{attrs:{process:e()(!0),cx:e()(!0),cy:e()(!0),radius:e()(!0),deep:e()(!0)},link:function(e,r){[["#fff7e9",r.radius],["#ffe1b1",.9*r.radius],["#ffffff",.78*r.radius]].forEach((function(t){e.config("fillStyle",t[0]).fillCircle(r.cx,r.cy,t[1])})),e.config({fillStyle:"#ff7f08","arc-start-cap":"round","arc-end-cap":"round"}).fillArc(r.cx,r.cy,.78*r.radius,.9*r.radius,-.5*Math.PI,2*-Math.PI*r.process);var a=r.deep,n=1;a>.5&&(a-=.5,n=-1),a*=2,c(t,r.cx,r.cy,.6*r.radius,e.config("fillStyle","#ff7f08"),r.process,a,n),c(t,r.cx,r.cy,.6*r.radius,e.config("fillStyle","#fead2e"),r.process,a,-n)}}}];s.a.series("ui-process-wave",i);var o={mounted:function(){var e=document.getElementById("examples-github-banner");e.style.display="block",e.setAttribute("href","https://github.com/hai2007/clunch/tree/master/docs/src/pages/examples/page5"),window.clunch=new s.a({el:document.getElementById("canvas"),render:a,time:2e3,data:function(){return{process:0,process_value:"0.00%",deep:0}},mounted:function(){var e=this;this.process=Math.random(),this.process_value=(100*this.process).toFixed(2)+"%",setInterval((function(){e.process=Math.random(),e.process_value=(100*e.process).toFixed(2)+"%"}),4e3),this.deep=1,setInterval((function(){e.deep=0==e.deep?1:0}),2e3)}})}};r(83);o.render=function(e){return e("div",{quickpaper:"","data-quickpaper-9265ef66":""},[e("div",{id:"canvas","data-quickpaper-9265ef66":""},[])])};t.default=o},83:function(e,t,r){var a=r(84);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(2).default)("data-quickpaper-9265ef66",a,!0)},84:function(e,t,r){(e.exports=r(1)(!1)).push([e.i,"\r\n    div {\r\n        width: 100vw;\r\n        height: 100vh;\r\n    }\r\n",""])}}]);