import Clunch from './core/index';

// 对于错误设置了template属性进行又好提示
Clunch.prototype.$$templateCompiler = template => {
    throw new Error('Sorry, setting template property is not supported in the current environment : \n' + template);
};

// 对外暴露调用接口

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Clunch;
} else {
    window.Clunch = Clunch;
}
