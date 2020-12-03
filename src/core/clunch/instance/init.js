import { isArray, isFunction } from '@hai2007/tool/type';
import serviceFactory from '../../service/index';
import { isValidKey } from '../../../tool/config';
import aopRender from '../vnode/AOP-render';

// 对象初始化相关

export function initMixin(Clunch) {

    // 对对象进行初始化
    Clunch.prototype.$$init = function (options) {

        this.__options = options;

        // 需要双向绑定的数据
        this.__data = isArray(options.data) ? serviceFactory(options.data) : (isFunction(options.data) ? options.data() : options.data);

        // 记录状态
        this._isMounted = false; this._isDestroyed = false;

        // 挂载方法
        for (let key in options.methods) {

            // 由于key的特殊性，注册前需要进行校验
            isValidKey(key);

            this[key] = isArray(options.methods[key]) ? serviceFactory(options.methods[key]) : options.methods[key];

        }

        // 挂载数据
        for (let key in this.__data) {
            isValidKey(key);
            this[key] = this.__data[key];
        }

        // 记录是否传递了render或template
        // 这里的登记是为了后续重新挂载的时候判断是否需要重置render
        this.__renderFlag = !!options.render || !!options.template;

        // 如果render存在，结合当前信息获取真正的render
        // 为什么传递的render不是真正的？
        // 这是为了方便用户使用，用户写的render建立简单，后续初始化的时候，结合所有信息，再获取完整的
        if (!!options.render) {
            this.__renderAOP = aopRender(options.render, this.__defineSerirs);
        }

        // 如果没有render，再看看有没有传递template
        // 因此render优先级明显高于template
        else if (!!options.template) {
            this.__renderOptions = this.$$templateCompiler(options.template);
            this.__renderAOP = aopRender(this.__renderOptions, this.__defineSerirs);
        }

        // 数据改变需要的初始化辅助参数
        this.__observeWatcher = {
            flag: false,
            stop: null
        };

    };

};
