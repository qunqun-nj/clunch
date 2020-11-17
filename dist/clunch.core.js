/*!
 * clunch.js <core> - 📊📈🎉The Progressive JavaScript Interactive Picture Framework.
 * git+https://github.com/hai2007/clunch.git
 *
 * author hai2007
 *
 * version 0.1.0-alpha.0
 *
 * Copyright (c) 2020 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Nov 17 2020 11:24:21 GMT+0800 (GMT+08:00)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var Clunch = undefined; // 对外暴露调用接口

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Clunch;
  } else {
    window.Clunch = Clunch;
  }

}());
