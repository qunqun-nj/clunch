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

export default Clunch;
