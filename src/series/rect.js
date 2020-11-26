import { isFunction } from '@hai2007/tool/type';

// 矩形

export default ['number', "json", "string", "color", function ($number, $json, $string, $color) {
    return {
        attrs: {
            'fill-color': $color('black'),
            'stroke-color': $color('black'),
            'line-width': $number(1),
            dash: $json([]),
            type: $string('fill'),
            'align': $string('left'),
            'baseline': $string("top"),
            x: $number()(true),
            y: $number()(true),
            width: $number()(true),
            height: $number()(true)
        },
        region: {
            default: function (render, attr) {
                render().config({
                    "lineWidth": attr['line-width'],
                    "lineDash": attr.dash
                })[attr.type + "Rect"](attr.x, attr.y, attr.width, attr.height);
            }
        },
        link(painter, attr) {

            // 针对对齐方式进行校对

            if (attr.align == 'center') attr.x -= attr.width * 0.5;
            else if (attr.align == 'right') attr.x -= attr.width;

            if (attr.baseline == 'middle') attr.y -= attr.height * 0.5;
            else if (attr.baseline == 'bottom') attr.y -= attr.height;

            // 配置画笔
            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": attr['line-width'],
                "lineDash": attr.dash
            });

            let type = attr.type;

            if (isFunction(painter[type + "Rect"])) {
                // 画出图形
                painter[type + "Rect"](attr.x, attr.y, attr.width, attr.height);
            } else {
                throw new Error('Type error!' + JSON.stringify({ series: "rect", type }));
            }
        }
    }
}];





