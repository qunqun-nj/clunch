/*!
 * clunch.js <core> - 📊📈🎉The Progressive JavaScript Interactive Picture Framework.
 * git+https://github.com/hai2007/clunch.git
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.1
 *
 * Copyright (c) 2020 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Fri Nov 20 2020 22:20:34 GMT+0800 (GMT+08:00)
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

  function Clunch(options) {
    if (!(this instanceof Clunch)) {
      console.error('[Clunch error]: Clunch is a constructor and should be called with the `new` keyword');
      return;
    } // todo

  } // 在对象上挂载最基础的一些功能

  // 这样挂载了，才会真的绘制

  Clunch.prototype.$mount = function (el) {}; // 解挂的意思是Clunch对象和页面解除关联
  // 后续绘制会停止，不过计算不会
  // 你可以重新挂载


  Clunch.prototype.$unmount = function () {}; // 彻底销毁资源，无法再重新挂载
  // 主要是为了释放一些内置资源


  Clunch.prototype.$destroy = function () {};

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Clunch;
  } else {
    window.Clunch = Clunch;
  }

}());
