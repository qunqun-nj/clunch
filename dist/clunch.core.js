/*!
 * clunch.js <core> - 🎨 The Progressive JavaScript Interactive Picture Framework.
 * git+https://github.com/hai2007/clunch.git
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.1
 *
 * Copyright (c) 2020 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Mon Nov 30 2020 18:28:07 GMT+0800 (GMT+08:00)
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /**
   * 判断一个值是不是一个朴素的'对象'
   * 所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是朴素的'对象'返回true，否则返回false
   */

  function _isPlainObject (value) {
    if (value === null || _typeof(value) !== 'object' || getType(value) != '[object Object]') {
      return false;
    } // 如果原型为null


    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  }

  var domTypeHelp = function domTypeHelp(types, value) {
    return value !== null && _typeof(value) === 'object' && types.indexOf(value.nodeType) > -1 && !_isPlainObject(value);
  };
  var isString = _isString;

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  var isElement = function isElement(input) {
    return domTypeHelp([1, 9, 11], input);
  };

  //当前正在运动的动画的tick函数堆栈
  var $timers = []; //唯一定时器的定时间隔

  var $interval = 13; //指定了动画时长duration默认值

  var $speeds = 400; //定时器ID

  var $timerId = null;
  /*!
   * 💡 - 动画轮播
   * https://github.com/hai2007/tool.js/blob/master/animation.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  /**
   * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
   * @param {number} duration 动画时长，可选
   * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
   *
   * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
   */

  function animation (doback, duration, callback) {
    var clock = {
      //把tick函数推入堆栈
      "timer": function timer(tick, duration, callback) {
        if (!tick) {
          throw new Error('Tick is required!');
        }

        duration = duration || $speeds;
        var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
        $timers.push({
          "id": id,
          "createTime": new Date(),
          "tick": tick,
          "duration": duration,
          "callback": callback
        });
        clock.start();
        return id;
      },
      //开启唯一的定时器timerId
      "start": function start() {
        if (!$timerId) {
          $timerId = setInterval(clock.tick, $interval);
        }
      },
      //被定时器调用，遍历timers堆栈
      "tick": function tick() {
        var createTime,
            flag,
            tick,
            callback,
            timer,
            duration,
            passTime,
            timers = $timers;
        $timers = [];
        $timers.length = 0;

        for (flag = 0; flag < timers.length; flag++) {
          //初始化数据
          timer = timers[flag];
          createTime = timer.createTime;
          tick = timer.tick;
          duration = timer.duration;
          callback = timer.callback;

          passTime = (+new Date() - createTime) / duration;

          passTime = passTime > 1 ? 1 : passTime;
          tick(passTime);

          if (passTime < 1 && timer.id) {
            //动画没有结束再添加
            $timers.push(timer);
          } else if (callback) {
            callback(passTime);
          }
        }

        if ($timers.length <= 0) {
          clock.stop();
        }
      },
      //停止定时器，重置timerId=null
      "stop": function stop() {
        if ($timerId) {
          clearInterval($timerId);
          $timerId = null;
        }
      }
    };
    var id = clock.timer(function (deep) {
      //其中deep为0-1，表示改变的程度
      doback(deep);
    }, duration, callback); // 返回一个函数
    // 用于在动画结束前结束动画

    return function () {
      var i;

      for (i in $timers) {
        if ($timers[i].id == id) {
          $timers[i].id = undefined;
          return;
        }
      }
    };
  }

  // 初始化配置文件
  var initConfig = function initConfig(init, data) {
    for (var key in data) {
      try {
        init[key] = data[key];
      } catch (e) {
        throw new Error("Illegal property value！");
      }
    }

    return init;
  }; // 正则表达式

  var REGEXP = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    "whitespace": "[\\x20\\t\\r\\n\\f]"
  }; // 判断是否是一个合法的方法名或变量名

  var isValidKey = function isValidKey(key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
      console.warn('The beginning of _ or $ is not allowed：' + key);
    }
  };

  /**
   * 初始化配置文件
   *
   * @param {Json} init 默认值
   * @param {Json} data
   * @return {Json}
   */
  function initConfig$1 (init, data) {
    for (var key in data) {
      try {
        init[key] = data[key];
      } catch (e) {
        throw new Error("Illegal property value！");
      }
    }

    return init;
  }

  /*!
   * 💡 - Hermite三次插值
   * https://github.com/hai2007/tool.js/blob/master/Hermite.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  function hermite (config) {
    config = initConfig$1({
      // 张弛系数
      "u": 0.5
    }, config);
    var MR, a, b;
    /**
     * 根据x值返回y值
     * @param {Number} x
     */

    var hermite = function hermite(x) {
      if (MR) {
        var sx = (x - a) / (b - a),
            sx2 = sx * sx,
            sx3 = sx * sx2;
        var sResult = sx3 * MR[0] + sx2 * MR[1] + sx * MR[2] + MR[3];
        return sResult * (b - a);
      } else throw new Error('You shoud first set the position!');
    };
    /**
     * 设置点的位置
     * @param {Number} x1 左边点的位置
     * @param {Number} y1
     * @param {Number} x2 右边点的位置
     * @param {Number} y2
     * @param {Number} s1 二个点的斜率
     * @param {Number} s2
     */


    hermite.setP = function (x1, y1, x2, y2, s1, s2) {
      if (x1 < x2) {
        // 记录原始尺寸
        a = x1;
        b = x2;
        var p3 = config.u * s1,
            p4 = config.u * s2; // 缩放到[0,1]定义域

        y1 /= x2 - x1;
        y2 /= x2 - x1; // MR是提前计算好的多项式通解矩阵
        // 为了加速计算
        // 如上面说的
        // 统一在[0,1]上计算后再通过缩放和移动恢复
        // 避免了动态求解矩阵的麻烦

        MR = [2 * y1 - 2 * y2 + p3 + p4, 3 * y2 - 3 * y1 - 2 * p3 - p4, p3, y1];
      } else throw new Error('The point x-position should be increamented!');

      return hermite;
    };

    return hermite;
  }

  /**
   * Cardinal三次插值
   * ----------------------------
   * Hermite拟合的计算是，确定二个点和二个点的斜率
   * 用一个y=ax(3)+bx(2)+cx+d的三次多项式来求解
   * 而Cardinal是建立在此基础上
   * 给定需要拟合的二个点和第一个点的前一个点+最后一个点的后一个点
   * 第一个点的斜率由第一个点的前一个点和第二个点的斜率确定
   * 第二个点的斜率由第一个点和第二个点的后一个点的斜率确定
   */
  function cardinal (config) {
    config = initConfig({
      // 该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重
      "t": 0
    }, config);
    var HS, i; // 根据x值返回y值

    var cardinal = function cardinal(x) {
      if (HS) {
        i = -1; // 寻找记录x实在位置的区间
        // 这里就是寻找对应的拟合函数

        while (i + 1 < HS.x.length && (x > HS.x[i + 1] || i == -1 && x >= HS.x[i + 1])) {
          i += 1;
        }

        if (i == -1 || i >= HS.h.length) throw new Error('Coordinate crossing!');
        return HS.h[i](x);
      } else {
        throw new Error('You shoud first set the position!');
      }
    }; // 设置张弛系数【应该在点的位置设置前设置】


    cardinal.setT = function (t) {
      if (typeof t === 'number') {
        config.t = t;
      } else {
        throw new Error('Expecting a figure!');
      }

      return cardinal;
    }; // 设置点的位置
    // 参数格式：[[x,y],[x,y],...]
    // 至少二个点


    cardinal.setP = function (points) {
      HS = {
        "x": [],
        "h": []
      };
      var flag,
          slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]),
          temp;
      HS.x[0] = points[0][0];

      for (flag = 1; flag < points.length; flag++) {
        if (points[flag][0] <= points[flag - 1][0]) throw new Error('The point position should be increamented!');
        HS.x[flag] = points[flag][0]; // 求点斜率

        temp = flag < points.length - 1 ? (points[flag + 1][1] - points[flag - 1][1]) / (points[flag + 1][0] - points[flag - 1][0]) : (points[flag][1] - points[flag - 1][1]) / (points[flag][0] - points[flag - 1][0]); // 求解二个点直接的拟合方程
        // 第一个点的前一个点直接取第一个点
        // 最后一个点的后一个点直接取最后一个点

        HS.h[flag - 1] = hermite({
          "u": (1 - config.t) * 0.5
        }).setP(points[flag - 1][0], points[flag - 1][1], points[flag][0], points[flag][1], slope, temp);
        slope = temp;
      }

      return cardinal;
    };

    return cardinal;
  }

  function getStyle (dom, name) {
    // 获取结点的全部样式
    var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle; // 如果没有指定属性名称，返回全部样式

    return isString(name) ? allStyle.getPropertyValue(name) : allStyle;
  }

  // 返回数字数组[r,g,b,a]

  var formatColor = function formatColor(color) {
    var colorNode = document.getElementsByTagName('head')[0];
    colorNode.style['color'] = color;
    var rgba = getStyle(colorNode, 'color');
    var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
    return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
  }; // 获取一组随机色彩

  var getRandomColors = function getRandomColors(num, alpha) {
    if (!(alpha && alpha >= 0 && alpha <= 1)) alpha = 1;
    var temp = [];

    for (var flag = 1; flag <= num; flag++) {
      temp.push('rgba(' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + (Math.random(1) * 230 + 20).toFixed(0) + ',' + alpha + ')');
    }

    return temp;
  };

  /*!
   * 🔪 - 基本的树结构位置生成算法
   * https://github.com/hai2007/algorithm.js/blob/master/tree.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  function treeLayout (_config) {
    /**
     * 无论绘制的树结构是什么样子的
     * 计算时都假想目标树的样子如下：
     *  1.根结点在最左边，且上下居中
     *  2.树是从左往右生长的结构
     *  3.每个结点都是一块1*1的正方形，top和left分别表示正方形中心的位置
     */
    var config = _config || {},
        // 维护的树
    alltreedata,
        // 根结点ID
    rootid;
    /**
     * 把内部保存的树结点数据
     * 计算结束后会调用配置的绘图方法
     */

    var update = function update() {
      var beforeDis = [],
          size = 0,
          maxDeep = 0;

      (function positionCalc(pNode, deep) {
        if (deep > maxDeep) maxDeep = deep;
        var flag;

        for (flag = 0; flag < pNode.children.length; flag++) {
          // 因为全部的子结点的位置确定了，父结点的y位置就是子结点的中间位置
          // 因此有子结点的，先计算子结点
          positionCalc(alltreedata[pNode.children[flag]], deep + 1);
        } // left的位置比较简单，deep从0开始编号
        // 比如deep=0，第一层，left=0+0.5=0.5，也就是根结点


        alltreedata[pNode.id].left = deep + 0.5;

        if (flag == 0) {
          // beforeDis是一个数组，用以记录每一层此刻top下边缘（每一层是从上到下）
          // 比如一层的第一个，top值最小可以取top=0.5
          // 为了方便计算，beforeDis[deep] == undefined的时候表示现在准备计算的是这层的第一个结点
          // 因此设置最低上边缘为-0.5
          if (beforeDis[deep] == undefined) beforeDis[deep] = -0.5; // 父边缘同意的进行初始化

          if (beforeDis[deep - 1] == undefined) beforeDis[deep - 1] = -0.5; // 添加的新结点top值第一种求法：本层上边缘+1（比如上边缘是-0.5，那么top最小是top=-0.5+1=0.5）

          alltreedata[pNode.id].top = beforeDis[deep] + 1;
          var pTop = beforeDis[deep] + 1 + (alltreedata[pNode.pid].children.length - 1) * 0.5; // 计算的原则是：如果第一种可行，选择第一种，否则必须选择第二种
          // 判断第一种是否可行的方法就是：如果第一种计算后确定的孩子上边缘不对导致孩子和孩子的前兄弟重合就是可行的

          if (pTop - 1 < beforeDis[deep - 1]) // 必须保证父亲结点和父亲的前一个兄弟保存1的距离，至少
            // 添加的新结点top值的第二种求法：根据孩子取孩子结点的中心top
            alltreedata[pNode.id].top = beforeDis[deep - 1] + 1 - (alltreedata[pNode.pid].children.length - 1) * 0.5;
        } else {
          // 此刻flag!=0
          // 意味着结点有孩子，那么问题就解决了，直接取孩子的中间即可
          // 其实，flag==0的分支计算的就是孩子，是没有孩子的叶结点，那是关键
          alltreedata[pNode.id].top = (alltreedata[pNode.children[0]].top + alltreedata[pNode.children[flag - 1]].top) * 0.5;
        } // 因为计算孩子的时候
        // 无法掌握父辈兄弟的情况
        // 可能会出现父亲和兄弟重叠问题


        if (alltreedata[pNode.id].top <= beforeDis[deep]) {
          var needUp = beforeDis[deep] + 1 - alltreedata[pNode.id].top;

          (function doUp(_pid, _deep) {
            alltreedata[_pid].top += needUp;
            if (beforeDis[_deep] < alltreedata[_pid].top) beforeDis[_deep] = alltreedata[_pid].top;

            var _flag;

            for (_flag = 0; _flag < alltreedata[_pid].children.length; _flag++) {
              doUp(alltreedata[_pid].children[_flag], _deep + 1);
            }
          })(pNode.id, deep);
        } // 计算好一个结点后，需要更新此刻该层的上边缘


        beforeDis[deep] = alltreedata[pNode.id].top; // size在每次计算一个结点后更新，是为了最终绘图的时候知道树有多宽（此处应该叫高）

        if (alltreedata[pNode.id].top + 0.5 > size) size = alltreedata[pNode.id].top + 0.5;
      })(alltreedata[rootid], 0); // 传递的参数分别表示：记录了位置信息的树结点集合、根结点ID和树的宽


      return {
        "node": alltreedata,
        "root": rootid,
        "size": size,
        "deep": maxDeep + 1
      };
    };
    /**
     * 根据配置的层次关系（配置的id,child,root）把原始数据变成内部结构，方便后期位置计算
     * @param {any} initTree
     *
     * tempTree[id]={
     *  "data":原始数据,
     *  "pid":父亲ID,
     *  "id":唯一标识ID,
     *  "children":[cid1、cid2、...]
     * }
     */


    var toInnerTree = function toInnerTree(initTree) {
      var tempTree = {}; // 根结点

      var temp = config.root(initTree),
          id,
          rid;
      id = rid = config.id(temp);
      tempTree[id] = {
        "data": temp,
        "pid": null,
        "id": id,
        "children": []
      };
      var num = 1; // 根据传递的原始数据，生成内部统一结构

      (function createTree(pdata, pid) {
        var children = config.child(pdata, initTree),
            flag;
        num += children ? children.length : 0;

        for (flag = 0; children && flag < children.length; flag++) {
          id = config.id(children[flag]);
          tempTree[pid].children.push(id);
          tempTree[id] = {
            "data": children[flag],
            "pid": pid,
            "id": id,
            "children": []
          };
          createTree(children[flag], id);
        }
      })(temp, id);

      return {
        value: [rid, tempTree],
        num: num
      };
    }; // 可以传递任意格式的树原始数据
    // 只要配置对应的解析方法即可


    var tree = function tree(initTree) {
      var treeData = toInnerTree(initTree);
      alltreedata = treeData.value[1];
      rootid = treeData.value[0];

      if (treeData.num == 1) {
        alltreedata[rootid].left = 0.5;
        alltreedata[rootid].top = 0.5;
        return {
          deep: 1,
          node: alltreedata,
          root: rootid,
          size: 1
        };
      }

      return update();
    }; // 获取根结点的方法:root(initTree)


    tree.root = function (rootback) {
      config.root = rootback;
      return tree;
    }; // 获取子结点的方法:child(parentTree,initTree)


    tree.child = function (childback) {
      config.child = childback;
      return tree;
    }; // 获取结点ID方法:id(treedata)


    tree.id = function (idback) {
      config.id = idback;
      return tree;
    };

    return tree;
  }

  // 点（x,y）围绕中心（cx,cy）旋转deg度
  var _rotate = function rotate(cx, cy, deg, x, y) {
    var cos = Math.cos(deg),
        sin = Math.sin(deg);
    return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
  }; // 点（x,y）沿着向量（ax,ay）方向移动距离d

  var _move = function move(ax, ay, d, x, y) {
    var sqrt = Math.sqrt(ax * ax + ay * ay);
    return [+(ax * d / sqrt + x).toFixed(7), +(ay * d / sqrt + y).toFixed(7)];
  }; // 点（x,y）围绕中心（cx,cy）缩放times倍

  var _scale = function scale(cx, cy, times, x, y) {
    return [+(times * (x - cx) + cx).toFixed(7), +(times * (y - cy) + cy).toFixed(7)];
  };
  var dot = function dot(config) {
    config = initConfig({
      // 前进方向
      d: [1, 1],
      // 中心坐标
      c: [0, 0],
      // 当前位置
      p: [0, 0]
    }, config);
    var dotObj = {
      // 前进方向以当前位置为中心，旋转deg度
      "rotate": function rotate(deg) {
        var dPx = config.d[0] + config.p[0],
            dPy = config.d[1] + config.p[1];

        var dP = _rotate(config.p[0], config.p[1], deg, dPx, dPy);

        config.d = [dP[0] - config.p[0], dP[1] - config.p[1]];
        return dotObj;
      },
      // 沿着当前前进方向前进d
      "move": function move(d) {
        config.p = _move(config.d[0], config.d[1], d, config.p[0], config.p[1]);
        return dotObj;
      },
      // 围绕中心坐标缩放
      "scale": function scale(times) {
        config.p = _scale(config.c[0], config.c[1], times, config.p[0], config.p[1]);
        return dotObj;
      },
      // 当前位置
      "value": function value() {
        return config.p;
      }
    };
    return dotObj;
  };

  function tree (config) {
    config = initConfig({
      // 类型：如果不是下面五种之一，就认为是原始类型
      // type:LR|RL|BT|TB|circle
      // 如果类型是LR|RL|BT|TB需要设置如下参数
      // width,height:宽和高
      // 如果类型是circle需要设置如下参数
      // 1.cx,cy：圆心；2.radius:半径；3.begin-deg,deg：开始和跨越弧度（可选）
      "begin-deg": 0,
      "deg": Math.PI * 2
    }, config);
    var treeCalc = treeLayout() // 配置数据格式
    .root(config.root).child(config.child).id(config.id);

    var treeObj = function treeObj(initData) {
      // 计算初始坐标
      var orgData = treeCalc(initData); // 计算deep

      for (var key in orgData.node) {
        orgData.node[key].deep = orgData.node[key].left - 0.5;
      }

      if (config.type === 'LR' || config.type === 'RL') {
        // 每层间隔
        var dis1 = config.width / orgData.deep;
        if ("RL" === config.type) dis1 *= -1; // 兄弟间隔

        var dis2 = config.height / (orgData.size - -0.5);

        for (var i in orgData.node) {
          var node = orgData.node[i];
          orgData.node[i].left = +(("RL" == config.type ? config.width : 0) - -node.left * dis1).toFixed(7);
          orgData.node[i].top = +(node.top * dis2).toFixed(7);
        }
      } else if (config.type === 'TB' || config.type === 'BT') {
        // 每层间隔
        var _dis = config.height / orgData.deep;

        if ("BT" == config.type) _dis *= -1; // 兄弟间隔

        var _dis2 = config.width / (orgData.size - -0.5);

        var _left, _top;

        for (var _i in orgData.node) {
          var _node = orgData.node[_i];
          _left = _node.left;
          _top = _node.top;
          orgData.node[_i].top = +(("BT" == config.type ? config.height : 0) - -_left * _dis).toFixed(7);
          orgData.node[_i].left = +(_top * _dis2).toFixed(7);
        }
      } else if (config.type === 'circle') {
        // 如果只有一个结点
        if (orgData.deep == 1 && orgData.size == 1) {
          orgData.node[orgData.root].left = config.cx;
          orgData.node[orgData.root].top = config.cy;
        } // 如果有多个结点
        else {
            // 每层间距
            var _dis3 = config.radius / (orgData.deep - 1); // 兄弟间隔弧度


            var _dis4 = config.deg / (orgData.size - -0.5);

            for (var _i2 in orgData.node) {
              var _node2 = orgData.node[_i2];
              orgData.node[_i2].deg = (config['begin-deg'] - -_dis4 * _node2.top) % (Math.PI * 2);
              var pos = _rotate(config.cx, config.cy, orgData.node[_i2].deg, config.cx - -_dis3 * (_node2.left - 0.5), config.cy);
              orgData.node[_i2].left = +pos[0];
              orgData.node[_i2].top = +pos[1];
            }
          }
      } // 启动绘图


      if (isFunction(config.drawer)) {
        // 如果配置了绘图方法，就调用绘图方法
        config.drawer(orgData);
        return treeObj;
      } else {
        // 否则返回数据
        return orgData;
      }
    }; // 配置


    treeObj.config = function (_config) {
      config = initConfig(config, _config);
      return treeObj;
    }; // 设置绘图方法


    treeObj.drawer = function (drawerback) {
      config.drawer = drawerback;
      return treeObj;
    };

    return treeObj;
  }

  // 引入第三方提供的服务
  /**
   * 把类似
   * ['server1',...,function(server1,...){
   *      return function(){
   *          // todo
   *      }
   * }]
   * 解析成函数返回。
   */

  function serviceFactory (inputArray) {
    var methodServers = [];

    var _loop = function _loop(i) {
      // 如果是特殊的类型服务
      if (['boolean', 'number', 'json', 'string', 'color', 'any'].indexOf(inputArray[i]) > -1) {
        // type(默认值)(true)
        methodServers.unshift(function (value) {
          // 如果没有默认值就是必输的
          var required = arguments.length > 0 ? false : true;
          return function (needAnimation) {
            // 最后返回属性分析结果
            return {
              type: inputArray[i],
              required: required,
              animation: needAnimation,
              "default": value
            };
          };
        });
      } //  否则就是普通服务
      else {
          methodServers.unshift({
            "$animation": animation,
            "$cardinal": cardinal,
            "$formatColor": formatColor,
            "$getRandomColors": getRandomColors,
            "$tree": tree,
            "$dot": dot,
            "$rotate": _rotate,
            "$move": _move,
            "$scale": _scale
          }[inputArray[i]]);
        }
    };

    for (var i = inputArray.length - 2; i >= 0; i--) {
      _loop(i);
    }

    return inputArray[inputArray.length - 1].apply(this, methodServers);
  }

  // 包括一些校对等比较复杂的业务处理和错误提示
  // （处理render参数或者最终的组件对象）

  function aopRender (initRender, series) {
    return function doit(renders, pName) {
      var temp = [];

      for (var i = 0; i < renders.length; i++) {
        var render = renders[i];

        if (pName || render.name in series) {
          var aopRender = {
            name: render.name,
            attrs: {},
            events: [],
            scope: {}
          };
          var curSeries = pName ? {
            // 组件子属性
            attrs: series[pName].subAttrs[render.name]
          } : // 如果是单一的组件
          series[render.name]; // 属性预处理
          // 主要是需要把类似c-bind:x='index'或c-for='(value,index) in datalist'和x='10'解除差异
          // 这样的好吃是或许判断起来容易
          // 而且数据改变的时候，一些计算可以在此次提前完成

          for (var attrKey in render.attrs) {
            // 对c-bind:attrKey一类进行处理
            if (/^c\-bind\:/.test(attrKey)) {
              render.attrs[attrKey.replace(/^c\-bind\:/, '')] = {
                isBind: true,
                express: render.attrs[attrKey]
              };
            } // c-on:eventName@regionName
            else if (/^c\-on\:/.test(attrKey)) {
                var eventsArray = (attrKey.replace(/^c\-on\:/, '') + "@default").split('@');
                aopRender.events.push({
                  event: eventsArray[0],
                  region: eventsArray[1],
                  method: render.attrs[attrKey]
                });
              } // c-for="(value,key) in dataList"
              else if ('c-for' == attrKey) {
                  var flag = /^ {0,}\(/.test(render.attrs[attrKey]);

                  var _temp = flag ? // 格式：(value,key) in dataList
                  /^ {0,}\( {0,}([0-9a-zA-Z_$]+) {0,}, {0,}([0-9a-zA-Z_$]+) {0,}\) {1,}in {1,}([^ ]+) {0,}$/.exec(render.attrs[attrKey]) : // 格式：value in dataList
                  /^ {0,}([0-9a-zA-Z_$]+) {1,}in {1,}([^ ]+) {0,}$/.exec(render.attrs[attrKey]);

                  aopRender['c-for'] = {
                    key: flag ? _temp[2] : null,
                    value: _temp[1],
                    data: flag ? _temp[3] : _temp[2]
                  };
                } // c-if='flag'
                else if ('c-if' == attrKey) {
                    aopRender['c-if'] = render.attrs[attrKey];
                  } // 默认就是普通属性
                  else {
                      render.attrs[attrKey] = {
                        isBind: false,
                        express: render.attrs[attrKey]
                      };
                    }
          } // 校对预定义规则的属性


          for (var _attrKey in curSeries.attrs) {
            var curAttrs = curSeries.attrs[_attrKey]; // 对于必输项，如果没有输入，应该直接报错

            if (curAttrs.required && !(_attrKey in render.attrs)) {
              throw new Error('attrs.' + _attrKey + " is required for series " + render.name + "!");
            } // 添加定义的属性


            aopRender.attrs[_attrKey] = {
              animation: curAttrs.animation,
              type: curAttrs.type,
              value: _attrKey in render.attrs ? render.attrs[_attrKey] : {
                isBind: false,
                express: curAttrs["default"]
              }
            };
          } // 划分孩子结点和子组件


          var children_temp = [],
              subRender_temp = [],
              text_temp = []; // 因为render可能是人收到写的，孩子结点不一定有，需要判断一下

          if (render.children) {
            // 开始区分是独立的子节点还是当前组件的子组件
            // 文字比较特殊，提前初步记录在当前结点
            for (var _i = 0; _i < render.children.length; _i++) {
              // 文字
              if (isString(render.children[_i])) {
                text_temp.push(render.children[_i]);
              } // 如果这个组件存在于当前组件的子属性中，就应该是子组件
              else if (curSeries.subAttrs && render.children[_i].name in curSeries.subAttrs) {
                  subRender_temp.push(render.children[_i]);
                } // 独立的子组件
                else {
                    children_temp.push(render.children[_i]);
                  }
            }
          }

          aopRender.children = doit(children_temp);
          aopRender.subAttrs = doit(subRender_temp, render.name);
          aopRender.text = text_temp;
          temp.push(aopRender);
        } // 如果组件没有被注册，给出提示并忽略，因为可能是写出了
        else {
            console.error('Series ' + render.name + ' is not defined!');
          }
      }

      return temp;
    }(initRender);
  }

  function initMixin(Clunch) {
    // 对对象进行初始化
    Clunch.prototype.$$init = function (options) {
      this.__options = options; // 需要双向绑定的数据

      this.__data = isArray(options.data) ? serviceFactory(options.data) : isFunction(options.data) ? options.data() : options.data; // 记录状态

      this._isMounted = false;
      this._isDestroyed = false; // 挂载方法

      for (var key in options.methods) {
        // 由于key的特殊性，注册前需要进行校验
        isValidKey(key);
        this[key] = isArray(options.methods[key]) ? serviceFactory(options.methods[key]) : options.methods[key];
      } // 挂载数据


      for (var _key in this.__data) {
        isValidKey(_key);
        this[_key] = this.__data[_key];
      } // 记录是否传递了render或template
      // 这里的登记是为了后续重新挂载的时候判断是否需要重置render


      this.__renderFlag = !!options.render || !!options.template; // 如果render存在，结合当前信息获取真正的render
      // 为什么传递的render不是真正的？
      // 这是为了方便用户使用，用户写的render建立简单，后续初始化的时候，结合所有信息，再获取完整的

      if (!!options.render) {
        this.__renderAOP = aopRender(options.render, this.__defineSerirs);
      } // 如果没有render，再看看有没有传递template
      // 因此render优先级明显高于template
      else if (!!options.template) {
          this.__renderOptions = this.$$templateCompiler(options.template);
          this.__renderAOP = aopRender(this.__renderOptions, this.__defineSerirs);
        }
    };
  }

  function lifecycleMixin(Clunch) {
    // 生命周期调用钩子
    // 整个过程，进行到对应时期，都需要调用一下这里对应的钩子
    // 整合在一起的目的是方便维护
    Clunch.prototype.$$lifecycle = function (callbackName) {
      // beforeCreate，对象创建前
      if (isFunction(callbackName)) {
        callbackName();
      } else {
        if ([// 对象创建完毕
        'created', // 对象和页面关联前、后
        'beforeMount', 'mounted', // 对象和页面解关联前、后
        'beforeUnmount', 'unmounted', // 数据改动前、后
        'beforeUpdate', 'updated', // 画布大小改变前、后
        'beforeResize', 'resized', // 画布重新绘制前、后
        'beforeDraw', 'drawed', // 销毁组件
        'beforeDestroy', 'destroyed'].indexOf(callbackName) > -1 && isFunction(this.__options[callbackName])) {
          this.__options[callbackName].call(this);
        }
      }

      return this;
    };
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : ".concat(express, "\nstep='analyseExpress',index=").concat(i));
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
              expressArray.push(currentChar);
              next();
            }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
          var temp = "",
              beginTag = currentChar;
          next(); // 如果没有遇到结束标签
          // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
          // 后续如果希望支持，优化这里即可

          while (currentChar != beginTag) {
            if (i >= express.length) {
              // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
              throw new Error("String unclosed error : ".concat(express, "\nstep='analyseExpress',index=").concat(i));
            } // 继续拼接


            temp += currentChar;
            next();
          }

          expressArray.push(temp + "@string");
          next();
        } // 如果是数字
        else if (/\d/.test(currentChar)) {
            var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

            var _temp = currentChar;
            next();

            while (i < express.length) {
              if (/\d/.test(currentChar)) {
                _temp += currentChar;
                if (dotFlag == 'error') dotFlag = 'yes';
              } else if ('.' == currentChar && dotFlag == 'no') {
                _temp += currentChar;
                dotFlag = 'error';
              } else {
                break;
              }

              next();
            } // 如果小数点后面没有数字，辅助添加一个0


            if (dotFlag == 'error') _temp += "0";
            expressArray.push(+_temp);
          } // 如果是特殊符号
          // 也就是类似null、undefined等
          else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
              expressArray.push({
                "null": null,
                "true": true
              }[nextNValue(4)]);
              i += 3;
              next();
            } else if (['false'].indexOf(nextNValue(5)) > -1) {
              expressArray.push({
                'false': false
              }[nextNValue(5)]);
              i += 4;
              next();
            } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
              expressArray.push({
                "undefined": undefined
              }[nextNValue(9)]);
              i += 8;
              next();
            } // 如果是空格
            else if ($RegExp.blankReg.test(currentChar)) {
                do {
                  next();
                } while ($RegExp.blankReg.test(currentChar) && i < express.length);
              } else {
                var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
                // 这是为了和[key]进行区分，例如：
                // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
                // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
                // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

                if (currentChar == '.') {
                  dot = true;
                  next();
                } // 如果是标志符

                /**
                 *  命名一个标识符时需要遵守如下的规则：
                 *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
                 *  2.标识符不能以数字开头
                 */
                // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
                // 也就是类似flag等局部变量


                if ($RegExp.identifier.test(currentChar)) {
                  var len = 1;

                  while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
                    len += 1;
                  }

                  if (dot) {
                    expressArray.push('[');
                    expressArray.push(nextNValue(len - 1) + '@string');
                    expressArray.push(']');
                  } else {
                    var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

                    var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
                    expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
                  }

                  i += len - 2;
                  next();
                } // 都不是，那就是错误
                else {
                    throw new Error("Illegal express : ".concat(express, "\nstep='analyseExpress',index=").concat(i));
                  }
              }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var _i = 0; _i < expressArray.length; _i++) {
      if (["+", "-"].indexOf(expressArray[_i]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      _i == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[_i] + expressArray[_i + 1]);
        _i += 1;
      } else {
        expressArray[length++] = expressArray[_i];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
            hadMore = true; // 计算

            var tempValue = evalValue(temp);
            var _value = newExpressArray[newExpressArray.length - 1][tempValue];
            newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

            flag = false;
          } else {
            if (flag) {
              temp.push(expressArray[i]);
            } else {
              newExpressArray.push(expressArray[i]);
            }
          }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
        path = doit3(newExpressArray);
      } // 第一类
      else {
          var lastIndex = newExpressArray.lastIndexOf(']');
          var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
          path = [evalValue([calcValue(target, tempPath, scope)].concat(_toConsumableArray(newExpressArray.slice(lastIndex + 1))))];
        }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */
  /**
   * express举例子：
   *
   * [00]  ["a"].b[c]
   * [01]  a
   * [02]  [0]['value-index'][index+1]
   *
   * 如果是getValue,express还可以包含运算符：
   *  + - * / %  数值运算符
   *  && || !    逻辑运算符
   *
   * [03]  flag+10
   * [04]  a.b[index+1]-10
   * [05]  (a+b)/10-c[d]
   * [06]  [((a+b)-c)*f]+d
   *
   * [07]  !flag
   * [08]  (a>0 && b<=1) || !flag
   * [09]  '(flag)' == "("+temp+")"
   * [10]  a>10?"flag1":"flag2"
   *
   */
  // 解析一段表达式

  var evalExpress = function evalExpress(target, express) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope); // 如果不是表达式

    if (path.length > 1) throw new Error("Illegal expression : ".concat(express, "\nstep='evalExpress',path=").concat(path, ",expressArray=").concat(expressArray));
    return path[0];
  }; // 获取

  function updateMixin(Clunch) {
    // 重新绘制画布
    Clunch.prototype.$$updateView = function () {
      this.$$lifecycle('beforeDraw'); // todo

      this.$$lifecycle('drawed');
    }; // 画布大小改变的时候，更新


    Clunch.prototype.$$updateWithSize = function () {
      this.$$lifecycle('beforeResize'); // todo

      this.$$lifecycle('resized');
    }; // 数据改变的时候，需要重新计算需要绘制的具体图形


    Clunch.prototype.$$updateWithData = function () {
      this.$$lifecycle('beforeUpdate'); // 记录事件
      // 这样监听到canvas画布上事件的时候就知道如何触发更具体的事件

      this.__events = {
        click: {},
        dblclick: {},
        mousemove: {},
        mousedown: {},
        mouseup: {}
      };
      var renderSeries = [],
          that = this;

      (function doit(renderAOP, pScope) {
        for (var i = 0; i < renderAOP.length; i++) {
          // 继承scope
          for (var scopeKey in pScope) {
            if (!(scopeKey in renderAOP[i].scope)) {
              renderAOP[i].scope = pScope[scopeKey];
            }
          } // c-for指令
          // 由于此指令修改局部scope，因此优先级必须最高


          if ('c-for' in renderAOP[i]) {
            var cFor = renderAOP[i]['c-for'];
            delete renderAOP[i]['c-for'];
            var data_for = evalExpress(that, cFor.data, renderAOP[i].scope);

            for (var forKey in data_for) {
              renderAOP[i].scope[(cFor.value)] = data_for[forKey];
              if (cFor.key != null) renderAOP[i].scope[(cFor.key)] = forKey;
              renderSeries.push(doit([renderAOP[i]]), {});
            }

            continue;
          } // c-if
          // 如果c-if是false，就不用当前的就可以略过了


          if ('c-if' in renderAOP[i] && !evalExpress(that, renderAOP[i]['c-if'], renderAOP[i].scope)) continue; // todo

          console.log(renderAOP[i]);
        }
      })(this.__renderAOP, {});

      this.__renderSeries = renderSeries;
      this.$$lifecycle('updated');
    };
  }

  // 监听数据改变
  function watcher (that) {
    var _loop = function _loop(key) {
      var value = that.__data[key];
      that[key] = value; // 针对data进行拦截，后续对data的数据添加不会自动监听了
      // this.__data的数据是初始化以后的，后续保持不变，方便组件被重新使用（可能的设计，当前预留一些余地）
      // 当前对象数据会和方法一样直接挂载在根节点

      Object.defineProperty(that, key, {
        get: function get() {
          return value;
        },
        set: function set(newValue) {
          value = newValue; // 数据改变，触发更新

          that.$$updateWithData();
        }
      });
    };

    for (var key in that.__data) {
      _loop(key);
    }
  }

  function Clunch(options) {
    if (!(this instanceof Clunch)) {
      console.error('Clunch is a constructor and should be called with the `new` keyword');
      return;
    } // 对生命周期钩子进行预处理


    ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUnmount', 'unmounted', 'beforeUpdate', 'updated', 'beforeResize', 'resized', 'beforeDestroy', 'destroyed'].forEach(function (item) {
      if (isArray(options[item])) {
        options[item] = serviceFactory(options[item]);
      }
    });
    this.$$lifecycle(options.beforeCreate); // 创建对象

    this.$$init(options); // 对象创建好了以后，启动监听

    /**
     * 由于wactch监听的源头来自options
     * 如果监听在钩子created之后进行
     * 会导致此钩子设置的数据可能被监听函数忽略
     * 因此，我们这里就提前了此操作
     * 避免出现意料之外的错误
     */

    watcher(this);
    this.$$lifecycle('created'); // 如果初始化创建的时候没有传递el
    // 表示开始的时候不需要挂载
    // 可以后续主动挂载

    if (isElement(options.el)) {
      // 挂载
      this.$mount(options.el);
    }
  } // 在对象上挂载最基础的一些功能


  initMixin(Clunch);
  lifecycleMixin(Clunch);
  updateMixin(Clunch); // 初始化方法
  // （主要是内部使用，和创建的对象无关的初始化）
  // 需要特别注意的是，原型上的东西会在所有对象上面共享
  // 记录挂载的组件

  Clunch.prototype.__defineSerirs = {};

  // 监听画布大小改变
  function resize (that) {
    try {
      that.__resizeObserver = new ResizeObserver(function () {
        that.$$updateWithSize();
      }); // 监听

      that.__resizeObserver.observe(that.__el);
    } catch (e) {
      // 如果浏览器不支持此接口
      console.info(e);
      console.error('ResizeObserver undefined!');
    }
  }

  function compileSeries (series) {
    var temp = serviceFactory(series); // 校对属性

    for (var key in temp.attrs) {
      if (isFunction(temp.attrs[key])) {
        // 默认数据改变不启用动画
        temp.attrs[key] = temp.attrs[key](false);
      }
    } // 校对子属性


    for (var subSeriesName in temp.subAttrs) {
      for (var _key in temp.subAttrs[subSeriesName]) {
        if (isFunction(temp.subAttrs[subSeriesName][_key])) {
          temp.subAttrs[subSeriesName][_key] = temp.subAttrs[subSeriesName][_key](false);
        }
      }
    }

    return temp;
  }

  function initGlobalApi (Clunch) {
    // 挂载小组件
    Clunch.series = function (name, series) {
      // 如果传递的是json的方式
      if (arguments.length == 1) {
        for (var key in name) {
          Clunch.series(key, name[key]);
        }
      } // 挂载
      else {
          // 如果已经挂载了，需要警告提供
          if (isFunction(Clunch.prototype.__defineSerirs[name])) {
            console.warn('The series[' + name + '] has been registered!');
          } // 编译后挂载


          Clunch.prototype.__defineSerirs[name] = compileSeries(series);
        }

      return Clunch;
    };
  }

  initGlobalApi(Clunch); // 挂载的意思是Clunch对象和页面关联起来
  // 这样挂载了，才会真的绘制

  Clunch.prototype.$mount = function (el) {
    if (this._isDestroyed) {
      // 已经销毁的组件不能重新挂载
      console.warn('The clunch has been destroyed!');
      return;
    }

    if (this._isMounted) {
      // 已经挂载的组件需要主动解挂后才能再次进行挂载
      console.warn('The clunch is already mounted!');
      return;
    }

    if (!isElement(el)) {
      // 如果挂载结点不正确，自然不能挂载
      console.warn('Mount node does not exist!');
      return;
    }

    this.$$lifecycle('beforeMount'); // 如果我们没有在初始化对象的时候传递render（template也算传递了）
    // 那么我们在每次挂载的时候都会使用挂载地的内容进行组合

    if (!this.__renderFlag) {
      this.__renderOptions = this.$$templateCompiler(el.innerHTML);
      this.__renderAOP = aopRender(this.__renderOptions, this.__defineSerirs);
    } // 一切正确以后，记录新的挂载结点


    this.__el = el; // 初始化添加画布

    el.innerHTML = '<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>';
    this.__canvas = el.getElementsByTagName('canvas')[0]; // 触发数据改变更新

    this.$$updateWithData(); // 挂载后以后，启动画布大小监听

    resize(this); // 挂载完毕以后，同步标志

    this._isMounted = true;
    this.$$lifecycle('mounted');
    return this;
  }; // 解挂的意思是Clunch对象和页面解除关联
  // 后续绘制会停止，不过计算不会
  // 你可以重新挂载


  Clunch.prototype.$unmount = function () {}; // 彻底销毁资源，无法再重新挂载
  // 主要是为了释放一些内置资源


  Clunch.prototype.$destroy = function () {};
  /**
   *
   * >>> 总入口 <<<
   *
   * -------------------------------
   *
   * 【特别说明】
   *
   * 对于this.XXX的属性或方法，有如下规定：
   *  _ 和 __ 开头的表示资源，前者表示外界可以查看作为判断依据的（但不可以修改），后者为完全内部使用
   *  $ 和 $$ 开头的表示函数，前者表示外界可以调用的，后者表示内部使用
   *
   * 此外，对外暴露的方法的参数，如果是 __ 开头的，表示外部调用的时候应该忽略此参数
   *
   * -------------------------------
   *
   */
  // 添加特殊的分组组件


  Clunch.series('group', [function () {
    return {
      attrs: {}
    };
  }]);

  Clunch.prototype.$$templateCompiler = function (template) {
    throw new Error('Sorry, setting template property is not supported in the current environment : \n' + template);
  }; // 对外暴露调用接口


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Clunch;
  } else {
    window.Clunch = Clunch;
  }

}());
