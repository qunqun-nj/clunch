import { isFunction } from '@hai2007/tool/type';

// 生命周期管理

export function lifecycleMixin(Clunch) {

    // 生命周期调用钩子
    // 整个过程，进行到对应时期，都需要调用一下这里对应的钩子
    // 整合在一起的目的是方便维护
    Clunch.prototype.$$lifecycle = function (callbackName) {

        // beforeCreate，对象创建前
        if (isFunction(callbackName)) {
            callbackName();
        } else {

            if ([

                // 对象创建完毕
                'created',

                // 对象和页面关联前、后
                'beforeMount', 'mounted',

                // 对象和页面解关联前、后
                'beforeUnmount', 'unmounted',

                // 数据改动前、后
                'beforeUpdate', 'updated',

                // 画布大小改变前、后
                'beforeResize', 'resized',

                // 画布重新绘制前、后
                'beforeDraw','drawed',

                // 销毁组件
                'beforeDestroy', 'destroyed'

            ].indexOf(callbackName) > -1 && isFunction(this.__options[callbackName])) {
                this.__options[callbackName].call(this);
            }
        }

        return this;
    };

};
