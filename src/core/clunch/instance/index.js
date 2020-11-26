import { initMixin } from './init';
import { lifecycleMixin } from './lifecycle';
import { updateMixin } from './update';
import { drawerMixin } from './drawer';

// Clunch对象

function Clunch(options) {

    if (!(this instanceof Clunch)) {
        console.error('[Clunch error]: Clunch is a constructor and should be called with the `new` keyword');
        return;
    }

    // todo

}

// 在对象上挂载最基础的一些功能

initMixin(Clunch);
lifecycleMixin(Clunch);
updateMixin(Clunch);
drawerMixin(Clunch);

// 初始化方法
// （主要是内部使用，和创建的对象无关的初始化）

// 记录挂载的组件
Clunch.prototype.__defineSerirs={};

export default Clunch;
