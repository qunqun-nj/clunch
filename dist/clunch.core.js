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
 * Date:Thu Nov 26 2020 15:32:19 GMT+0800 (GMT+08:00)
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
  // （主要是内部使用，和创建的对象无关的初始化）
  // 记录挂载的组件

  Clunch.prototype.__defineSerirs = {};

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

  var isString = _isString;

  var isFunction = _isFunction;

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

  Clunch.prototype.$mount = function (el) {}; // 解挂的意思是Clunch对象和页面解除关联
  // 后续绘制会停止，不过计算不会
  // 你可以重新挂载


  Clunch.prototype.$unmount = function () {}; // 彻底销毁资源，无法再重新挂载
  // 主要是为了释放一些内置资源


  Clunch.prototype.$destroy = function () {};

  Clunch.prototype.$$templateCompiler = function (template) {
    throw new Error('Sorry, setting template property is not supported at this time : \n' + template);
  }; // 对外暴露调用接口


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = Clunch;
  } else {
    window.Clunch = Clunch;
  }

}());
