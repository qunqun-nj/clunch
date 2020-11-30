import { evalExpress } from '@hai2007/algorithm/value';

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

        // 记录事件
        // 这样监听到canvas画布上事件的时候就知道如何触发更具体的事件
        this.__events = {
            click: {},
            dblclick: {},
            mousemove: {},
            mousedown: {},
            mouseup: {}
        };

        let renderSeries = [], that = this;
        (function doit(renderAOP, pScope) {

            for (let i = 0; i < renderAOP.length; i++) {

                // 继承scope
                for (let scopeKey in pScope) {
                    if (!(scopeKey in renderAOP[i].scope)) {
                        renderAOP[i].scope = pScope[scopeKey];
                    }
                }

                // c-for指令
                // 由于此指令修改局部scope，因此优先级必须最高
                if ('c-for' in renderAOP[i]) {

                    let cFor = renderAOP[i]['c-for'];
                    delete renderAOP[i]['c-for'];
                    let data_for = evalExpress(that, cFor.data, renderAOP[i].scope);

                    for (let forKey in data_for) {
                        renderAOP[i].scope[that, cFor.value] = data_for[forKey];
                        if (cFor.key != null) renderAOP[i].scope[that, cFor.key] = forKey;
                        renderSeries.push(doit([renderAOP[i]]), {});
                    }

                    continue;

                }

                // c-if
                // 如果c-if是false，就不用当前的就可以略过了
                if ('c-if' in renderAOP[i] && !evalExpress(that, renderAOP[i]['c-if'], renderAOP[i].scope)) continue;

                // todo
                console.log(renderAOP[i]);

            }

        })(this.__renderAOP, {});

        this.__renderSeries = renderSeries;

        this.$$lifecycle('updated');
    };

};
