import { initMixin } from './init';
import { lifecycleMixin } from './lifecycle';
import { updateMixin } from './update';
import { drawerMixin } from './drawer';
import { isArray, isElement } from '@hai2007/tool/type';
import serviceFactory from '../../service/index';
import watcher from '../observe/watcher';

// Clunch对象

function Clunch(options) {

    if (!(this instanceof Clunch)) {
        console.error('[Clunch error]: Clunch is a constructor and should be called with the `new` keyword');
        return;
    }

    // 对生命周期钩子进行预处理

    [
        'beforeCreate', 'created',
        'beforeMount', 'mounted',
        'beforeUnmount', 'unmounted',
        'beforeUpdate', 'updated',
        'beforeResize', 'resized',
        'beforeDestroy', 'destroyed'
    ].forEach(item => {
        if (isArray(options[item])) {
            options[item] = serviceFactory(options[item]);
        }
    });

    this.$$lifecycle(options.beforeCreate);

    // 创建对象
    this.$$init(options);

    // 对象创建好了以后，启动监听
    /**
     * 由于wactch监听的源头来自options
     * 如果监听在钩子created之后进行
     * 会导致此钩子设置的数据可能被监听函数忽略
     * 因此，我们这里就提前了此操作
     * 避免出现意料之外的错误
     */
    watcher(this);

    this.$$lifecycle('created');

    // 如果初始化创建的时候没有传递el
    // 表示开始的时候不需要挂载
    // 可以后续主动挂载
    if (isElement(options.el)) {

        // 挂载
        this.$mount(options.el);

    }

}

// 在对象上挂载最基础的一些功能

initMixin(Clunch);
lifecycleMixin(Clunch);
updateMixin(Clunch);
drawerMixin(Clunch);

// 初始化方法
// （主要是内部使用，和创建的对象无关的初始化）

// 记录挂载的组件
Clunch.prototype.__defineSerirs = {};

export default Clunch;
