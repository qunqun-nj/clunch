import { evalExpress } from '@hai2007/algorithm/value';
import animation from '@hai2007/tool/animation';
import { isFunction } from '@hai2007/tool/type';
import calcDeepSeries from '../../../tool/calcDeepSeries';

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

        // 准备计算前一些初始化判断
        if (isFunction(this.__observeWatcher.stop)) {
            this.__observeWatcher.stop();
        }

        // 如果上次数据改变没有结束，这次不应该触发数据改变前钩子
        else {
            this.$$lifecycle('beforeUpdate');
        }

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
        (function doit(renderAOP, pScope, isSubAttrs, pid) {

            // 如果当前计算的是某个父组件的子属性组件，应该返回
            let subRenderSeries = [];

            for (let i = 0; i < renderAOP.length; i++) {

                // 在一些特殊情况下，id应该由用户指定，在这里修改校对即可
                let id = pid + renderAOP[i].index;

                // 继承scope
                for (let scopeKey in pScope) {
                    if (!(scopeKey in renderAOP[i].scope)) {
                        renderAOP[i].scope[scopeKey] = pScope[scopeKey];
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
                        doit([renderAOP[i]], {}, false, id + "for" + forKey + "-");
                    }

                    continue;

                }

                // c-if
                // 如果c-if是false，就不用当前的就可以略过了
                if ('c-if' in renderAOP[i] && !evalExpress(that, renderAOP[i]['c-if'], renderAOP[i].scope)) continue;
                delete renderAOP[i]['c-if'];

                // 计算子组件
                doit(renderAOP[i].children, renderAOP[i].scope, false, id + "-");

                // group只是包裹，因此，组件本身不需要被统计
                if (renderAOP[i].name != 'group') {

                    let seriesItem = {
                        name: renderAOP[i].name,
                        attr: {},
                        subAttr: [],
                        subText: renderAOP[i].text,
                        id
                    };

                    // 计算属性
                    for (let attrKey in renderAOP[i].attrs) {
                        let oralAttrValue = renderAOP[i].attrs[attrKey];
                        seriesItem.attr[attrKey] = {
                            animation: oralAttrValue.animation,
                            type: oralAttrValue.type,

                            // 这里是根据是通过双向绑定还是写死的来区分
                            value: oralAttrValue.value.isBind ? evalExpress(that, oralAttrValue.value.express, renderAOP[i].scope) : oralAttrValue.value.express
                        };
                    }

                    // 计算子属性组件
                    seriesItem.subAttr = doit(renderAOP[i].subAttrs, renderAOP[i].scope, true, id + "-");

                    // 登记事件
                    for (let j = 0; j < renderAOP[i].events.length; j++) {
                        let event = renderAOP[i].events[j];
                        that.__events[event.event][renderSeries.length + "@" + event.region] = that[event.method];
                    }

                    // 计算完毕以后，根据情况存放好
                    if (isSubAttrs) subRenderSeries.push(seriesItem);
                    else renderSeries.push(seriesItem);
                }

            }

            return subRenderSeries;
        })

            // 分别表示：当前需要计算的AOP数组、父scope、是否是每个组件的子组件、父ID
            (this.__renderAOP, {}, false, "");

        // 如果没有前置数据，根本不需要动画效果
        if (!this.__renderSeries) {

            this.__renderSeries = renderSeries;
            this.$$updateView();
            this.$$lifecycle('updated');

            return;
        }

        let calcDeepSeriesFun = calcDeepSeries(this.__renderSeries, renderSeries);

        // 数据改变动画
        this.__observeWatcher.stop = animation(deep => {

            this.__renderSeries = calcDeepSeriesFun(deep);
            this.$$updateView();

        }, 500, deep => {
            if (deep == 1) {
                // 说明动画进行完毕以后停止的，我们需要触发'更新完毕'钩子
                this.__observeWatcher.stop = null;
                this.$$lifecycle('updated');
            }
        });

    };

};
