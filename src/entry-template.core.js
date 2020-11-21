import Clunch from './core/index';

// 挂载template解析器
import compileTemplate from './core/clunch/vnode/compile-template';
Clunch.prototype.$$templateCompiler = compileTemplate;

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Clunch;
} else {
    window.Clunch = Clunch;
}
