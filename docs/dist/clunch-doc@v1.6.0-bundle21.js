(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{81:function(e,t,r){var s=r(82);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,r(2).default)("data-icrush-153c7931",s,!0)},82:function(e,t,r){(e.exports=r(1)(!1)).push([e.i,"\r\n    div {\r\n        width: 100vw;\r\n        height: 100vh;\r\n    }\r\n",""])},91:function(e,t,r){"use strict";r.r(t);var s=[{name:"ui-process-wave",attrs:{":process":"process",":deep":"deep",":cx":"0.5*_width",":cy":"0.5*_height",":radius":"0.45*_min"},children:[]},{name:"text",attrs:{":x":"0.5*_width",":y":"0.5*_height",":content":"process_value",align:"center","font-size":"50"},children:[]}],n=r(33),c=r.n(n),a=function(e,t,r,s,n,c,a,i){var o=e(t,r,(.5-c)*Math.PI,t+s,r),d=e(t,r,(1.5-c)*Math.PI,t+s,r);n.beginPath().moveTo(o[0],o[1]).arc(t,r,s,(.5-c)*Math.PI,2*c*Math.PI).bezierCurveTo(d[0]+.5*(o[0]-d[0])*a,o[1]+s*a*i*(c>.5?1-c:c),d[0]+.5*(o[0]-d[0])*(1+a),o[1]-s*(1-a)*i*(c>.5?1-c:c),o[0],o[1]).fill()},i=["number","$rotate",function(e,t){return{attrs:{process:e()(!0),cx:e()(!0),cy:e()(!0),radius:e()(!0),deep:e()(!0)},link:function(e,r){[["#fff7e9",r.radius],["#ffe1b1",.9*r.radius],["#ffffff",.78*r.radius]].forEach((function(t){e.config("fillStyle",t[0]).fillCircle(r.cx,r.cy,t[1])})),e.config({fillStyle:"#ff7f08","arc-start-cap":"round","arc-end-cap":"round"}).fillArc(r.cx,r.cy,.78*r.radius,.9*r.radius,-.5*Math.PI,2*-Math.PI*r.process);var s=r.deep,n=1;s>.5&&(s-=.5,n=-1),s*=2,a(t,r.cx,r.cy,.6*r.radius,e.config("fillStyle","#ff7f08"),r.process,s,n),a(t,r.cx,r.cy,.6*r.radius,e.config("fillStyle","#fead2e"),r.process,s,-n)}}}];c.a.series("ui-process-wave",i);var o={mounted:function(){var e=document.getElementById("examples-github-banner");e.style.display="block",e.setAttribute("href","https://github.com/hai2007/clunch/tree/master/docs/src/pages/examples/page5"),window.clunch=new c.a({el:document.getElementById("canvas"),render:s,time:2e3,data:function(){return{process:0,process_value:"0.00%",deep:0}},mounted:function(){var e=this;this.process=Math.random(),this.process_value=(100*this.process).toFixed(2)+"%",setInterval((function(){e.process=Math.random(),e.process_value=(100*e.process).toFixed(2)+"%"}),4e3),this.deep=1,setInterval((function(){e.deep=0==e.deep?1:0}),2e3)}})}};r(81);o.render=function(e){return e("div",{id:"canvas","data-icrush-153c7931":""},[])};t.default=o}}]);