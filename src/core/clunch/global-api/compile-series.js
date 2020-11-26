import serviceFactory from '../../service/index';
import { isFunction } from '@hai2007/tool/type';

// 编译组件

export default function (series) {

    let temp = serviceFactory(series);

    // 校对属性
    for (let key in temp.attrs) {
        if (isFunction(temp.attrs[key])) {

            // 默认数据改变不启用动画
            temp.attrs[key] = temp.attrs[key](false);
        }
    }

    // 校对子属性
    for (let subSeriesName in temp.subAttrs) {
        for (let key in temp.subAttrs[subSeriesName]) {
            if (isFunction(temp.subAttrs[subSeriesName][key])) {
                temp.subAttrs[subSeriesName][key] = temp.subAttrs[subSeriesName][key](false);
            }
        }
    }

    return temp;

};
