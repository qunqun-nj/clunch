import { isFunction } from '@hai2007/tool/type';
import compileSeries from './compile-series';

import { initGlobal } from './instance';

// 挂载一些通用的全局方法

export default function (Clunch) {

    initGlobal(Clunch);

    // 挂载小组件
    Clunch.series = function (name, series) {

        // 如果传递的是json的方式
        if (arguments.length == 1) {
            for (let key in name) {
                Clunch.series(key, name[key]);
            }
        }

        // 挂载
        else {

            // 如果已经挂载了，需要警告提供
            if (isFunction(Clunch.prototype.__defineSerirs[name])) {
                console.warn('The series[' + name + '] has been registered!');
            }

            // 编译后挂载
            Clunch.prototype.__defineSerirs[name] = compileSeries(series);

        }
        return Clunch;
    };

};
