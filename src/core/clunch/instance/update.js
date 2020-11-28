
// 数据更新或画布改变需要进行的更新处理方法

export function updateMixin(Clunch) {

    // 重新绘制画布
    Clunch.prototype.$$updateView = function () {
        this.$$lifecycle('beforeDraw');

        // todo

        this.$$lifecycle('drawed');
    };

    // 画布大小改变的时候，更新
    Clunch.prototype.$$updateWithSize = function () {
        this.$$lifecycle('beforeResize');

        // todo

        this.$$lifecycle('resized');
    };

    // 数据改变的时候，需要重新计算需要绘制的具体图形
    Clunch.prototype.$$updateWithData = function () {
        this.$$lifecycle('beforeUpdate');

        // todo

        this.$$lifecycle('updated');
    };

};
