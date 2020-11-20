import Clunch from './clunch/instance/index';

// 挂载一些静态方法
import initGlobalApi from './clunch/global-api/index';
initGlobalApi(Clunch);

// 挂载的意思是Clunch对象和页面关联起来
// 这样挂载了，才会真的绘制
Clunch.prototype.$mount = function (el) {

};

// 解挂的意思是Clunch对象和页面解除关联
// 后续绘制会停止，不过计算不会
// 你可以重新挂载
Clunch.prototype.$unmount = function () {

};

// 彻底销毁资源，无法再重新挂载
// 主要是为了释放一些内置资源
Clunch.prototype.$destroy = function () {

};

/**
 *
 * >>> 总入口 <<<
 *
 * -------------------------------
 *
 * 【特别说明】
 *
 * 对于this.XXX的属性或方法，有如下规定：
 *  _ 和 __ 开头的表示资源，前者表示外界可以查看作为判断依据的（但不可以修改），后者为完全内部使用
 *  $ 和 $$ 开头的表示函数，前者表示外界可以调用的，后者表示内部使用
 *
 * 此外，对外暴露的方法的参数，如果是 __ 开头的，表示外部调用的时候应该忽略此参数
 *
 * -------------------------------
 *
 */

export default Clunch;
