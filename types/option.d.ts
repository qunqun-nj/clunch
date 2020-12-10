export interface option {

    /**
     * 挂载点
     */
    el: Element,

    /**
     * 数据
     */
    data: Function,

    /**
    * 数据改变是否需要过渡动画
    */
    animation: boolean,

    /**
     * 内置方法
     */
    methods: any,

    /**
     * 解除创建开始前执行
     */
    beforeCreate: Function | Array<any>,

    /**
     * 对象创建完成后执行
     */
    created: Function | Array<any>,

    /**
     * 挂载开始前执行
     */
    beforeMount: Function | Array<any>,

    /**
     * 挂载完成后执行
     */
    mounted: Function | Array<any>,

    /**
     * 解除挂载开始前执行
     */
    beforeUnmount: Function | Array<any>,

    /**
     * 解除挂载完成后执行
     */
    unmounted: Function | Array<any>,

    /**
     * 对象销毁前执行
     */
    beforeDestroy: Function | Array<any>,

    /**
    * 对象销毁后执行
    */
    destroyed: Function | Array<any>,

    /**
    * 数据改变导致的刷新开始前执行
    */
    beforeUpdate: Function | Array<any>,

    /**
    * 数据改变导致的刷新结束后执行
    */
    updated: Function | Array<any>,

    /**
    * 屏幕大小改变导致的刷新开始前执行
    */
    beforeResize: Function | Array<any>,

    /**
     * 屏幕大小改变导致的刷新结束后执行
     */
    resized: Function | Array<any>,

    /**
     * 画布更新前
     */
    beforeDraw: Function | Array<any>,

    /**
     * 画布更新后
     */
    drawed: Function | Array<any>

}
