import { initText, initArc, initCircle, initRect } from './config';
import { linearGradient, radialGradient } from './Gradient';

// 画笔对象，具体的绘制方法

export default function (platform, canvas, width, height) {

    let painter;

    // 如果是uni-app
    if (platform == 'uni-app') {

        painter = canvas.painter;

        painter.setTextBaseline('middle');
        painter.setTextAlign('left');

    }

    // 默认就是web
    else {

        // 获取canvas2D画笔
        painter = canvas.getContext("2d");

        //  如果画布隐藏或大小为0
        if (width == 0 || height == 0) throw new Error('Canvas is hidden or size is zero!');

        // 设置显示大小
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        // 设置画布大小（画布大小设置为显示的二倍，使得显示的时候更加清晰）
        canvas.setAttribute('width', width * 2);
        canvas.setAttribute('height', height * 2);

        // 通过缩放实现模糊问题
        painter.scale(2, 2);

        // 默认配置canvas2D对象已经存在的属性
        painter.textBaseline = 'middle';
        painter.textAlign = 'left';
    }

    // 默认配置不应该有canvas2D对象已经存在的属性
    // 这里是为了简化或和svg统一接口而自定义的属性
    let config = {
        "font-size": "16", // 文字大小
        "font-family": "sans-serif", // 字体
        "arc-start-cap": "butt", // 弧开始闭合方式
        "arc-end-cap": "butt" // 弧结束闭合方式
    };

    // 配置生效方法
    let useConfig = platform == 'uni-app' ?

        // uni-app
        (key, value) => {

            // 如果已经存在默认配置中，说明只需要缓存起来即可
            if (config[key]) {
                config[key] = value;
            } else {
                painter['set' + key[0].toUpperCase() + key.substr(1)](value);
            }

        } :

        // web
        (key, value) => {

            /**
             * -----------------------------
             * 特殊的设置开始
             * -----------------------------
             */

            if (key == 'lineDash') {
                painter.setLineDash(value);
            }

            /**
             * -----------------------------
             * 常规的配置开始
             * -----------------------------
             */

            // 如果已经存在默认配置中，说明只需要缓存起来即可
            else if (config[key]) {
                config[key] = value;
            }

            // 其它情况直接生效即可
            else {
                painter[key] = value;
            }
        };

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return painter[arguments[0]];
                for (let key in arguments[0]) {
                    useConfig(key, arguments[0][key]);
                }
            } else if (arguments.length === 2) {
                useConfig(arguments[0], arguments[1]);
            }
            return enhancePainter;
        },

        // 文字
        "fillText": function (text, x, y, deg) {
            painter.save();
            initText(painter, config, x, y, deg || 0, platform).fillText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },
        "strokeText": function (text, x, y, deg) {
            painter.save();
            initText(painter, config, x, y, deg || 0, platform).strokeText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },
        "fullText": function (text, x, y, deg) {
            painter.save();
            initText(painter, config, x, y, deg || 0, platform);
            painter.fillText(text, 0, 0);
            painter.strokeText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },

        // 路径
        "beginPath": function () { painter.beginPath(); return enhancePainter; },
        "closePath": function () { painter.closePath(); return enhancePainter; },
        "moveTo": function (x, y) { painter.moveTo(x, y); return enhancePainter; },
        "lineTo": function (x, y) { painter.lineTo(x, y); return enhancePainter; },
        "arc": function (x, y, r, beginDeg, deg) {
            painter.arc(x, y, r, beginDeg, beginDeg + deg, deg < 0);
            return enhancePainter;
        },
        "fill": function () { painter.fill(); return enhancePainter; },
        "stroke": function () { painter.stroke(); return enhancePainter; },
        "full": function () { painter.fill(); painter.stroke(); return enhancePainter; },

        "save": function () { painter.save(); return enhancePainter; },
        "restore": function () { painter.restore(); return enhancePainter; },

        // 路径 - 贝塞尔曲线
        "quadraticCurveTo": function (cpx, cpy, x, y) {
            painter.quadraticCurveTo(cpx, cpy, x, y); return enhancePainter;
        },
        "bezierCurveTo": function (cp1x, cp1y, cp2x, cp2y, x, y) {
            painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y); return enhancePainter;
        },

        // 擦除画面
        "clearRect": function (x, y, w, h) { painter.clearRect(x || 0, y || 0, w || width, h || height); return enhancePainter; },

        // 地址图片
        "toDataURL": function () { return canvas.toDataURL() },

        // 绘制图片
        "drawImage": function (img, sx, sy, sw, sh, x, y, w, h) {
            sx = sx || 0;
            sy = sy || 0;
            x = x || 0;
            y = y || 0;
            w = w ? w * 2 : width * 2;
            h = h ? h * 2 : height * 2;

            if (img.nodeName == 'CANVAS') {
                // 我们不考虑别的canvas，我们认为我们面对的canvas都是自己控制的
                // 如果有必要，未来可以对任意canvas进行向下兼容
                w = w / 2;
                h = h / 2;
                sw = sw ? sw * 2 : width * 2;
                sh = sh ? sh * 2 : height * 2;
            } else {
                // 默认类型是图片
                sw = (sw || img.width) * 2;
                sh = (sh || img.height) * 2;
            }

            painter.drawImage(img, sx, sy, sw, sh, x, y, w, h);
            return enhancePainter;
        },

        // 弧
        "fillArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill(); return enhancePainter;
        },
        "strokeArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke(); return enhancePainter;
        },
        "fullArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg);
            painter.fill();
            painter.stroke();
            return enhancePainter;
        },

        // 圆形
        "fillCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).fill(); return enhancePainter;
        },
        "strokeCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).stroke(); return enhancePainter;
        },
        "fullCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r);
            painter.fill();
            painter.stroke();
            return enhancePainter;
        },

        // 矩形
        "fillRect": function (x, y, width, height) {
            initRect(painter, x, y, width, height).fill(); return enhancePainter;
        },
        "strokeRect": function (x, y, width, height) {
            initRect(painter, x, y, width, height).stroke(); return enhancePainter;
        },
        "fullRect": function (x, y, width, height) {
            initRect(painter, x, y, width, height);
            painter.fill();
            painter.stroke();
            return enhancePainter;
        },

        /**
        * 渐变
        * -------------
        */

        //  线性渐变
        "createLinearGradient": function (x0, y0, x1, y1) {
            return linearGradient(painter, x0, y0, x1, y1);
        },

        // 环形渐变
        "createRadialGradient": function (cx, cy, r) {
            return radialGradient(painter, cx, cy, r);
        }

    };

    return enhancePainter;

};
