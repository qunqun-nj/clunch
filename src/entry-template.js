import Clunch from './core/index';

// 挂载template解析器
import compileTemplate from './core/clunch/vnode/compile-template';
Clunch.prototype.$$templateCompiler = compileTemplate;

// 挂载内置组件

import arc from './series/arc';
import circle from './series/circle';
import path from './series/path';
import polarRuler from './series/polar-ruler';
import rect from './series/rect';
import ruler from './series/ruler';
import text from './series/text';

Clunch.series({
    arc,
    circle,
    path,
    "polar-ruler": polarRuler,
    rect,
    ruler,
    text
});

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Clunch;
} else {
    window.Clunch = Clunch;
}
