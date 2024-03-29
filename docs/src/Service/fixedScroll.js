import animation from '@hai2007/tool/animation';
import getUrlParam from './getUrlParam';

export default function (element, overValue) {

    overValue = overValue || 0;

    element = element || document.documentElement;

    let fixed = getUrlParam().fixed;
    if (fixed) {

        // 获取滚动调整结点
        let fixedDom = document.getElementById('fixed-' + fixed);
        if (fixedDom) {
            let offsetTop = fixedDom.offsetTop - overValue;
            let currentScrollTop = element.scrollTop || 0;
            animation(deep => {
                element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
            }, 500, () => {
                element.scrollTop = offsetTop;
            });
        }

    } else {
        element.scrollTop = 0;
    }

    document.getElementById('root-view').scrollTop=0;

};
