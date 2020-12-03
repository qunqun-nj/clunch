
let calcDeepValue = (oldValue, newValue, deep) => {

    // 首先，参与动画,而且值不一样
    if (newValue.animation && oldValue.value != newValue.value) {

        switch (newValue.type) {

            // 数字类型
            case 'number': {
                return {
                    type: newValue.type,
                    animation: true,
                    value: (newValue.value - oldValue.value) * deep + oldValue.value
                };
            }

        }

    }

    return newValue;

};

export default function (oldRenderSeries, newRenderSeries) {

    let linkIdToIndex = {};
    for (let index = 0; index < oldRenderSeries.length; index++) {
        let subLinkIdToIndex = {};
        for (let subIndex = 0; subIndex < oldRenderSeries[index].subAttr.length; subIndex++) {
            subLinkIdToIndex[oldRenderSeries[index].subAttr[subIndex].id] = subIndex;
        }
        linkIdToIndex[oldRenderSeries[index].id] = {
            index,
            subLinkIdToIndex
        };
    }

    return deep => {

        if (deep == 1) return newRenderSeries;

        let renderSeries = [];
        for (let i = 0; i < newRenderSeries.length; i++) {

            // 如果在旧的存在对照的
            if (newRenderSeries[i].id in linkIdToIndex) {

                // 对应的旧组件
                let oldSeries = oldRenderSeries[linkIdToIndex[newRenderSeries[i].id].index];

                let attr = {};
                // 先计算属性
                for (let attrKey in oldSeries.attr) {
                    attr[attrKey] = calcDeepValue(oldSeries.attr[attrKey], newRenderSeries[i].attr[attrKey], deep);
                }

                let subAttr = [];
                // 计算是子组件
                for (let j = 0; j < newRenderSeries[i].subAttr.length; j++) {

                    if (newRenderSeries[i].subAttr[j].id in linkIdToIndex[newRenderSeries[i].id].subLinkIdToIndex) {

                        let oldSubSeries = oldSeries.subAttr[linkIdToIndex[newRenderSeries[i].id].subLinkIdToIndex[newRenderSeries[i].subAttr[j].id]];

                        let subSeriesAttr = {};
                        // 计算子组件属性
                        for (let subSeriesAttrKey in oldSubSeries.attr) {
                            subSeriesAttr[subSeriesAttrKey] = calcDeepValue(oldSubSeries.attr[subSeriesAttrKey], newRenderSeries[i].subAttr[j].attr[subSeriesAttrKey], deep);
                        }

                        subAttr.push({
                            id: oldSubSeries.id,
                            name: oldSubSeries.name,
                            subText: oldSubSeries.subText,
                            subAttr: [],
                            attr: subSeriesAttr
                        });

                    } else {
                        subAttr.push(newRenderSeries[i].subAttr[j]);
                    }

                }

                renderSeries.push({
                    id: newRenderSeries[i].id,
                    name: newRenderSeries[i].name,
                    subText: newRenderSeries[i].subText,
                    subAttr,
                    attr
                });

            }
        }

        return renderSeries;

    };
};
