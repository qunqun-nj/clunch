import { isArray, isFunction } from '@hai2007/tool/type';
import serviceFactory from '../../service/index';
import { isValidKey } from '../../../tool/config';

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

    };

};
