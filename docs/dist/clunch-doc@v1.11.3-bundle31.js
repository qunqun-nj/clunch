(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{89:function(n,r,t){"use strict";t.r(r),r.default='<!DOCTYPE html>\r\n<html lang="zh-cn">\r\n\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n    <title>刻度尺ruler | clunch.js内置组件</title>\r\n    <script src="https://cdn.jsdelivr.net/npm/clunch/dist/clunch-template.min.js"><\/script>\r\n</head>\r\n\r\n<body>\r\n    <div id="root" style=\'width:500px;height:300px;\'>\r\n        <ruler x=\'50\' y=\'150\' length=\'400\' :value=\'ruler\'></ruler>\r\n    </div>\r\n    <script>\r\n        new Clunch({\r\n            el: document.getElementById(\'root\'),\r\n            data: function () {\r\n                return {\r\n                    ruler: ["第一季度", "第二季度", "第三季度", "第四季度"]\r\n                };\r\n            }\r\n        });\r\n    <\/script>\r\n</body>\r\n\r\n</html>\r\n'}}]);