import Clunch from './core/index';

// 对于错误设置了template属性进行又好提示
Clunch.prototype.$$templateCompiler = template => {
    throw new Error('Sorry, setting template property is not supported in the current environment : \n' + template);
};

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
